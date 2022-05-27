/**
 * TODO: Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */

let factorial = 1;
let iteraciones = 1;
let numero = 10;

while (true) {
  factorial *= iteraciones;

  if (iteraciones === numero) {
    break;
  }

  iteraciones++;
}

console.log(`Factorial de ${numero}: `, factorial);
