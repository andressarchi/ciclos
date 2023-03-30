let num = 0;
let contador = 0;
while (num <=100) {
    if (num % 2 != 0) {
       contador = contador +1 ;
    }
    num = num + 1;
}
console.log("hay"  +   contador  +  "numeros impares entre 0 y 100");