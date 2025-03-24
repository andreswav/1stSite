let titulo = document.getElementById("titulo");
let p1 = document.getElementById("p1");

function Apodo(){
    let apodo = document.getElementById("apodo").value;
    document.getElementById("insertador").style.display = "none";
    titulo.textContent = "BIENVENIDO, "+ apodo.toUpperCase();  
    Weno();
    
}
function Weno(){
    let image1 = document.getElementById("image1");
    image1.src = "imgs/1.jpg";
    p1.textContent = "weno la vd me da paja y creo q es mejor si intento hacer modelos de paginas y no esta cagada"
    document.getElementById("insertador").style.display = "block";
    let boton = document.getElementById("confirmador");
    boton.textContent = "click pa volver al indice";
    boton.onclick = function (){VolvedorDePibes()};    
}
function VolvedorDePibes ()
{
    window.location.href = "index.html";

}

p1.textContent = "Hace muchas vueltas a inti, en el paraje menos marciano de peru, llego al mundo Pecausa Lefsitmani, aunque luego lo apodarian...";
document.getElementById("confirmador").onclick = function(){Apodo()}
