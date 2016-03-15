// Requires
var app = require('../../server.js')
var passport = require('passport')
var bcrypt = require('bcryptjs')
var User = require('../modules/user.module.js')
var Organization = require('../modules/organization.module.js')
var Challenge = require('../modules/challenge.module.js')
var sendgrid = require('../modules/email.module.js')


// File Routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root : './public/templates'})
});


// API Routes

// Authentication
app.post('/api/auth/login', userLogin)
app.get('/api/auth/check', userCheck)
app.get('/api/auth/logout', userLogout)

// Registration
app.post('/api/signup', userSignUp)
app.post('/api/register', orgRegistration)

// Challenge Operations
app.post('/api/createChallenge', createChallenge)
app.get('/api/retrieveUserChallenges', retrieveUserChallenges)
app.get('/api/retrieveActiveChallenges', retrieveActiveChallenges)


// Functions

function userLogin (req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({error : 'Incorrect Email or Password. Please try again.'}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send({ 
                userId     : req.user._id,
                userType   : req.user.type,
                userRole   : req.user.role,
                organizationId : req.user.organizationId,
                name : req.user.name,
                image : req.user.image,
             }); 
        });
    })(req, res, next);
}

function userCheck (req, res){
    if(req.user) {
        return res.send({ status : true})
    } else {
        return res.send({ status : false})
    }

}

function userLogout (req, res){
    req.logOut()
    // Improve me
    res.send({ status: true })
}

function userSignUp (req, res){
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new User({
                email: req.body.email,
                password: hash,
                type: req.body.type,
                role: req.body.role,
                // organizationId: req.body.organizationId,
                name: req.body.name,
                // image: req.body.image,
                skills: req.body.skills.split(', '),
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ error : saveErr }) }
                else { 
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ error : loginErr }) }
                        else { res.send({
                                userId     : req.user._id,
                                userType   : req.user.type,
                                userRole   : req.user.role,
                                name : req.user.name,
                                image : req.user.image,
                            })
                        }
                    })
                }
            })
            
        })
    })
}

function orgRegistration (req, res){
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            
            var newOrganization = new Organization({
                name: req.body.orgName,
                // logo: req.body.logo,
                activityShort: req.body.activityShort,
                activityLong: req.body.activityLong,
                impactLocation: req.body.impactLocation.split(', '),
            })
            newOrganization.save(function(saveErr, organization){
                if ( saveErr ) { res.send({ error : saveErr }) }
                else { 
                    console.log("orgId: "+ organization._id)
                    req.body.organizationId = organization._id

                    var newUser = new User({
                        email: req.body.email,
                        password: hash,
                        type: req.body.type,
                        role: req.body.role,
                        organizationId: req.body.organizationId,
                        name: req.body.userName,
                        // image: req.body.image,
                    });
                    newUser.save(function(saveErr, user){
                        if ( saveErr ) { res.send({ error : saveErr }) }
                        else { 
                            req.login(user, function(loginErr){
                                if ( loginErr ) { res.send({ error : loginErr }) }
                                else { res.send({
                                        userId     : req.user._id,
                                        userType   : req.user.type,
                                        userRole   : req.user.role,
                                        organizationId : req.user.organizationId,
                                        name : req.user.name,
                                        image : req.user.image,
                                    })
                                }
                            })
                        }
                    })
                }
            })
        })
    })
}

function createChallenge (req, res){
    var newChallenge = new Challenge({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        timeframe: req.body.timeframe,
        project: req.body.project,
        organizationId: req.user.organizationId,
        createdby: req.user._id,
    });
    newChallenge.save(function(saveErr, user){
        if ( saveErr ) { res.send({ error : saveErr }) }
        else { 
            res.send({ success: true})
        }
                        
    })
    
}

function retrieveUserChallenges (req, res){
    Challenge.find({ createdby : req.user._id }, function(err, userCreatedChallenges){

        res.send(userCreatedChallenges)
        
    })
}

function retrieveActiveChallenges (req, res){
    Challenge.find({ active : true }, function(err, activeChallenges){

        res.send(activeChallenges)
        
    })
}
