'use strict';

var User = require('../models')["User"];

module.exports = {
    up: function(queryInterface, Sequelize) {
        return User.bulkCreate([{
                firstName: "Jonathan",
                lastName: "Arellano",
                email: "jarellano@gmail.com",
                password: "password",
                description: "this is my profile",
                linkGitHub: "github.com",
                username: "jarellano"
            }, {
                firstName: "Jema",
                lastName: "Tiongson",
                email: "jtiongson@gmail.com",
                password: "password",
                description: "this is my profile",
                linkGitHub: "github.com",
                username: "jtiongson"
            }, {
                firstName: "Ramiro",
                lastName: "Lopez",
                email: "rlopez@gmail.com",
                password: "password",
                description: "this is my profile",
                linkGitHub: "github.com",
                username: "rlopez"
            }, {
                firstName: "Tim",
                lastName: "Hwang",
                email: "thwang@gmail.com",
                password: "password",
                description: "this is my profile",
                linkGitHub: "github.com",
                username: "somethingbig"
            }

        ])
    },

    down: function(queryInterface, Sequelize) {
        return User.destroy({
            where: {
                username: [
                    "jarellano",
                    "jtiongson",
                    "rlopez",
                    "somethingbig"
                ]
            }
        })
    }
};
