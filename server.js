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

if (process.env.environment === 'local') {
	var port = 3000
} else {
	var port = 80
}

// Live Server Configuration
app.listen(port, function(){
  console.log('Server running on port ' + port);
})