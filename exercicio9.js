const prompt = require(`prompt-sync`)();

let code = parseInt(prompt('Insira o código de origem do produto: '));

if (code === 1) {
  console.log('Sul');
} else if (code === 2) {
  console.log('Norte');
} else if (code === 3) {
  console.log('Leste');
} else if (code === 4) {
  console.log('Oeste');
} else if (code === 5 || code === 6) {
  console.log('Nordeste');
} else if (code === 7 || code === 8 || code === 9) {
  console.log('Sudeste');
} else if (code >= 10 && code <= 20) {
  console.log('Centro-Oeste');
} else if (code >= 25 && code <= 50) {
  console.log('Nordeste');
} else {
  console.log('Fora dos intervalos - Produto importado');
}

