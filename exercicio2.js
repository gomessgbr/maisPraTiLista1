const prompt = require(`prompt-sync`)();

let voters = parseInt(prompt('Digite a quantidade de eleitores: '));
let whiteVotes = parseint(prompt('Digite a quantidade de votos brancos: '));
let nullVotes = parseInt(prompt('Digite a quantidade de votos nulos: '));
let validVotes = parseInt(prompt('Digite a quantidade de votos válidos: '));


console.log(`${((whiteVotes * 100)/voters)}% de votos brancos`);
console.log(`${((nullVotes * 100)/voters)}% de votos nulos`);
console.log(`${((validVotes * 100)/voters)}% de votos válidos`);
