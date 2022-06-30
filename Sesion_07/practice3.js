// TRABAJANDO CON FECHAS
const currentDate = new Date();
console.log(`Fecha actual 1: ${currentDate}`);

const currentDate2 = new Date(2022, 6, 30, 12, 25, 35);
console.log(`Fecha actual 2: ${currentDate2}`);

const currentDate3 = new Date("june 30, 2022 1:22");
console.log(`Fecha actual 3: ${currentDate3}`);

const currentDate4 = new Date(2022, 6, 30, 12, 25, 35);

// Comparar fechas.  hay que compararlas como milisegundos. de otra manera no es posible
( currentDate2.getTime() === currentDate4.getTime() ) ? console.log('Son iguales') : console.log('No son iguales');

// Obtener dìa, mes, año desde una fecha
const day = currentDate.getDay();
console.log(`Día: ${day}`);

const month = currentDate.getMonth();
console.log(`Mes: ${month + 1}`);

const year = currentDate.getFullYear();
console.log(`Año: ${year}`);

// Fechas como string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(currentDate.toLocaleDateString());
