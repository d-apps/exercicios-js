const valores = [1.0, 2.0, 3.0];

console.log(valores);

console.log(valores[0]); // Acessar posição
console.log(valores.indexOf(0));

valores[3] = 4.0;

console.log(valores);

valores.push({id: 0}, false, null, 5.0);

console.log(valores);

console.log(valores.pop()); // tirar o ultimo valor do array

delete valores[0]; //Retira o index do array
console.log(valores)


