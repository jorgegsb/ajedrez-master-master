import { createServer } from 'http';
import { Server } from 'socket.io';
//http-server gonna be the base server and the link to the socket-server
const httpServer = createServer();
const io = new Server(httpServer);

//manage some events from the server
io.on("connection", (socket) => {
    console.log("socket connected");
    socket.emit("connected", {});
});
httpServer.listen(5500);