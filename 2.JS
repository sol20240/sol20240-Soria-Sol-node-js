const prompt = require ('prompt-sync')();

var numero1, numero2, versuma;
    numero1 = parseInt(prompt('Ingrese el primer numero: '));
    numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    versuma = numero1 + numero2;
    console.log('La suma es '+ versuma);
