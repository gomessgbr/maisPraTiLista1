const prompt = require(`prompt-sync`)();

const totalCompradas = parseInt(prompt("Escreva a quantidade comprada: "));

let sum;

if(totalCompradas < 12 ){
  sum = totalCompradas * 0.30;
}else{
  sum = totalCompradas * 0.25;
}

console.log(`Sua compra deu R$ ${sum}`);