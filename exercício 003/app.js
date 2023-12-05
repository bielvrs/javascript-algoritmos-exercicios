    function calcularsoma(){
let numero1, numero2, resultado

numero1 = document.getElementById("numero1").value

numero2 = document.getElementById("numero2").value

resultado = (parseFloat(numero1) + parseFloat (numero2))

document.getElementById ("resultado").innerText = "seu resultado é: " + resultado

}

