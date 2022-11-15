import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import { messageHandler, statusHandler } from "../../lib/socketHandlers";

export default function Socket(req: NextApiRequest, res: NextApiResponse) {
    if((res.socket as any).server.io){
        console.log("Já iniciado")
        res.end();
        return;
    }

    const io = new Server((res.socket as any).server);
    (res.socket as any).server.io = io

    function onConnection(socket : any) {
        messageHandler(socket)
        statusHandler(socket)
    }

    io.on("connection", onConnection);
    console.log("iniciando socket")
    res.end()
}