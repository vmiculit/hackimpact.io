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
app.server = app.listen(port, function(){
  console.log('Server running on port ' + port);
})

// WebSocket Server Configuration
// var io = require('socket.io')
// var loggedInUsers = {}
// var socketServer = io(app.server)

// socketServer.use(function(socket, next){
//     app.sessionMiddleware(socket.request, {}, next);
// })

// socketServer.on("connection", function(socket){
//     if ( socket.request.session && socket.request.session.passport && socket.request.session.passport.user ) {

//         var id = socket.request.session.passport.user
//         User.findById(id, function(error, user){

//             console.log('socket user: ', user)
//             loggedInUsers[user.email] = true;
//             console.log('whos logged in? ', loggedInUsers)
//             socketServer.emit('loggedInUsers', loggedInUsers)


//             socket.on('chatMessage', function(data){
//                 console.log('message to server!', data)
//                 socketServer.emit('chatMessage', {sender:user.email,content:data})

//             })

            
//             socket.join(user.email)
//             socket.on('whisper', function(data){
//                 console.log('whisper ', data)
//                 console.log(loggedInUsers)
//                 socketServer.to(data.recipient).emit('whisper', {
//                     sender  : user.email,
//                     content : data.content
//                 })
//             })

//             socket.on('disconnect', function(){
//                 console.log('user disconnected');
//                 loggedInUsers[user.email] = false;
//                 socketServer.emit('loggedInUsers', loggedInUsers)

//             });
//         })
//     }

// })