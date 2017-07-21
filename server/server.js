const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateLocationMessage} = require('./utils/message');
const {generateMessage} = require('./utils/message');
var publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New User Connected');
    socket.on('disconnect', () => {
        console.log('User was Disconnected');
    });
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));
    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });
    socket.on('createLocationMessage', (coords) => {
       io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });
});


server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});