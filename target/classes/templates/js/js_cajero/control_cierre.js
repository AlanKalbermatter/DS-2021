function hizoClick(){
    var campo1 = document.getElementById("start").value;
    var campo2 = document.getElementById("end").value;

    
    if ((campo1!='') && (campo2!='')){
        if(Date.parse(campo1)<= Date.parse(campo2)){
            window.location.href = "cierre_de_caja.html";
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

function hizoClick2(){
    var campo1 = document.getElementById("start").value;
    var campo2 = document.getElementById("end").value;

    
    if ((campo1!='') && (campo2!='')){
        if(Date.parse(campo1)<= Date.parse(campo2)){
            window.location.href = "consulta_caja.html";
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
