const express = require('express');
const ongcontroller = require('./controllers/ongcontroller');
const inccontroller = require('./controllers/inccontroller');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');



const routes = express.Router();

//autenticar o login
routes.post('/session', sessionController.create);


routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('/incidents', inccontroller.index );
routes.post('/incidents', inccontroller.create );

//deletar um incident
routes.delete('/incidents/:id', inccontroller.delete);

//buscar apenas um incidents
routes.get('/profile', profileController.index);



module.exports = routes