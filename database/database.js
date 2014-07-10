var db;
var routes = require('../routes');
var users = require('../routes/users.js');
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://admin:habreg@kahana.mongohq.com:10060/habreg";
module.exports=MongoClient.connect(dbUrl,function(err,database){
	if(!err){
		console.log("We are connected");
		db = database;
		routes.getDb(db);
		users.getDb(db);
	}
});