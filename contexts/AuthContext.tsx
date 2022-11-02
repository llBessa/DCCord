import { createContext } from "react"
import { setCookie } from "nookies"

type AuthContextType = {
    isAuthenticated: boolean;
}

type SignInData = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }){
    const isAuthenticated = false;
    let token, user;

    async function signIn({email, password} : SignInData){
        await fetch("/api/Auth", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {"Content-Type" : "json/application"}
        })
        .then(response => {return response.json()})
        .then(data => {
            token = data.token
        })
    }

    setCookie(undefined, "DCCord-token", token, {
        maxAge: 3600 * 2 // 1 hora
    })

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}