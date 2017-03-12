$(window).load(function(){
        $('#loading').fadeOut(3333);
        });

$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();
　　
　　if($this_Top < 130){
　　　$('#top-bar').stop().animate({top:"-80px"});
　　　}
　　　　if($this_Top > 130){
　　　　$('#top-bar').stop().animate({top:"0px"});
　　　 }
　　}).scroll();
　});
});

//ALERT
	function alert1()
	{
	alert("  J.C.★YIS 2016" + "\n" + "All rights reserved.")
	}

//hid functions
    function showhid()
    {
	document.getElementById('hidden').style.display='block'
	alert("Oh! DAMN!"+ "\n" +"The forbidden codex has been shown!!!")
	}

    function hidehid()
    {
	document.getElementById('hidden').style.display='none'
	}