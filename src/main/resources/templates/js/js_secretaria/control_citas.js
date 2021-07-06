function hizoClick2(){
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Email = document.getElementById("Email").value;
    var Tel = document.getElementById("Tel").value;
    var fecha = document.getElementById("start").value;
    var hora = document.getElementById("time").value;

    if (Nombre == "" || Apellido == "" || Email == "" ||  Tel == "" ||  fecha == "" || hora == "" ){
        event.preventDefault();
        alert("Debes completar los campos");
    }else{
        alert("Formulario enviado satisfactoriamente");
    }

}

function hizoClick(){
    var Nombre2 = document.getElementById("Nombre2").value;
    var Apellido2 = document.getElementById("Apellido2").value;
    var Email2 = document.getElementById("Email2").value;
    var Tel2 = document.getElementById("Tel2").value;
    var fecha2 = document.getElementById("start2").value;
    var hora2 = document.getElementById("time2").value;

    if (Nombre2 == "" || Apellido2 == "" || Email2 == "" ||  Tel2 == "" ||  fecha2 == ""  || hora2 == "" ){
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
    var hora = document.getElementById("time").value;

    if (Nombre == "" || Apellido == "" || Email == "" ||  Tel == "" ||  fecha == "" ||  hora == ""){
        event.preventDefault();
        alert("Debes completar los campos");
    }else{
        alert("Formulario enviado satisfactoriamente");
    }
}

function asigna(){
    alert("Asignacion guardada");
}