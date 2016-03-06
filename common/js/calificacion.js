$(document).ready(function () {
    


	var oParametre = {};

	if (window.location.search.length > 1) {
	  for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
	    aItKey = aCouples[nKeyId].split("=");
	    oParametre[unescape(aItKey[0])] = aItKey.length > 1 ? unescape(aItKey[1]) : "";
	  }
	}

    $("#alumno").html("<h2>Alumno:   "+sessionStorage.getItem('alumno')+"</h2");
    $("#presentacion").html("<h2>Presentación:   "+oParametre.presentacion+"</h2");
    $("#contenidos").html("<h2>Contenidos:   "+oParametre.contenidos+"</h2");
    $("#expresion").html("<h2>Expresión Oral:   "+oParametre.expresion+"</h2");
    $("#calificacion").html("<h2>Calificación:   "+oParametre.calificacion+"</h2");

    $("#evaluaragain").click(function(e){
        e.preventDefault();
        window.location = "list.html";
    });
});
