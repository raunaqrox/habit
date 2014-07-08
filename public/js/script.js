$(document).ready(function(){
	var i=0;
	var j=0;
	var select=$('#start');
	var selectChange=function(){
		var day=select.val();
		if(day==='Today'){
			d=new Date();
			$('#since').text(d.toDateString());
		}else{
			d=new Date();
			d.setDate(d.getDate()+1);
			$('#since').text(d.toDateString());
		}
		if(i>0)
			dateAndMonth();
		i++;
	}
	selectChange();
	var dateam=$('#dm');
	var dateAndMonth=function(){
		var dm=dateam.attr('placeholder');
		var dam=parseInt(dateam.val());
		var a=new Date();
		var till;
		if(dm==='days'){
			if($('#start').val()==='Tomorrow'){
				dam+=1;
			}
			var day=a.getDate()+parseInt(dam);
			till=a.setDate(day);
			$('#till2').text((new Date(till)).toDateString());
		}
		if(dm==='months'){
			var month=a.getDate()+parseInt(dam);
			till=a.setMonth(month);
			if($('#start').val()==='Tomorrow'){
				till=a.setDate(a.getDate()+1);
			}
			$('#till2').text((new Date(till)).toDateString());
		}
	}
	$('.rad2').click(function(){
		$('#dm').attr('placeholder',$(this).val());
		$('#for').text('For how many '+$(this).val());
		if(j>0)
			dateAndMonth();
		j+=1;
	});
	$('#habitMake').keyup(function(){
		var habit=$(this).val();
		$('#habit').text(habit);
		
	});
	var d;
	$('#start').change(selectChange);
	$('#dm').keyup(dateAndMonth);
});