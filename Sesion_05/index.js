// Altura en centímetros (entero)
var hightCentimeters = 169;

// Altura en metros (coma flotante)
var hightMeters = 1.69;

// Peso en kilogramos (coma flotante)
var weight = 59.6;

// Altura en metros redondeada hacía arriba
var roundedHight = Math.ceil(hightMeters);
console.log(roundedHight);

// Peso en kilogramos redondeado hacía abajo
var roundedWeight = Math.floor(weight);
console.log(roundedWeight);

// Variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
var minValue =  Number.MIN_VALUE;
var maxValue = Number.MAX_VALUE;
var condition = false;
if (maxValue + 1 === maxValue) {
    console.log('el máximo valor que se puede obtener en Javascript + 1');
    condition = true;
}