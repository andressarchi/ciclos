let numero = parseInt(prompt("ingrese la cantidad de numros que quiere evaluar "))
let contador = 1
let acomulador = 0;
 
for (let index = 1; index <= numero; index++) {
   
    acomulador+=contador;
    contador++
}
console.log("la suma de los numeros es  "+acomulador);