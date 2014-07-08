var express= require('express');
var app=express();
var port = 3000;
var routes = require('./routes');
var MongoClient=require('mongodb').MongoClient;
var db;
var pass=require('pwd');
var dbUrl="mongodb://admin:habreg@kahana.mongohq.com:10060/habreg";
var bodyParser = require('body-parser');
MongoClient.connect(dbUrl,function(err,database){
	if(!err){
		console.log("We are connected");
		db=database;
		routes.getDb(db);
	}
});
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());
app.get('/',routes.index);
app.get('/make',routes.make);
app.get('/login',routes.login);
app.post('/login',routes.plogin);
app.get('/register',routes.register);
app.post('/make',routes.pmake);

app.listen(port,function(){
	console.log('Listening on port 3000');
});