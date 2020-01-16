const { Router } = require('express');
const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

routes.get('/users', DevController.index);
routes.post('/users', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;