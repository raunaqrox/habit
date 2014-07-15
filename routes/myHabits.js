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
	db.collection('habit').findOne({_id:new bson.ObjectID(id)},function(err,habit){
		res.render('thisHabit',{habit:habit});
	});
}