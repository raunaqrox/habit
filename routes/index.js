var db;
exports.getDb=function(database){
	db=database;
}
exports.index=function(req,res){
	if(req.session.username==null)
		res.render('index',{title:'My Habits!'});
	else
		res.render('index2',{title:'My Habits!'});
}