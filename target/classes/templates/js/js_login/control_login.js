function hizoClick(){
    var contraseña = document.getElementById("contraseña").value;
    var codigo = document.getElementById("codigo_usuario").value;

    if (contraseña == "000" && codigo=="000"){
        window.location.href = "vistacualquiera.html";
    }

}