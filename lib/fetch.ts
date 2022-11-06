import { parseCookies } from "nookies"

// Retora um objeto com um metodo get
// Este metodo realiza requisições passando um token nos Headers
export function getAPIClient(ctx?: any) {
    const { "DCCord-token": token } = parseCookies(ctx)

    const api = {
        get: async (url: string, options?: RequestInit) : Promise<Response> => {
            let headers = new Headers(options? options.headers : undefined)
            headers.append("Authorization", `Bearer ${token}`)
    
            if(options){
                options.headers = headers
                return await fetch(url, options? options : undefined)  
            }
            else {
                let options: RequestInit = {headers: headers}
                return await fetch(url, options? options : undefined)
            }
        }
    }

    return api
}