function contador0a1000(){
    for (let i = 0; i <1001; i++) {
        let a = i;
        document.getElementById("contadorResultado").textContent = a + " si, fail total xdd pero en la consola muestra bien";
        console.log(i)
    }
}
function FuncionCalculadora(numero1, numero2){
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    if (suma.checked) {
    document.getElementById("resultadoDeOperacion").textContent = Number(numero1) + Number(numero2);           
    }
    else if (resta.checked){
    document.getElementById("resultadoDeOperacion").textContent = Number(numero1) - Number(numero2);
    }
    else if (multiplicacion.checked){
    document.getElementById("resultadoDeOperacion").textContent = Number(numero1) * Number(numero2);
    }
    else if (division.checked){
    document.getElementById("resultadoDeOperacion").textContent = Number(numero1) / Number(numero2);
    }
    else{document.getElementById("resultadoDeOperacion").textContent = "algo malio sal:c";        
    }
}
function ResetCalcu() {
    document.getElementById("firstnum").value = null;
    document.getElementById("secondnum").value = null;
    document.getElementById("resultadoDeOperacion").textContent = null;
}

document.getElementById("botonContador").onclick = contador0a1000;

document.getElementById("resultadoBoton").onclick = function(){FuncionCalculadora(document.getElementById("firstnum").value, document.getElementById("secondnum").value)};
document.getElementById("resetBoton").onclick = function(){ResetCalcu()}


