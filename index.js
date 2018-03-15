const express = require('express');

const app = express();
//socketIO
const Server = require('http').Server;
const server = Server(app);
const io = require('socket.io')(server);
const socketEvents = require('./socketEvents/socketEvents');
//express
const bodyParser = require('body-parser');
const router = require('./routes/router');
const cors = require('cors');

// const corsOptions = {origin:'http://localhost:3000'};
const corsOptions = {origin:'*'};



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.use(cors('*'));

app.use(router);

socketEvents(io);
server.listen(4000, () => console.log('server running'));
