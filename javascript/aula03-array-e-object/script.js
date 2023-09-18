// o que são vetores ou arrays

// como declarar um array

/* let array = ['string', 1, true, 'algo', [(3*5)]];
console.log(array);

// forEach() intera
array.forEach(function(item, index){console.log(item, index)});

// push() adiciona um item no final do array
array.push('novo item');
console.log(array);

// pop() remove o ultimo item
array.pop();
console.log(array);

// shift() remove o primeiro item
array.shift();
console.log(array);

// unshift() adiciona um item no inicio do array
array.unshift('Primeiro!');
console.log(array);

// indexOf() retorna o índice de um valor
console.log(array.indexOf('algo'));

// splice() remove ou substitui um item pelo índice
/* array.splice(0, 2);
console.log(array); */

/* // slice() retorna uma parte de um array existente
let novoArray = array.slice(0, 2);
console.log(array); */

let object = { String: 'string', Number: 1, Boolean: true, Array: ['array'], objectInterno: {objectInterno: 'Objeto Interno'}};
console.log(object.objectInterno);