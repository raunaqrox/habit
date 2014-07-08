$(function(){
	$loading=$('#load');
	$(document)
	  .ajaxStart(function () {
	    $loading.show();
	  })
	  .ajaxStop(function () {
	    $loading.hide();
	  });


/*==========================

Loggin In

==========================*/

$('#plus_login').click(function(){
	var username = $('#username').val();
	var password = $('#password').val();
	var login={username:username,password:password};
	$.post('/login',login,function(data){
		alert(data);
	});

});


/*==========================

Posting New Habit

==========================*/


	  $('#plus').click(function(){
	  		var from = $('#since').text();
	  		var till = $('#till2').text();
	  		var title = $('#habit').text();
	  		var data={from:from,
	  					till:till,
	  					title:title
	  				};
	  		if(from===''||till===''||title===''){
	  			alert('All fields are not filled correctly');
	  		}else{
	  			$.post('/make',data,function(data){
	  				alert(data);
	  			});
	  		}
	  });
});