

const dotenv = require('dotenv');
const Server = require('./server/server');

// Configurar dot.env
dotenv.config();

const server = new Server();

server.listen();