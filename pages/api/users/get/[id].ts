import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    try{
        const user = await prisma.users.findUnique({
            select: {
                nome: true,
                email: true,
                github: true,
                created_at: true,
            },
            where: {
                id: id? parseInt(id.toString()): undefined
            }
        })
        return res.status(200).json({ status: "success", status_msg: "User successfully fetched", user: user })
    } catch(error){
        return res.status(500).json({ status: "error", status_msg: error })
    }
}