let sesion = sessionStorage.getItem("sesion");
console.log(sesion);

function CargaSesion(){
    let botones1 = document.getElementById("botones1");
    let botonera2 = document.getElementById("botonera2");
    let fotoPerfil = document.getElementById("fotoPerfil");
    let infoCuenta = document.getElementById("infoCuenta");
    if (sesion != 1) {
        botonera2.style.display = "none";
        botones1.style.display = "block";
        fotoPerfil.src = "imgs/bochi.png";
        infoCuenta.textContent = "Not logged in";
    } 
    else if (sesion == 1){
        botonera2.style.display = "block";
        botones1.style.display = "none";
        fotoPerfil.src = "imgs/Javier_Milei.png";
        infoCuenta.textContent = "Javier Gerardo Milei"
    }
}

function CerrarSesion() {
    sesion = 0;
    sessionStorage.setItem("sesion", sesion);
    window.location.reload();    
}


document.addEventListener("DOMContentLoaded", function() {
    CargaSesion();    
  });

document.getElementById("cerrarSesion").onclick = function(){CerrarSesion()};
