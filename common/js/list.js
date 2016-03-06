$(document).ready(function () {
    
        if ($("#alumno").val() != "") {
            console.log($(this).val());
            $('#alumnselect').button('enable');
        } else {

            $('#alumnselect').button('disable');
        }

    $("#alumno").change(function () {
        if ($("#select-custom-4").val() != "") {
            console.log($(this).val());
            $('#alumnselect').button('enable');
        } else {

            $('#alumnselect').button('disable');
        }
    });
    $('#alumnselect').click(function(e){
        sessionStorage.setItem('alumno', $("#alumno").val());
        //window.location = "eval.html?alumno="+$("#alumno").val();
        window.location = "eval.html";
    });
    
    $(".salir").click(function(e){
        e.preventDefault();
        window.location = "index.html";
    });
});
