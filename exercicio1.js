const prompt = require(`prompt-sync`)();

let celsius = parseFloat(prompt(`Escreva a temperatura em °C : `));

let fahrenheit = ((celsius * 9) / 5 )+ 32;

console.log(`${fahrenheit}°F`)