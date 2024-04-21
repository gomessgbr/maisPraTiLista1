const prompt = require(`prompt-sync`)();

for(i=1 ; i <=5 ; i++){
  let N = parseInt(prompt(`Insira o ${i}º de N: `));

  for(j= 1; j <= N; j++){
    console.log(`${j} x ${N} = ${j*N}`);
  }
}