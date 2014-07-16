var db;
var routes = require('../routes');
var users = require('../routes/users');
var profile = require('../routes/profile');
var habitMaker = require('../routes/habitMaker');
var myHabits = require('../routes/myHabits');
var checkIn = require('../routes/checkIn');
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://admin:habreg@kahana.mongohq.com:10060/habreg";
module.exports = MongoClient.connect(dbUrl,function(err,database){
	if(!err){
		console.log("We are connected");
		db = database;
		routes.getDb(db);
		users.getDb(db);
		profile.getDb(db);
		habitMaker.getDb(db);
		myHabits.getDb(db);
		checkIn.getDb(db);
	}
});