$(function(){
	$loading=$('#load');
	$(document)
	  .ajaxStart(function () {
	    $loading.show();
	  })
	  .ajaxStop(function () {
	    $loading.hide();
	  });
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