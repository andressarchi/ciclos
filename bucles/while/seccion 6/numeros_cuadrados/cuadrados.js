let num1 = parseInt(prompt("ingrese un numero"));
let contador= 1; 
let suma = 0;
while (contador <= num1) {
    suma = suma +  contador ** 2 
    contador++
}
console.log("la suma de los cuadrados entre 1 y "+ num1 + "  es   " + suma );