function hizoClick2(){
    var dni = document.getElementById("ndni_ap").value; 
    var apellido = document.getElementById("napellido_ap").value;
    var nombre = document.getElementById("nnombre_ap").value;
    var edad = document.getElementById("nedad_ap").value;
    var cargo = document.getElementById("ncargo_ap").value;
    var salario = document.getElementById("nsalario_ap").value;
    var codigo = document.getElementById("ncodigo_ap").value;
    var contraseña = document.getElementById("ncontraseña_ap").value;

    if (dni == "" || apellido == "" || nombre == "" || edad == "" || cargo =="" || salario =="" || codigo =="" || contraseña ==""){
            event.preventDefault();
            alert("Debes completar los campos");
        }
     else {
        alert("Formulario enviado satisfactoriamente");

    }

}