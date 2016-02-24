$(document).ready(function () {
    
    $(".salir").click(function(e){
        e.preventDefault();
        window.location = "index.html";
    });
    $("#sendEval").click(function(e){
        e.preventDefault();
        window.location = "list.html";
    });
});
