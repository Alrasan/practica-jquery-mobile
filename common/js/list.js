$(document).ready(function () {
    
        if ($("#select-custom-4").val() != "") {
            console.log($(this).val());
            $('#alumnselect').button('enable');
        } else {

            $('#alumnselect').button('disable');
        }

    $("#select-custom-4").change(function () {
        if ($("#select-custom-4").val() != "") {
            console.log($(this).val());
            $('#alumnselect').button('enable');
        } else {

            $('#alumnselect').button('disable');
        }
    });
    $('#alumnselect').click(function(e){
        window.location = "eval.html";
    });
    
    $(".salir").click(function(e){
        e.preventDefault();
        window.location = "index.html";
    });
});
