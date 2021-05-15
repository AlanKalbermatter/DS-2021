function hizoClick(){
    var campo1 = document.getElementById("start").value;
    var campo2 = document.getElementById("end").value;

    
    if ((campo1!='') && (campo2!='')){
        if(Date.parse(campo1)<= Date.parse(campo2)){
            window.location.href = "reporte_venta_alquiler.html";
            alert("Reporte generado satisfactoriamente");
        }else{
            event.preventDefault();
            alert("Ingrese fechas validas");
        }
    } else {
        event.preventDefault();
        alert("Ingrese fechas validas");
        }

    }