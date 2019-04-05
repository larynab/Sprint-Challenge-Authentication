const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const configureRoutes = require('../config/routes.js');
// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');
// const restricted = require('../auth/restricted-middleware.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api/auth', authRouter);
// server.use('/api/users', restricted, usersRouter);

// configureRoutes(server);

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;
