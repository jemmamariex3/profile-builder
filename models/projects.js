var orm = require('../config/orm.js');

var project = {
	all: function(){
		orm.all("Projects", function(){
			cb(res);
		})
	},
	byId: function(id, cb){
		orm.byId("Projects", id, function(){
			cb(res);
		}
	}
};