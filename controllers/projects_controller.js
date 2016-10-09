/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

var models = require('../models');
var project = models.Project;
var user = models.User;

var sequelizeConnection = models.sequelize;

var currentUser;

user.findById(1).then(function(data){
	currentUser = data;
});


router.get('/api/projects', function(req, res) {
    project.findAll().then(function(data) {
        res.json(data);
    });
});

router.get('/api/projects?id', function(req, res) {
    project.findById(req.params.id).then(function(data) {
        res.json(data);
    })
});

router.post('/api/projects', function(req, res) {
    var r = req.body;

    project.create({
            name: r.name,
            linkLiveDemo: r.linkLiveDemo,
            description: r.description,
            linkGitHub: r.linkGitHub
        })
        .then(function(project) {
        	currentUser.addProject(project);
        	var dto = {currentUser, project};
            res.json(dto);
        });
});

router.put('/api/projects/:id', function(req, res) {
    var r = req.body;
    project.update({
            name: r.name,
            linkLiveDemo: r.linkLiveDemo,
            description: r.description,
            linkGitHub: r.linkGitHub
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.json(data);
        })
});

module.exports = router;
