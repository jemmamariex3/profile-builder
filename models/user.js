/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var user = {
	//get functions
	all: function (cb) {
		orm.all('Users', function (res) {
			cb(res);
		});
	},
	byId: function(id,cb){
		orm.byId('Users', id, function(res){
			cb(res)
		});
	},


	// Post Function
	create: function (cols, vals, cb) {
		orm.create('Users', cols, vals, function (res) {
			cb(res);
		});
	},

	//Put Function
	update: function (objColVals, condition, cb) {
		orm.update('Users', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = user;

// cat.delete(condition, function(data){
// 	res.redirect('/cats');
// });
