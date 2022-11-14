import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"

export default function Verify(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body

    const { env } = process
    const secret = env.SECRET? env.SECRET : ""

    jwt.verify(token, secret, (error: any, decoded: any) => {
        if(error) return res.json({status: "error"})
        
        return res.json({status: "success", id: decoded.id})
    })
}