var express = require('express');
var router = express.Router();
//var user = require('../models/user.js');
var models = require('../models');
var user = models.User;
var sequelizeConnection = models.sequelize;
var session = require('client-sessions');

//Manually adding one user into the database and then adding a project to that user

module.exports = function(app) {
    router.get('/samplePortfolio', function(req, res){
        res.render("portfolio/sample", {layout:"sampleportfolio"});
    })

    function renderPage(res, username, page){
        user.findOne({
            where: {
                "username": username
            }
        }).then(function(data) {
            res.locals.user = data;
            res.render(page, { layout: "portfolio"});
        });
    };

    router.get('/:portfolio/', function(req, res) {
        renderPage(res, req.params.portfolio, "portfolio/about");
    });

    router.get('/:portfolio/portfolio', function(req, res) {
        renderPage(res, req.params.portfolio, "portfolio/portfolio");
    });

    router.get('/:portfolio/about', function(req, res) {
        renderPage(res, req.params.portfolio, "portfolio/about");
    });

    router.get('/:portfolio/contact', function(req, res) {
        renderPage(res, req.params.portfolio, "portfolio/contact");    
    });



    app.use('/', router);


}
