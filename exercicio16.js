const prompt = require(`prompt-sync`)();

let contador = 0;
let num = 101;

while (contador < 50) {
  let primo = true;

  if (num <= 1) primo = false;
  if (num > 2 && num % 2 === 0) primo = false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(num);
    contador++;
  }

  num++;
}
