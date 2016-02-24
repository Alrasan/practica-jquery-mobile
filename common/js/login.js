var errin = $("#errorin");
var successin = $("#successin");
$(document).ready(function () {

    $("#formLogin").validate({
        rules: {
            user: {
                required: true
            },
            password: {
                required: true
            }
        },
        success: function () {
            errin.html("");
            successin.html("");
        },
        submitHandler: signIn
    });
});

function signIn() {
    var formData = $("#formLogin").serialize();

    console.log(formData);
    errin.html("");
    successin.html("");
    $.ajax({
        type: "POST",
        url: "../classes/functionsLogin.php",
        data: formData,
        success: function (html) {
            console.log(html);
            if (html==1) {
                successin.html("Has logueado con éxito.");
                setTimeout(function () {
                    window.location = "list.html";
                }, 2000);
            } else {
                errin.html("Usuario/Contraseña incorrectos.");
            }
        }
    });
}