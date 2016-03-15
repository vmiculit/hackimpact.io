// Require, Create & Export Express App Object
var express = require('express');
var app = express();
module.exports = app

// DB Config & Connect
require('./app/config/db.config.js')

// App Config
require('./app/config/app.config.js')

// Passport, Session & Authetication Middleware Config
require('./app/config/passport.config.js')

// Routes
require('./app/controllers/routes.js')

// Live Server Configuration
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})