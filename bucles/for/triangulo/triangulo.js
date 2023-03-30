let num = parseInt(prompt("ingrese el tamaño qu quiere de le triangulo"));
let a = "*";
let acomulador =" ";
for (let index = 1; index <= num; index++) {
    acomulador+=a
    console.log(acomulador);
}
console.log(acomulador);


   for (let index= num-1; index >= 1; index--) {
       acomulador="";
    for (let index = 1;  index<=num; index++) {
      acomulador+=a
        
    }
    console.log(acomulador);
   }