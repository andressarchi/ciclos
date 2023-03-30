let num1 = parseInt(prompt("ingrese el primer numero a multiplicar  "));
let num2 = parseInt(prompt("ingrese el el segundo numero a multiplicar "));
let contador = 1;
let resultado = 0;

while (contador <= num2) {

    resultado = resultado + num1
    contador++
}
alert ("el resultado es " + resultado);