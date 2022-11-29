const soma = (a, b) => a + b;

const multiplica = (a, b) => a * b;

const calculadora = (mensagem, a, b, operacao) => mensagem + operacao(a, b);

// Chamda da função calculadora
console.log(calculadora("O resultado é: ", 3, 5, soma));