/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

var models = require('../models');
var user = models.User;
var sequelizeConnection = models.sequelize;


router.get('/api/users', function(req, res) {
    user.findAll().then(function(data) {
        res.json(data);
    });
});

router.get('/api/users?id', function(req, res) {
    user.findById(req.params.id).then(function(data) {
        res.json(data);
    })
});

router.post('/api/users', function(req, res) {
    var r = req.body;
    user.create({
            firstName: r.firstName,
            lastName: r.lastName,
            email: r.email,
            password: r.password,
            description: r.description,
            linkGitHub: r.linkGitHub
        })
        .then(function(data) {
            res.json(data);
        })
});

router.put('/api/users/:id', function(req, res) {
    var r = req.body;
    user.update({
        firstName: r.firstName,
        lastName: r.lastName,
        email: r.email,
        password: r.password,
        description: r.description,
        linkGitHub: r.linkGitHub
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
    	res.json(data);
    })
});

module.exports = router;
