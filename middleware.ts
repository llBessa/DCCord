import { NextRequest, NextResponse } from "next/server";

type RespostaAPI = {
    status: string;
    id: string | undefined;
}

export async function middleware(req: NextRequest) {
    const authHeader = req.headers.get("Authorization")

    // verifica se existe um token nos headers
    if (!authHeader) {
        return new NextResponse(undefined, {
            status: 401,
            statusText: "error : no token provided"
        })
    }

    const tokenParts = authHeader.split(" ")

    // verifica se o token possui duas partes
    if (!(tokenParts.length === 2)) {
        return new NextResponse(undefined, {
            status: 401,
            statusText: "error : Token error"
        })
    }

    const [scheme, token] = tokenParts;

    // verifica a existencia do "Bearer" no token
    if (!/Bearer/i.test(scheme)) {
        return new NextResponse(undefined, {
            status: 401,
            statusText: "error : Token malformatted"
        })
    }

    // verifica se o token é valido realizando uma requisição à rota de verificação da api
    // isso é necessário pois o middleware do Nextjs não pode utilizar das bibliotecas do node
    // logo, a validação com JWT deve ser feita na rota de API
    const response = await fetch(`http://${req.headers.get("host")}/api/auth/verify`, {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: { "Content-Type": "application/json" }
    })

    const dadosAPI = await response.json() as RespostaAPI

    // caso o token seja validado, o id de usuario é retornado na requisição
    if (dadosAPI?.status == "success") {
        return NextResponse.next()
    }

    // resposta caso o token seja inválido
    return new NextResponse(undefined, {
        status: 401,
        statusText: "error: Invalid token"
    })
}

export const config = {
    matcher: ["/api/users/get:path*"]
}