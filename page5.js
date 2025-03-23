//console.log("hello world");
//window.alert("yoe peliado con cocodrillos");
let nombre;
document.getElementById("myH1").textContent = "Malvenido";
document.getElementById("mySubmit").onclick = function(){
    nombre = document.getElementById("myInput1").value;
    document.getElementById("myH1").textContent = "Bienvenido "+nombre;
}