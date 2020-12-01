// Armazenando uma funcao em uma variavel, muito util
const imprimirSoma = function (a, b) {

    console.log(a + b);

}

imprimirSoma(1, 1);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(1, 1));

// Retorno implicito
// linha unica
const subtracao = (a, b) => a - b;

console.log(subtracao(0, 1));

