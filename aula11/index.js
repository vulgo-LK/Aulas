import { dividir, multiplicar, somar, subtrair } from "./calculadora.js";

let allButtons = document.querySelectorAll("button");

allButtons.forEach((btn) => btn.addEventListener("click", calcular) );

function calcular() {
    let num01 = Number(document.getElementById("inputId_01").value);
    let num02 = Number(document.getElementById("inputId_02").value);
    let resultado = document.getElementById("spanId");
    let buttonId = this.getAttribute("id");

    switch (buttonId) {
        case "buttonSomarId": resultado.innerHTML = somar(num01, num02);
        break;
        case "buttonSubtrairId": resultado.innerHTML = subtrair(num01, num02);
        break;
        case "buttonMultiplicarId": resultado.innerHTML = multiplicar(num01, num02);
        break;
        case "buttonDividirId": resultado.innerHTML = dividir(num01, num02);
    }
}