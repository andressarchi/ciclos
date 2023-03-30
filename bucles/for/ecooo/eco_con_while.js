let letra = prompt("Ingrese una letra: ");
let repeticiones = parseInt(prompt("¿Cuántas veces desea repetir la letra? "));
let contador = 0;
let acomuladora = "";

 while (contador < repeticiones) {
     acomuladora +=  letra
     contador ++
 }
 console.log(acomuladora);