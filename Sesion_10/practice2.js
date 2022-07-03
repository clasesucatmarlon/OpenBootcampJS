// Módulos y su utilización con ES6 

// Maneras de importar:
//     CommonJS - Require / ES6 - Import


import { add, product, pow, factorial } from './helpers/helpers.js';  
console.log(`La suma da: ${add(2, 4)}`);
console.log(`El producto da: ${product(2, 4)}`);
console.log(`La potencia da: ${pow(2, 4)}`);
console.log(`El factorial es: ${factorial(4)}`);

// En el package.json agregar la propiedad "Type": "Module"
// y en el archivo de las funciones agregar export a cada función
// y agregarle la extensión al momento de importar
