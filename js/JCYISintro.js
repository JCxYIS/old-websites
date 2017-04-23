$(window).load(
	function(){
        $('#loading').fadeOut(777);
		setTimeout(pull_header, 333);
    }
);
function pull_header(){
	$(document).ready(function(){
  		$('#header').slideDown(1234);
  });	
}



$('#footer_opener').click(
	function(){
		$('#footer_body').slideToggle(123);
	}
);




time();
function time(){
	var today=new Date();
	var hour = today.getHours(); if(hour<10){hour='0'+hour}
	var min = today.getMinutes();if(min<10){min='0'+min}
	var sec = today.getSeconds();if(sec<10){sec='0'+sec}
	var nowday = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate() ;
	var nowtime = hour + ':' + min + ':' + sec;

	document.getElementById("time").innerHTML= nowday + '  ' + nowtime
	setTimeout(time,10);
}