const routes = require('express').Router();
const ContactsController = require('./Controller/ContactsController');

routes.post('/add',ContactsController.create);
routes.get('/search',ContactsController.indexbyOne);
routes.put('/alter',ContactsController.updateList);
routes.get('/list',ContactsController.index);
routes.delete('/del',ContactsController.delete);

module.exports = routes;