const Server = require('./models/server');
//const user=require('./basedato/usuarios.js');

require('dotenv').config();

const server =new Server();

server.listen();