var db;
exports.getDb=function(database){
	db=database;
}
exports.index=function(req,res){
	res.render('index',{title:'My Habits!'});
}
exports.make=function(req,res){
	res.render('habitMake');
}
exports.login = function(req,res){
	res.render('login');
}
exports.register=function(req,res){
	res.render('register');
}
exports.pmake=function(req,res){
	var title=req.body.title;
	var till = req.body.till;
	var from = req.body.from;
	var habit = {
		title:title,
		till:till,
		from:from
	}
	db.collection('habit').insert(habit,function(err,result){
		if(!err){
			res.end();	
		}
	});
}