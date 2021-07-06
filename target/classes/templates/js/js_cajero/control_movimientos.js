function hizoClick(){
    var fecha = document.getElementById("start").value;
    var monto = document.getElementById("monto").value;
    var descripcion = document.getElementById("descrip").value;

    if (fecha == "" || monto == "" || descripcion == "") {
            event.preventDefault();
            alert("Debes completar los campos");

        }
     else {
        alert("Formulario enviado satisfactoriamente");

    }
}

