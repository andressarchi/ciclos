let  suma = 0;
let contador = 0;
let promedio;

for (let index = 0; index < 10; index++) {
    let numero = parseInt(prompt("ingrese los 10 numeros "))
    suma += numero
  
}
promedio = suma / 10 
console.log("el promedio de los 10 numeros es "+ promedio);