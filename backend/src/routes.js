const express = require('express');

const Ongcontroller = require('./controller/OngController');
const incidentcontroller = require('./controller/incidentController');
const profilecontroller = require('./controller/ProfileController');
const sessioncontroller = require('./controller/SessionController');

const routes = express.Router();

routes.post('/session', sessioncontroller.create);

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', profilecontroller.index); 

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);


module.exports = routes;