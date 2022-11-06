import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"
import jwt from "jsonwebtoken"
import authConfig from "../../../config/Auth.json"

type User = {
    nome: string;
    email: string;
    github: string;
    id: string;
}

export default async function Authenticate(req: NextApiRequest, res: NextApiResponse) {
    (BigInt.prototype as any).toJSON = function () {
        return this.toString()
    }
    const { email, password } = req.body

    let data: any = await prisma.users.findFirst({
        select: {
            id: true,
            nome: true,
            email: true,
            senha: true,
            github: true
            
        },
        where: {
            email: email
        }
    });

    let user: User = {
        nome: data.nome,
        email: data.email,
        github: data.github,
        id: data.id.toString()
    }

    // verifica se o usuario existe
    if (!user) return res.status(400).json({ status: "error", status_msg: "User not found" })

    // verifica se a senha esta correta
    if (password != data.senha) return res.status(400).json({ status: "error", status_msg: "Invalid password" })

    return res.status(200).json({ user, token: generateToken({ id: user.id }) })

}

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 60 * 60 * 24 // 1 dia
    })
}