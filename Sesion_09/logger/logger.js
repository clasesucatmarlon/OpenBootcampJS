// WINSTON - LIBRERIA PARA GESTIONAR LOGS DE MEJOR MANERA
const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: './logger/logs/error.log', level: 'warn' }),
        new winston.transports.File({ filename: './logger/logs/combined.log' }),
    ],
});

module.exports = logger;