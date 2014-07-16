var db;
exports.getDb = function(database){
	db = database;
}
exports.make = function(req,res){
	res.render('habitMake',{title:'My Habits!'});
}
exports.pmake = function(req,res){
	var title=req.body.title;
	var till = req.body.till;
	var from = req.body.from;
	var user = req.session.username;
	var habit = {
		username:user,
		title:title,
		till:till,
		from:from,
		count:0
	}
	db.collection('habit').insert(habit,function(err,result){
		if(!err){
			res.end('yes');	
		}
		else{
			res.end('no');
		}
	});
}