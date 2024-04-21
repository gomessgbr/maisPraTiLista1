const prompt = require(`prompt-sync`)();

let ladoA = parseInt(prompt('Insira o valor do primeiro lado do triângulo :'));
let ladoB = parseInt(prompt('Insira o valor do segundo lado do triângulo :'));
let ladoC = parseInt(prompt('Insira o valor do terceiro lado do triângulo :'));

if((ladoB + ladoC > ladoA) &&  (ladoA + ladoC > ladoB) && (ladoA + ladoB > ladoC )){
  if(ladoA === ladoB && ladoB === ladoC){
    console.log('Esse triângulo é equilátero');
  }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    console.log('Esse triangulo é isósceles!');
  }else{
    console.log('Esse triangulo é escaleno!');
  }
}
else{
  console.log('Esse valores não formam um triângulo!');
}