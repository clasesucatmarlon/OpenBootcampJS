/**
 * TODO: Calcular el factorial de 10 utilizando un solo bucle while
 */

let factorial = 1;
let iteraciones = 1;
let numero = 10;

while (iteraciones <= numero) {
  factorial *= iteraciones;
  iteraciones++;
}

console.log(`Factorial de ${numero}: `, factorial);
