var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;
var session = require('client-sessions');

//Manually adding one user into the database and then adding a project to that user
var jonathan;
module.exports = function(app) {
	function requireLogin (req, res, next){
		if(!req.user){
			res.redirect('/login');
		} else {
			next();
		}
	};

    router.get('/', requireLogin, function(req, res) {
        res.render("dashboard", {test: "Jonathan"});
    });

    //This allows you to route to any named view dynamically assuming that it exists
    router.get('/:page', function(req, res) {
        res.render(req.params.page);
    });

    app.use('/mydashboard', router);
}
//module.exports = router;
