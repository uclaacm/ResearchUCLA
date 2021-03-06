'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: true
}));

const config = require('./config');

// Connect to database
require('./models');

// Set up router endpoints
const userRouter = require('./routes/user');
app.use('/user', userRouter);

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});
