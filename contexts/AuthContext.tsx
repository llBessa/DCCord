import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from "nookies"
import { useRouter } from "next/router";
import { getAPIClient } from "../lib/fetch";

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>;
}

type SignInData = {
    email: string;
    password: string;
}

type apiAuthData = {
    token: string;
    user: User;
}

type apiVerifyTokenData = {
    status: string;
    id: string;
}

type apiUserData = {
    status: string;
    status_msg: string;
    user?: User
}

type User = {
    nome: string;
    email: string;
    github?: string;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()
    const api = getAPIClient()

    const isAuthenticated = !!user;

    useEffect(() => {
        const { "DCCord-token": token } = parseCookies()

        if(token){
            const verify = async () : Promise<any> => {
                // verifica a validade do token
                const response = await api.get("/api/auth/verify", {
                    method: "POST",
                    body: JSON.stringify({token: token}),
                    headers: {"Content-Type": "application/json"}
                })

                let dataToken: apiVerifyTokenData = await response.json()

                // atualiza os dados do usuario de acordo com o token provido
                if(dataToken.status == "success"){
                    let id = dataToken.id

                    const response = await api.get(`/api/users/get/${id}`)
                    const dataUser: apiUserData = await response.json()

                    if(dataUser.user) setUser(dataUser.user)
                }
            }

            verify()
        }

    })

    async function signIn({ email, password }: SignInData) {
        const response = await api.get("/api/auth", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" }
        })

        const { token, user }: apiAuthData = await response.json()

        setCookie(undefined, "DCCord-token", token, {
            maxAge: 60 * 60 * 3  // 3 horas
        })

        setUser(user)

        router.push("/chatpage")
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}