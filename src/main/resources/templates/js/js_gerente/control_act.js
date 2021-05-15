function hizoClick(){
    var dni = document.getElementById("dni_ap").value; 
    var apellido = document.getElementById("apellido_ap").value;
    var nombre = document.getElementById("nombre_ap").value;
    var edad = document.getElementById("edad_ap").value;
    var antiguedad = document.getElementById("antiguedad_ap").value;
    var cargo = document.getElementById("cargo_ap").value;
    var salario = document.getElementById("salario_ap").value;
    var codigo = document.getElementById("codigo_ap").value;
    var contraseña = document.getElementById("contraseña_ap").value;

    if (dni == "" || apellido == "" || nombre == "" || edad == "" || antiguedad =="" || cargo =="" || salario =="" || codigo =="" || contraseña ==""){
            event.preventDefault();
            alert("Debes completar los campos");
        }
     else {
        alert("Formulario enviado satisfactoriamente");

    }

}