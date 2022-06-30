// La fecha de hoy
const currentDate = new Date();
console.log(`Fecha de hoy: ${currentDate}`);

// La fecha de tu nacimiento
const birthday = new Date(1972, 11, 16, 12, 45);
console.log(`Birthday: ${birthday}`);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
( currentDate > birthday ) ? console.log('Hoy es más tarde que mi cumpleaños') : console.log('Hoy es menos tarde que mi cumpleaños')

// Una variable que contenga el día de tu nacimiento
const day = birthday.getDay();
console.log(`Día cumpleaños: ${day}`);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const month = birthday.getMonth();
console.log(`Mes cumpleaños: ${month + 1}`);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = birthday.getFullYear();
console.log(`Año cumpleaños: ${year}`);