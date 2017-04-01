//current time------------------------------------------------------------------
	var today= new Date();
	var year = today.getFullYear() ;var tmpy;
	var month = today.getMonth() ;var tmpmo;
	var date = today.getDate()  ;var tmpd;
	var hour = today.getHours(); if(hour<10){hour='0'+hour;}var tmph;
	var min = today.getMinutes();if(min<10){min='0'+min}var tmpm;
	var sec = today.getSeconds();if(sec<10){sec='0'+sec;}var tmps;

function renew_time(){
    today= new Date();
    year = today.getFullYear() ;
	month = today.getMonth()+1 ;
	date = today.getDate()  ;
	hour = today.getHours(); if(hour<10){hour='0'+hour}
	min = today.getMinutes();if(min<10){min='0'+min}
	sec = today.getSeconds();if(sec<10){sec='0'+sec}	
	setTimeout(renew_time,1000); 
}

function current_year(){
	document.getElementById("current_year").innerHTML=  year ; 
}
function current_month(){
	document.getElementById("current_month").innerHTML=  month ; 
}
function current_date(){
	document.getElementById("current_date").innerHTML=  date ; 
}
function current_hour(){
	document.getElementById("current_hour").innerHTML=  hour ;
	if(tmph!=hour){
		$("#current_hour").animate({fontSize: "50px"},50);
		$("#current_hour").animate({fontSize: "40px"},410);
		tmph=hour;
	}
	setTimeout(current_hour,10);  
}
function current_min(){
	document.getElementById("current_min").innerHTML= min ; 
	if(tmpm!=min){
		$("#current_min").animate({fontSize: "50px"},50);
		$("#current_min").animate({fontSize: "40px"},410);
		tmpm=min;
	}
	setTimeout(current_min,10);
}
function current_sec(){
	document.getElementById("current_sec").innerHTML=  sec ;
	if(tmps!=sec){
		$("#current_sec").animate({fontSize: "50px"},50);
		$("#current_sec").animate({fontSize: "40px"},500);
		tmps=sec;
	}
	setTimeout(current_sec,10); 
}

	

	


//num up play----------------------------------------------------------------------
var num=0;
var tapcount=0;
var autonumup=48764;
function numupacstart(){
	autonumup+=1;
	numup();
	if(autonumup!=48763){
		setTimeout(numupacstart,90);
		document.getElementById("numupstart").style.display= 'none';
		document.getElementById("numuppause").style.display= 'inline';
	}
	autonumup=48764;
}

function numuptap(){
	numup();
	if(num==1000000){
		$("t#numupscore, t#numuptapcount").animate({fontSize: "22px"},60);
		$("t#numupscore, t#numuptapcount").animate({fontSize: "20px"},30);
	}
}
function numuppause(){
	autonumup=48762;
	document.getElementById("numupstart").style.display= 'inline';
	document.getElementById("numuppause").style.display= 'none';
}

function numup(){
	var today=new Date();
	var sec = today.getSeconds();
	var tappoint= Math.round((sec*today*sec*sec*sec*9487/48763)%1234+567);
	var add0=""

	num+=tappoint;

	if(num<10){add0="0"+add0}
	if(num<100){add0='0'+add0}
	if(num<1000){add0='0'+add0}
	if(num<10000){add0='0'+add0}
	if(num<100000){add0='0'+add0}
	if(num<999999){
		add0='0'+add0;
	    tapcount+=1;
		$("t#numupscore, t#numuptapcount").animate({fontSize: "22px"},60);
		$("t#numupscore, t#numuptapcount").animate({fontSize: "20px"},30);
	}
	if(num>1000000){
		num=1000000;
	}
	if(num==1000000){
		$("t#numupscore, t#numuptapcount").stop(true,true);
	}
	
	
	document.getElementById("numupscore").innerHTML= add0 + num;
	document.getElementById("numuptapcount").innerHTML= tapcount;
}