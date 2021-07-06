function hizoClick(){
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Email = document.getElementById("Email").value;
    var Tel = document.getElementById("Tel").value;

    if (Nombre == "" || Apellido == "" || Email == "" ||  Tel == ""  ){
        event.preventDefault();
        alert("Debes completar los campos");
    }else{
        alert("Formulario enviado satisfactoriamente");
    }

}

function hizoClick2(){
    var Nombre2 = document.getElementById("Nombre2").value;
    var Apellido2 = document.getElementById("Apellido2").value;
    var Email2 = document.getElementById("Email2").value;
    var Tel2 = document.getElementById("Tel2").value;

    if (Nombre2 == "" || Apellido2 == "" || Email2 == "" ||  Tel2 == ""  ){
        event.preventDefault();
        alert("Debes completar los campos");
    }else{
        alert("Formulario enviado satisfactoriamente");
    }

}

function hizoClick3(){
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Email = document.getElementById("Email").value;
    var Tel = document.getElementById("Tel").value;
    var fecha = document.getElementById("start").value;

    if (Nombre == "" || Apellido == "" || Email == "" ||  Tel == "" ||  fecha == "" ){
        event.preventDefault();
        alert("Debes completar los campos");
    }else{
        alert("Formulario enviado satisfactoriamente");
    }
}