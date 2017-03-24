$(window).load(function(){
        $('#loading').fadeOut(777);
        });

var width = window.screen.width;
var height = window.screen.height;

function adapt_rhombus(){
	var size;
	if(width>height){size = height/10;}
	else {size = width/10;}
	

	document.getElementsByName('rhombus').style.color = "blue";
	setTimeout(adapt_rhombus,10);
}