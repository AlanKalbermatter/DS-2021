function hizoClick(){
    var porcentaje = document.getElementById("porcentaje_com").value;
    var pago = document.getElementById("pago_com").value;

    

    if (pago == "" || porcentaje == "") {
        event.preventDefault();    
        alert("Debes completar los campos");

        }
     else {
        alert("Pago realizado");

    }
}