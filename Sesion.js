let sesion;


function Sesionadora(){
    sesion = 0;
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    usuario = usuario.toLowerCase();
    contraseña = contraseña.toLowerCase();
    if (!contraseña || contraseña.includes(" ")) {
        document.getElementById("errorContraseña").textContent = "Debes llenar este campo*";        
    }
    else if (contraseña) {
        document.getElementById("errorContraseña").textContent = null;        
    }

    if (usuario.includes(" ")) {
        document.getElementById("errorUsuario").textContent = "No poner espacios ni simbolos*";
    } 
    else if (!usuario){
        document.getElementById("errorUsuario").textContent = "Debes llenar este campo*";
    }
    else if (usuario == "milei") {
        document.getElementById("errorUsuario").textContent = null;
        if (contraseña == "peru"){
            sesion = 1;
            sessionStorage.setItem("sesion", sesion);
            window.location.href = "index.html";
            }
        else if(contraseña != "peru"){
            document.getElementById("errorContraseña").textContent = "Contraseña incorrecta*";
            }            
        } 
    else if (usuario != "milei"){
        document.getElementById("errorUsuario").textContent = "Usuario no encontrado*";            
        }     
}






document.getElementById("enviar").onclick = function(){Sesionadora()};