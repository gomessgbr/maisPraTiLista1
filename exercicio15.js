const prompt = require(`prompt-sync`)();

let sumWeight = 0;
let sum = 0;

while(true){
 let value = parseFloat(prompt('Insira um valor: '));
 let weight= parseInt(prompt('Insira o peso: '));
  sum+=(value * weight);
  sumWeight += weight;
  if(weight === 0 || value === 0 ){
    if(sumWeight <= 0){
      console.log('Não é possível fazer a média ponderada!');
      return;
    }else {
      console.log(`Média ponderada = ${sum/sumWeight} `)
      return;
    }
  }

}