var app = require('../../server.js')
var passport = require('passport')
var bcrypt = require('bcryptjs')

// Routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root : './public/templates'})
});

// API
app.post('/api/auth/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({error : 'Incorrect Email or Password. Please try again.'}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send({user: user});
        });
    })(req, res, next);
})
app.get('/api/auth/logout', function(req, res){
	req.logOut()
	// Improve me
	res.send({success: 'success'})
})
app.post('/api/register/orgReg', function(req, res){
	// Write me
	console.log(req.body);
	res.send({success: 'success'})
})
app.post('/api/register/hackReg', function(req, res){
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new User({
                email: req.body.email,
                password: hash,
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else { 
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({user: req.user}) }
                    })
                }
            })
            
        })
    })
})