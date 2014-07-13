var pass=require('pwd');
var db;
exports.getDb=function(database){
	db=database;
}
exports.login = function(req,res){
	res.render('login',{title:"Login"});
}
exports.register=function(req,res){
	res.render('register',{title:"Register"});
}
exports.pregister = function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var user = {};
	pass.hash(password,function(err,salt,hash){
		user.username=username;
		user.email=email;
		user.join=new Date();
		user.salt=salt;
		user.hash=hash;
		db.collection('users').insert(user,function(err,result){
		if(!err){
			res.redirect('/profile');
		}
	});
});
	

}
exports.useravail = function(req,res){
	var username=req.query.username;
	if(username.length!=0){
		db.collection('users').find({username:username}).toArray(function(err,documents){
		if(!err){
			if(documents.length===0){
				res.send('yes');
			}else{
				res.send('no');
			}
		}
	});
}else{
	res.end('nothing sent');
}
	
}
exports.plogin = function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	db.collection('users').findOne({username:username},function(err,user){
		if(!err){
			if(user!=null){
				pass.hash(password,user.salt,function(err,hash){
					if(user.hash == hash){
						req.session.username=username;
						req.session.password=password;
						res.send('yes');
					}else{
						res.send('no');
					}
				});
			}
		}
	});
}
exports.logout = function(req,res){
	req.session.username = null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    res.redirect('/');
}