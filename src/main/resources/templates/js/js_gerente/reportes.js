function hizoClick(){
    var checkbox = document.getElementById('inlineRadio1').checked;
    var checkbox2 = document.getElementById('inlineRadio2').checked;
    var campo1 = document.getElementById("start").value;
    var campo2 = document.getElementById("end").value;

if ((campo1!='') && (campo2!='')){
    if(Date.parse(campo1)<= Date.parse(campo2)){
        if(checkbox){
            window.location.href = "../Comercializacion/historial_venta_alquiler.html";
        }else{
            if(checkbox2){
                window.location.href = "../Comercializacion/historial_propiedad.html";
            }else{
                window.location.href = "../Comercializacion/historial_cliente.html";}}
            
        
    }else{
        event.preventDefault();
        alert('Ingrese una fecha valida');
    }
}
} 
    

