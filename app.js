var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var users = require('./routes/users');
var routes = require('./routes');
var session = require('express-session');
var bodyParser = require('body-parser');
var profile = require('./routes/profile');
var habitMaker = require('./routes/habitMaker');
var myHabits = require('./routes/myHabits');
var bson = require('mongodb').BSONPure;
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
  if (req.session && req.session.username)
    next();
  else
    res.redirect('/login');
};

/*=========================
Index.js
=========================*/

app.get('/',routes.index);

/*=========================
HabitMaker.js
=========================*/

app.get('/make',isLoggedIn,habitMaker.make);
app.post('/make',isLoggedIn,habitMaker.pmake);

/*=========================
Users.js
=========================*/

app.get('/login',users.login);
app.get('/useravail',users.useravail);
app.post('/login',users.plogin);
app.get('/register',users.register);
app.post('/register',users.pregister);
app.get('/logout',users.logout);

/*=========================
Profile.js
=========================*/

app.get('/profile',isLoggedIn,profile.profile);

/*=========================
myHabits.js
=========================*/
myHabits.getBson(bson);
app.get('/myhabits',isLoggedIn,myHabits.myHabits);
app.get('/myhabits/:id',myHabits.thisHabit);

app.listen(port,function(){
	console.log('Listening on port 3000');
});