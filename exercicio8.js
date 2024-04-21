const prompt = require(`prompt-sync`)();

let valor1 = parseInt(prompt('Insira o primeiro valor: '));
let valor2 = parseInt(prompt('Insira o segundo valor:'));

if(valor1 > valor2){
  console.log(`${valor2}, ${valor1}`);
}else{
  console.log(`${valor1}, ${valor2}`);
}