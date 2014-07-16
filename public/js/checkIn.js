$(function(){
	var li = $('#checkIn ul li');
	li.click(function(){
		$(this).css('text-decoration','line-through');
		var id = ($(this).data('id')).split('"')[1];
		var data = {id : id};
		$.post('/upDate',data,function(data){
			if(data === 'yes'){
				$(this).fadeOut(1000);
			}
		});

	});
});