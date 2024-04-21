const prompt = require(`prompt-sync`)();
let i = 0;
let sum = 0;

while(true){
 let value = parseInt(prompt('Insira um valor: '));
 sum+=value;
  if(value === 0){
    if(i <= 0){
      console.log('Não é possível fazer a média!');
      return;
    }else {
      console.log(`Média aritmética = ${sum/i} `)
      return;
    }
  }

  i++;
}