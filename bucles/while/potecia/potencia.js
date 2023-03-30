let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese el numero por el cual quiere elevarlo"));

let contador = 1;
let acomulador = 1 ; 
while (contador <= num2) {
    acomulador = acomulador * num1
    contador++
}
alert("el resultadode la elevacion es "+ acomulador);