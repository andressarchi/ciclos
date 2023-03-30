let contador = 1;
let num1 = parseInt(prompt("ingrese un numero "))
while (contador <= num1 ) {
  if (contador % 2 !== 0) {
    console.log("los numeros impares entre 1 y "+num1+" son " +contador);
  }
  contador++;
}
