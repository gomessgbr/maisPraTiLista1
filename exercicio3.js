const prompt = require(`prompt-sync`)();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));
let num3 = parseInt(prompt("Insira o terceiro número: "));
let num4 = parseInt(prompt("Insira o quarto número: "));

let oriNum1 = num1;
let oriNum2 = num2;
let oriNum3 = num3;

num1 +=25;
num2 *=3;
num3 = ((num3*12)/100)
num4 = (oriNum1+ oriNum2 + oriNum3);

console.log(`Operação 1 = ${num1}`);
console.log(`Operação 2 = ${num2}`);
console.log(`Operação 3 = ${num3}`);
console.log(`Operação 4 = ${num4}`);