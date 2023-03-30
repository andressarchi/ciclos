let suma = 0;
let contador = 0;
let numero = parseFloat(prompt("Ingresa un número: "));

while (contador < numero) {
   let num1 = parseInt(prompt("ingrese los numeros "))
   suma += num1;
  contador++;
}
let promedio = suma / numero;

alert("El promedio de los  " +numero + "  números ingresados es: "  + promedio);


