const express = require('express');
const routes = express.Router();
const subController = require('./controllers/SubController');
const sessionController = require('./controllers/SessionController');

routes.post('/sessions', sessionController.create);
routes.post('/substituicoes', subController.create);
routes.get('/substituicoes', subController.index);
routes.get('/substituicoes/:id', subController.getOne);
routes.post('/confirmacao/:id', subController.update);
routes.post('/cancela/:id', subController.updateStatus);
module.exports = routes;