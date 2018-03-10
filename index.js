const express = require('express');

const app = express();
//socketIO
const Server = require('http').Server;
const server = Server(app);
const io = require('socket.io')(server);
const socketEvents = require('./socketEvents');
//express
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

const corsOptions = {origin:'http://localhost:3000'};



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.use(cors('*'));

app.use(router);

socketEvents(io);
server.listen(4000, () => console.log('server running'));
