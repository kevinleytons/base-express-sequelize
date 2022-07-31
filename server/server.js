
const express = require('express')
const cors = require('cors')

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.sequelize = require('./config/db');

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await this.sequelize.sync({ force: true })
      
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  middlewares() {

    // CORS
    this.app.use(
      cors({
        origin: [ 'http://localhost:4200', 'http://192.168.0.2:4200'],
        methods: ['GET', 'POST']
      })
    );

    // Lectura del body
    this.app.use(express.json());

    // Public Directory
    // this.app.use(express.static('public'));
  }

  routes() {
    const API_PATHS = require('./config/routes.config')
    API_PATHS.forEach( config => {
      this.app.use( config.path, config.routes )
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port);
    })
  }

}

module.exports = Server;