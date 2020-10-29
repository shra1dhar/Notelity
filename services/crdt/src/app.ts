import express from 'express';
import http from "http";
import socketIo from "socket.io";
import cors from 'cors';
import router from './routes';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(router);

const port = 4001 || process.env.PORT;


// io.on('connect', (socket) => {
//   socket.on('join', ({ name, room }, callback) => {
//     const { error, user } = addUser({ id: socket.id, name, room });

//     if(error) return callback(error);

//     socket.join(user.room);

//     socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
//     socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

//     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

//     callback();
//   });

//   socket.on('sendMessage', (message, callback) => {
//     const user = getUser(socket.id);

//     io.to(user.room).emit('message', { user: user.name, text: message });

//     callback();
//   });

//   socket.on('disconnect', () => {
//     const user = removeUser(socket.id);

//     if(user) {
//       io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
//       io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
//     }
//   })
// });

// const getApiAndEmit = async (socket: socketIo.Socket) => {
//   try {
//     socket.emit("New msg emitted"); // Emitting a new message. It will be consumed by the client
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };

// let interval: NodeJS.Timeout;
// io.on("connection", (socket: socketIo.Socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }

//   socket.emit("connection", "You're connected");

//   interval = setInterval((socket) => getApiAndEmit(socket), 1000);

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
