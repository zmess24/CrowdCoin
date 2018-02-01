const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaign/new')
    .add('/campaigns/:address', '/campaigns/show');
    
module.exports = routes;