import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from "nookies"
import { useRouter } from "next/router";
import { getAPIClient } from "../lib/fetch";
import io from "socket.io-client"


type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<apiAuthData>;
}

type SignInData = {
    email: string;
    password: string;
}

type apiAuthData = {
    status: string;
    status_msg: string;
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
    name: string;
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

        if (token && !isAuthenticated) {
            const verify = async (): Promise<any> => {
                // verifica a validade do token
                const response = await fetch("/api/auth/verify", {
                    method: "POST",
                    body: JSON.stringify({ token: token }),
                    headers: { "Content-Type": "application/json" }
                })

                let dataToken: apiVerifyTokenData = await response.json()

                // atualiza os dados do usuario de acordo com o token provido
                if (dataToken.status == "success") {
                    let id = dataToken.id

                    const response = await api.get(`/api/users/get/${id}`)
                    const dataUser: apiUserData = await response.json()

                    if (dataUser.user) setUser(dataUser.user)
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

        const apiJsonResponse: apiAuthData = await response.json()

        if(response.status == 500) return {} as apiAuthData

        if (apiJsonResponse.user) {
            setCookie(undefined, "DCCord-token", apiJsonResponse.token, {
                maxAge: 60 * 60 * 3  // 3 horas
            })

            setUser(apiJsonResponse.user)

            router.push("/chatpage")

            const socket = io()

            socket.emit("login", {user: apiJsonResponse.user.name})

            return apiJsonResponse
        }

        return apiJsonResponse
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}