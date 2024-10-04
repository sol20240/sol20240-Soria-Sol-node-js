const prompt = require('prompt-sync')();

let nros = prompt('Ingrese dos números separados por una coma porfiss: ')

let [nro1, nro2] = nros.split(',').map(Number);

if (nro1 > nro2) {
    console.log(`El número mayor es: ${nro1}`);
} else if (nro2 > nro1) {
    console.log(`El número mayor es: ${nro2}`);
} else {
    console.log("Los números son iguales");
}