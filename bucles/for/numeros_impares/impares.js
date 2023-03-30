


let n = parseInt(prompt("ingrese un numero diferente a 1"));
let contador = 1;

for (let index = 1; index <= n; index++) {
    if (contador % 2 !== 0) {
        console.log(contador);
    }
    contador += 1;
}