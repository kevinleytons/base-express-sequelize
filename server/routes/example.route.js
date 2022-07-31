
const express = require('express');
const app = express();

/* Controller */
const exampleController = require('../controllers/example.controller');

/* Guards */
const exampleGuard = require('../middlewares/example.guard');

/* Get all users */
app.get( '/', exampleGuard, exampleController.getExamples );

/* New register example */
app.post( '/', exampleController.saveExample );


module.exports = app;