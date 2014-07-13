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
		if(data==='yes'){
			window.location.href = "/profile";
		}else{
			window.location.href = "/login"
		}
	});

});

/*==========================

Register

==========================*/

if(top.location.pathname==='/register'){
		var username_inp=$('#username_reg');
		$('#check').click(function(){
		var username=username_inp.val();
			$.get('/useravail',{username:username},function(data){
					if(data==='yes'){
						$('#available').text(username+' available').fadeIn(1000).fadeOut(3000);
					}else{
						$('#available').text(username+' not available');
				}
		});	
	});		
	$('#plus_register').click(function(e){
		var pass=$('#password_reg').val();
		var conPass=$('#con_password').val();
		if(pass!=conPass){
			$('#error_reg').text('Passwords do not match!').fadeIn(1000).fadeOut(3000);
			e.preventDefault();
		}else{
			if(pass.length<=8){
				$('#error_reg').text('Password should be atleat 8 characters long!').fadeIn(1000).fadeOut(3000);
				e.preventDefault();
			}
		}
	});
	$('#password_reg').click(function(){
		$('#suggest').fadeIn(1000);
	});
}

/*==========================

Posting New Habit

==========================*/

if(top.location.pathname==='/make'){
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
	}	
});