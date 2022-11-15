import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function Get(req: NextApiRequest, res: NextApiResponse){
    try {
        const users = await prisma.users.findMany({select: {
            name: true,
            email: true,
            github: true
        }})
        return res.status(200).json({status: "success", status_msg: "Users successfully fetched", users: users})
    } catch (error) {
        res.status(500).json({status: "error", status_msg: error})
    }
}