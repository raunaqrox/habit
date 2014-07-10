var express= require('express');
var app=express();
var port = process.env.PORT || 3000;
var users = require('./routes/users');
var routes = require('./routes');
var session = require('express-session');
var bodyParser = require('body-parser');


/*=========================
Database.js
=========================*/

var database = require('./database/database');


/*=========================
Configuration / Middleware
=========================*/


app.use(session({secret:'habreg_awesome',cookie:{secret:true}}));
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());


var isLoggedIn = function(req, res, next) {
  if (req.session && req.session.user)
    next();
  else
    res.redirect('/login');
};

/*=========================
Index.js
=========================*/


app.get('/',routes.index);
app.get('/make',isLoggedIn,routes.make);
app.post('/make',isLoggedIn,routes.pmake);

/*=========================
Users.js
=========================*/

app.get('/login',users.login);
app.get('/useravail',users.useravail);
app.post('/login',users.plogin);
app.get('/register',users.register);
app.post('/register',users.pregister);

app.listen(port,function(){
	console.log('Listening on port 3000');
});