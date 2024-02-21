const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors);

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = [];

socketIO.on('connect', (socket) => {
    console.log(`${socket.id} user just connect`);

    socket.on('message', (data) => {
        socketIO.emit('messageRespone', data);
    });

    socket.on('newUser', (data) => {
        // Add user to list of users
        users.push(data);

        console.log('newUserResponse', users);

        // Send list to client
        socketIO.emit('newUserResponse', users);
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        users = users.filter((user) => user.socketID !== socket.id);
        socketIO.emit('newUserResponse', users);
        socket.disconnect();
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Hell World',
    });
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});