function soma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a * b;
}

function calculadora(mensagem, a, b, operacao) {
    return mensagem + operacao(a, b);
}

console.log(calculadora("O resultado é: ", 3, 5, multiplica));