var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;

//Manually adding one user into the database and then adding a project to that user
var jonathan;
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
	return sequelizeConnection.sync({force:true});
})
.then(function(){
	return models.User.create({
		firstName: "Jonathan",
    	lastName: "Arellano",
    	email: "jarellano@gmail.com",
    	password: "password",
    	description: "testing 123",
    	linkGitHub: "github.com"
	})
	.then(function(user){
		return jonathan = user;

	});
})
.then(function(){

	return models.Project.create({
		name: "Hangman",
	    linkLiveDemo: "hangmanapp.com",
	    description: "hangman game for bootcamp class.",
	    linkGitHub: "github.com"
	})
	.then(function(project){
		console.log("Jonathan = " + jonathan);
		return jonathan.addProject(project);
	});
});
//Remember to delete code above when deploying to production

//For now the root gets routed to /mydashboard. The root will route to the main website once it is created
router.get('/', function(req, res){
	res.redirect('/mydashboard');
});

router.get('/mydashboard', function (req, res) {
	res.render("dashboard");
});

//This allows you to route to any named view dynamically assuming that it exists
router.get('/mydashboard/:page', function(req ,res){

	console.log(err);
	res.render(req.params.page, function(err, html) {
  		res.send(html);
	});
});

module.exports = router;