var db;
var bson;
exports.getBson = function(BSON){
	bson = BSON;
}

exports.getDb = function(database){

	db = database;

}

exports.checkIn = function(req,res){
	var user = req.session.username;
	db.collection('habit').find({username : user}).toArray(function(err,habits){
		res.render('checkIn',{habits : habits});
	});
}

exports.upDate = function(req,res){
	var id = new bson.ObjectID(req.body.id);
	var user = req.session.username;
	db.collection('habit').findOne({_id : id},function(err,habit){
		if(habit.username === user){
			db.collection('habit').update({_id : id},{$inc: {count:1}},function(err,result){
				if(!err){
					res.send('yes');
				}else{
					res.send('no');
				}
			});
		}else{
			res.send('Could not successfully checkIn for this habit');
		}
	});

}