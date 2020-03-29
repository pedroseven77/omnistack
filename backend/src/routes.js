const express = require('express');

const ongcontroller = require ('./controllers/ongcontoller');
const casoscontroller = require ('./controllers/casoscontroller');
const perfilcontroller = require ('./controllers/perfilcontroller');
const sessaocontroller = require ('./controllers/sessaocontroller');

const routes = express.Router();

routes.post ('/sessao' , sessaocontroller.create); 

routes.get ('/ongs' , ongcontroller.index);
routes.post ('/ongs' , ongcontroller.create); 

routes.get ('/perfil' , perfilcontroller.index);

routes.get ('/casos' , casoscontroller.index);
routes.post ('/casos' , casoscontroller.create); 
routes.delete ('/casos/:id' , casoscontroller.delete); 

    module.exports = routes; 