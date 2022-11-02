import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import AuthConfig from "../../../config/Auth.json"

export default function Verify(req: NextApiRequest, res: NextApiResponse) {
    const { token } = JSON.parse(req.body)

    jwt.verify(token, AuthConfig.secret, (error: any, decoded: any) => {
        if(error) return res.json({status: "error"})
        
        return res.json({status: "success", id: decoded.id})
    })
}