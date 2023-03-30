let contador = 0;
let num = 0;
while (num<= 100) {
  if (num % 6 === 0) {
    contador= contador +1;
  }
  num = num + 1;
}
console.log("el numero de de  de multiplos de 6 son "+contador);