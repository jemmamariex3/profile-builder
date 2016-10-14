var express = require('express');
var router = express.Router();

var models = require('../models');
var project = models.Project;
var user = models.User;

var session = require('client-sessions');

var sequelizeConnection = models.sequelize;

var bcrypt = require('bcrypt');
//function to find user by username. cb(exists, data)  is returned. Exists will be true or false
module.exports = function(app) {
    function findByUsername(username, cb) {
        user.findOne({
            where: {
                'username': username
            }
        }).then(function(data) {
            if (data == null) {
                cb(false, data);
            } else {
                cb(true, data);
            }

        })
    };
    
    router.post('/register', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        findByUsername(username, function(exists, userData) {
            if (exists) {
                res.json({ "Reponse": "User already exists." });
            } else {
                bcrypt.genSalt(10, function(err, salt) {
                    // once the salt is made, hash the password with that salt
                    bcrypt.hash(password, salt, function(err, hash) {
                        var r = req.body;
                        user.create({
                                firstName: r.firstName,
                                lastName: r.lastName,
                                email: r.email,
                                password: hash,
                                description: r.description,
                                linkGitHub: r.linkGitHub,
                                username: r.username
                            })
                            .then(function(data) {
                                res.redirect('/api/users');
                            });
                    });
                });
            };
        });
    });



    router.post('/login', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        findByUsername(username, function(exists, userData) {
            if (exists) {
                bcrypt.compare(password, userData.password, function(err, matched) {
                    // if the password is true
                    if (matched === true) {
                        // you can make the site operate as intended for logged in users
                        req.session.user = userData;
                        //res.json({ "Response": "Success. You have logged in." })
                        res.redirect('/mydashboard');
                    } else {
                        // otherwise, you can black access to parts of your site
                        res.json({ "Response": 'Fail. Your passord was rejected' });
                    }
                });
            } else {
                res.json({ "Response": "Username not found in the system" });
            }
        })
    });

//Reset password function
router.post('/reset-password', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    //New Pass word Variable 
    var newPassword = req.body.newPassword;
    var newPasswordConfirm = req.body.newPasswordConfirm;

    if (newPassword != newPasswordConfirm) {
        res.json({ "Response": "Password does not match, Please try again!" });
    }

    findByUsername(username, function(exists, userData) {
        if (exists) {
            bcrypt.compare(password, userData.password, function(err, matched) {
                // if the password is true
                if (matched === true) {

                    bcrypt.genSalt(10, function(err, salt) {
                        // once the salt is made, hash the password with that salt
                        bcrypt.hash(newPassword, salt, function(err, hash) {

                            user.update({
                                    password: hash
                                })
                                .then(function(data) {
                                    res.redirect('/mydashboard');
                                });
                        });
                    });
                    // you can make the site operate as intended for logged in users
                    //req.session.user = userData;
                    //res.json({ "Response": "Success. You have logged in." })
                    res.redirect('/mydashboard');
                } else {
                    // otherwise, you can black access to parts of your site
                    res.json({ "Response": 'Fail. Your password was rejected' });
                }
            });
        } else {
            res.json({ "Response": "Username not found in the system" });
        }
    })
});


  	router.get('/login', function (req, res) {
  		if(req.user){
			return res.redirect('/mydashboard');
		}
		res.render("login", {layout:"landing"});
	});

	router.get('/logout', function(req, res){
		req.session.reset();
		res.redirect('/login');
	})


    
    app.use('/', router);
}




//module.exports = router;
