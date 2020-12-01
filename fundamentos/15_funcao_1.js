// funcao sem retorno
function imprimirSoma(a, b){

    console.log(a + b);

}

imprimirSoma(1, 1);

// função com retorno
function soma(a, b = 0){
    return a + b;
}

console.log(soma(1));


