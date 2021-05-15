function hizoClick(){
    var fecha = document.getElementsByClassName("start").value;
    var monto = document.getElementsByClassName("Monto").value;
    var interes = document.getElementsByClassName("Interes").value;
    

    if (fecha == "" || monto == "" || interes == "") {
            
            alert("Debes completar los campos");

        }
     else {
        alert("Procesando formulario");

    }
}