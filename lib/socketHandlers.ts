export function messageHandler(socket: any) {
    const createdMessage = (msg: any) => {
        socket.broadcast.emit("newIncomingMessage", msg);
    };

    socket.on("createdMessage", createdMessage);
}

export function statusHandler(socket: any){
    const handler = (msg: any) => {
        socket.broadcast.emit("newLogin", msg);
    };

    socket.on("login", handler)
}