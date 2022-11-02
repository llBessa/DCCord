import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"
import jwt from "jsonwebtoken"
import authConfig from "../../../config/Auth.json"

export default async function Authenticate(req: NextApiRequest, res: NextApiResponse) {
    (BigInt.prototype as any).toJSON = function() {
        return this.toString()
    }
    const { email, senha } = req.body

    const user = await prisma.users.findMany({
        select: {
            id: true,
            email: true,
            senha: true
        },
        where: {
            email: email
        }
    });

    // verifica se o usuario existe
    if (!user[0]) return res.status(400).json({ status: "error", status_msg: "User not found" })

    // verifica se a senha esta correta
    if (senha != user[0].senha) return res.status(400).json({ status: "error", status_msg: "Invalid password" })

    return res.status(200).json({ user, token : generateToken({id: user[0].id}) })

}

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 60 * 60 * 24 // 1 dia
    })
}