// Módulos y su utilización con CommonJS 

// Maneras de importar:
//     CommonJS - Require / ES6 - Import

const helpers = require('./helpers/helpers');  // Una menera
const { add, product, pow, factorial } = require('./helpers/helpers');  // Otra menera - desestructurando
console.log(`La suma da: ${add(2, 4)}`);
console.log(`El producto da: ${product(2, 4)}`);
console.log(`La potencia da: ${pow(2, 4)}`);
console.log(`El factorial es: ${factorial(4)}`);
