// Instala la dependencia Winston
const logger = require('./logger/logger.js');

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        
        return a + b;
    }
    throw new Error("Los valor deben ser de tipo numéricos");
}

try {
    console.log(`Resultado de la suma: ${add("10", 20)}`);
} catch (err) {
    logger.error(`Se ha generado un ${err}`);
} finally {
    console.log('Fin del programa...');
}

// Registra el error en un archivo a través de un try...catch