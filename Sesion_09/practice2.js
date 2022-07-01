// GESTION DE LOGS EN NODE.JS

const logger = require('./logger/logger.js');


// console.log('Mensaje por pantalla'); // Este no lo maneja winston
logger.info('Mensaje informativo');
logger.debug('Mensaje debug');
logger.warn("Mensaje de advertencia");
logger.error("Mensaje de error");