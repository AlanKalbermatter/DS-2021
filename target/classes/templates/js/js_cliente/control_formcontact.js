function hizoClick(){

    var nombre = document.getElementById("nombre_ap").value;
    var apellido = document.getElementById("apellido_ap").value;
    var email = document.getElementById("email_ap").value;
    var telefono = document.getElementById("telefono_ap").value;
    var campo = document.getElementById("start").value;
    var calendar = function validarFormatoFecha(campo) {
        var x=new Date();
        var fecha = campo.split("/"); 
        x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
        var today = new Date();
        var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if ((campo!='') && (x >= today)) {
              return true;
            } else {
               return false;
                    }
              }
    
    if (nombre == "" || apellido == "" || email == "" || telefono == "" || campo == false) {
    if(campo == false){
        event.preventDefault();
        alert("Ingrese una fecha valida");

    }else{
        alert("Debes completar los campos");
    }

    } else {
          alert("Formulario enviado satisfactoriamente");

          }

  }