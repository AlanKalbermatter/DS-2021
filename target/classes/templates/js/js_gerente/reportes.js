function hizoClick(){
    var checkbox = document.getElementById('inlineRadio1').checked;
    var checkbox2 = document.getElementById('inlineRadio2').checked;

    if(checkbox){
        window.location.href = "../Comercializacion/historial_venta_alquiler.html";
    }else{
        if(checkbox2){
            window.location.href = "../Comercializacion/historial_propiedad.html";
        }else{
            window.location.href = "../Comercializacion/historial_cliente.html";}}
            
}

    

