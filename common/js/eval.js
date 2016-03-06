$(document).ready(function () {
    


	/*var oParametre = {};

	if (window.location.search.length > 1) {
	  for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
	    aItKey = aCouples[nKeyId].split("=");
	    oParametre[unescape(aItKey[0])] = aItKey.length > 1 ? unescape(aItKey[1]) : "";
	  }
	}

	var alumno = oParametre.alumno;*/

	var alumno = sessionStorage.getItem('alumno');
 	$("#alumno").html("<h2>Alumno:   "+alumno+"</h2");
    $(".salir").click(function(e){
        e.preventDefault();
        window.location = "index.html";
    });
    $("#sendEval").click(function(e){
        e.preventDefault();
        //window.location = "list.html";
        
        //nota en el apartado de contenidos 65%
        var objetivos = $("#objetivos").val();
        var recursos = $("#recursos").val();
        var destinatarios = $("#destinatarios").val();
        var justificacion = $("#justificacion").val();
        var metodologia = $("#metodologia").val();
        var claridad = $("#claridad").val();
        var actividades = $("#actividades").val();
        var documentacion = $("#documentacion").val();
        var conclusiones = $("#conclusiones").val();
        var conseguido = $("#conseguido").val();

        var contenidos= (parseInt(objetivos) + parseInt(recursos) + parseInt(destinatarios) + parseInt(justificacion) + 
        	parseInt(metodologia) + parseInt(claridad) + parseInt(actividades) + parseInt(documentacion) + parseInt(conclusiones) + 
        	parseInt(conseguido))/10;


        //nota en el apartado de presentacion 10%
        var escrita = $("#escrita").val();
        var redaccion = $("#redaccion").val();
        var organizacion = $("#organizacion").val();
        var presentacion = 0;
        if(escrita == "si"){
        	presentacion += 3.333333333333333333333333333333333333;
        }
        if(redaccion == "si"){
        	presentacion += 3.333333333333333333333333333333333333;
        }
        if(organizacion == "si"){
        	presentacion += 3.333333333333333333333333333333333333;
        }

        
        //nota en el apartado de expresion oral 25%
        var expresion_oral = 0;

        if($("#entrada").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#indumentaria").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#introduccion").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#desarrollo").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#conclusionexp").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#seguridad").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#entusiasmo").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#entonacion").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#volumen").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#velocidad").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#voz").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#pausas").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#muletillas").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#duracion").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#mirada").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#sonrisa").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#posicion").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#tics").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#publico").is(":checked")){
        	expresion_oral += 0.5;
        }
        if($("#preguntas").is(":checked")){
        	expresion_oral += 0.5;
        }
        
        var calificacion = presentacion*0.1 + expresion_oral*0.25 + contenidos*0.65;

       // alert("    "+alumno+"\r\nContenidos:  "+contenidos+"\r\n Presentacion:  "+presentacion+"\r\n Expresión Oral:  "+expresion_oral+"\r\n Calificación:  "+calificacion);


		window.location = "calificacion.html?presentacion="+presentacion+"&contenidos="+contenidos+"&expresion="+expresion_oral+"&calificacion="+calificacion;

    });
});
