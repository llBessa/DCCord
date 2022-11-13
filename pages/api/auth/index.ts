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

    try {
        var data: any = await prisma.users.findFirst({
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

        var user: User = {
            nome: data.nome,
            email: data.email,
            github: data.github,
            id: data.id.toString()
        }

        // verifica se a senha esta correta
        if (password != data.senha) return res.status(400).json({ status: "error", status_msg: "Senha invalida" })

        return res.status(200).json({
            status: "success",
            status_msg: "Usuario verificado",
            user,
            token: generateToken({ id: user.id })
        })

    } catch (error) {
        // verifica se o usuario existe
        if (!data) return res.status(400).json({ status: "error", status_msg: "Usuario não encontrado" })

        return res.status(500).json({ status: "error", status_msg: error })
    }
}

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 60 * 60 * 24 // 1 dia
    })
}