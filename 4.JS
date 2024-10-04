
const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingresa un número: '));

function Divisible(){
    return num % 5 === 0;
}
let result = Divisible(num);
console.log(`El número ${num} es divisible por 5?: ${result}`);