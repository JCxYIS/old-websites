//written by J.C.★YIS 20170227 
function img_print(name, format , start, fin, width){
	for(var i=start; i<=fin;i+=1){
		document.write("<div id='img" + name + i + "'>");
		document.write("<img src='"+ name +" (" + i + ")."+ format + "'" );
		document.write("style='width:" + width + "%'>")	;
		document.write("</div>");
		document.write("<br>");
	}
}

function video_print(name, format, start, fin, width){
	for(var i=start; i<=fin;i+=1){
		document.write("<div id='video" + name + i + "'>");
		document.write("<video src='"+ name +" (" + i + ")." + format + "'" );
		document.write("controls width:" +  width +"%'  controls>")	;
		document.write("</div>");
		document.write("<br>");
	}
}