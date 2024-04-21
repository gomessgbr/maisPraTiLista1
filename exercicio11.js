const prompt = require(`prompt-sync`)();

while(true){

  let value = parseInt(prompt('Insira um valor: '));
  if(value <=0){
    console.log('Programa encerrado!')
    return
  }

  if(value % 2 === 0){
    console.log('Este número é par');
  }
  else{
    console.log('Este número é ímpar');
  }
}