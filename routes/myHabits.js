var db;
var bson;
exports.getDb = function(database){
	db = database;
}
exports.getBson = function(BSON){
	bson = BSON;
}
exports.myHabits = function(req,res){
	var user = req.session.username;
	db.collection('habit').find({username:user}).toArray(function(err,habits){
		res.render('myHabits',{habits:habits});
	});
}
exports.thisHabit = function(req,res){
	res.render('thisHabit')
}
exports.thisHabit = function(req,res){
	var id = req.param('id');
	db.collection('habit').findOne({_id : new bson.ObjectID(id)}, function(err,habit){
		res.render('thisHabit',{habit:habit});
	});
}
exports.remThisHabit = function(req, res){
	var id = req.param('id');
	var nid = new bson.ObjectID(id);
	var user = req.session.username;
	db.collection('habit').findOne({_id : nid}, function(err, habit){
		if(habit.username === user){		
			db.collection('habit').remove({_id : nid},{justOne:true},function(err,result){
				if(!err){
					res.redirect('/myHabits');
				}
				else{
					console.log(err);
					res.send('Could not remove habit due to some technical issue');
				}
			});
		}
	});
}