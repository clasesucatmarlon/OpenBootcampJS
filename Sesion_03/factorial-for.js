/**
 * TODO: Calcular el factorial de 10 utilizando un solo bucle for
 */

let factorial = 1;
let numero = 10;

for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

console.log(`Factorial de ${numero}: `, factorial);
