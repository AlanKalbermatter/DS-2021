function hizoClick(){
    var loc = document.getElementById("loc-ap").value;
    var tipprop = document.getElementById("tipo_prop").value;
    var estado = document.getElementById("estado-ap").value;
    var precio = document.getElementById("precio-ap").value;

    if(loc =='' || estado =='' || precio  =='' ){
        event.preventDefault();
        alert("Hay campos obligatorios por cargar");
    }else{
        if(tipprop == '1' || tipprop == '2'){
            alert("Procesando propiedad");
        }else{
            event.preventDefault();
            alert("Debe seleccionar uno de los tipos de propiedad");
        }
    }
}
function eliminarprop(){
    alert("Propiedad eliminada");
}