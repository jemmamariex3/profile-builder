var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;
var session = require('client-sessions');
<<<<<<< HEAD
// var landing = require('../landing');
//Manually adding one user into the database and then adding a project to that user

module.exports = function(app) {
	router.get('/land', function(req, res) {
        // res.render('/landing/landing.html', {layout:false});
        res.redirect('landing');
=======

//Manually adding one user into the database and then adding a project to that user

module.exports = function(app) {
	router.get('/', function(req, res) {
        res.render('landing/index', {layout:"landing"});
>>>>>>> develop
    });

    app.use('/', router);
}
<<<<<<< HEAD

=======
>>>>>>> develop
