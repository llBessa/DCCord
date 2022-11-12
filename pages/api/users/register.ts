import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function register(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password, github } = req.body

    try {
        let response = await prisma.users.create({
            data: {
                nome: name,
                email: email,
                senha: password,
                github: github ? github : undefined
            }
        })
        
        return res.status(200).json({ status: "success", status_msg: "Registro realizado com sucesso" })
    } catch (error) {
        return res.status(500).json({ status: "error", status_msg: error })
    }
}