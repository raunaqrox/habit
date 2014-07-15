var db;
exports.getDb=function(database){
	db=database;
}
exports.profile = function(req,res){
	var currUser=req.session.username;
	db.collection('users').findOne({username:currUser},function(err,user){
		if(!err){
			db.collection('habit').find({username:currUser}).toArray(function(err,habits){
				var d=(user.join).toLocaleDateString();
				if(habits.length===0){
					res.render('profile',{user:user,date:d,habits:0});
				}else{
					res.render('profile',{user:user,date:d,habits:habits.length});
				}
					
			});
		}
			
	});
}