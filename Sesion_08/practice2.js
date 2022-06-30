// Funciones TIPO FLECHA Y ANONIMAS
const array = [1, 4, 5, 3, 7, 4, 3];

const arrayDouble = array.map(item => {
    return item * 2;
});
console.log(arrayDouble);

const doubleValue = valor => {
    return valor * 10;
}
console.log(array.map(doubleValue));
console.log(doubleValue(10));
