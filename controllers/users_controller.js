/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var user = require('../models/user.js');

router.get('/mydashboard', function (req, res) {
	res.render("dashboard");
});

router.get('/mydashboard/:page', function(req,res){
	console.log(req.params);
	res.render(req.params.page);
});

router.get('/login', function (req, res) {
	res.render("login");
});

router.get('/mydashboard2/', function (req, res) {
	res.render("dashboard");
});

router.get('/users', function (req, res) {
	user.all(function (data) {
		var hbsObject = { users: data };
		console.log(hbsObject);
		//res.render('index', hbsObject);
		res.json(hbsObject);
	});
});
router.get('/users/:id', function (req, res){
	user.byId(req.params.id, function(data){
		res.json(data);
	})
});

router.post('/users/create', function (req, res) {
	var columns = ["FirstName", "LastName", "Email", "Password", "GitHubLink", "Description", "Template"];
	var b = req.body;
	var values = [b.FirstName, b.LastName, b.Email, b.Password, b.GitHubLink, b.Description, b.Template];
	user.create(columns, values, function () {
		res.redirect('/users');
	});
});

router.put('/users/update/:id', function (req, res) {
	var condition = 'UserId = ' + req.params.id;
	var b = req.body;
	var values = {
		FirstName: b.FirstName, 
		LastName: b.LastName, 
		Email: b.Email,
		Password: b.Password, 
		GitHubLink: b.GitHubLink, 
		Description: b.Description, 
		Template: b.Template
		};

	console.log('condition', condition);

	user.update(values, condition, function () {
		res.redirect('/users');
	});
});

module.exports = router;
