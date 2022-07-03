// Configura el proyecto para utilizar los módulos de ES6
// Hice esto:
//      En el package.json agregué la propiedad "Type": "Module"
//      y en el controller.js agregué export a cada función

// Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)

// En el entrypoint index.js, importa el módulo controller.js
import { add, product } from './controllers/controller.js';
import chalk from 'chalk';

// El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
console.log(`La suma es: ${add(1, 2)}`);
console.log(chalk.green(`El producto es: ${product(add(1, 5), add(1, 2))}`));

// Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

// Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde