var express = require('express');
var router = express.Router();
var user = require('../models/user.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;

//Manually adding one user into the database and then adding a project to that user
var jonathan;
module.exports = function(app) {

    router.get('/', function(req, res) {
        res.render("dashboard", function(err, html) {
            console.log(err);
            if (err !== null) {
                return res.redirect('/mydashboard');
                throw err;
            }

            res.send(html);
        });
    });

    //This allows you to route to any named view dynamically assuming that it exists
    router.get('/:page', function(req, res) {

        console.log(req.params.page);
        res.render(req.params.page);
    });

    app.use('/mydashboard', router);
}
//module.exports = router;
