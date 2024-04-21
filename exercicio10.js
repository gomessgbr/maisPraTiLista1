const prompt = require(`prompt-sync`)();

let value = parseInt(prompt('Insira um valor: '));

for(let i=1 ; i <=10; i++){
  console.log(value);
}
