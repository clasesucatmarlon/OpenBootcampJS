// METODOS PARA ORDENAR LISTAS
// -----------------------------------------------------------------------------
// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log('Array original: ', array);

array.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
})
console.log(array);

// Ordenar únicamente arrays numéricos
const arrayNumeric = [4, 1, 7, 3, 1, 3, 56, 1, 546];
arrayNumeric.sort((a, b) => b - a);
console.log('Array ordenado (mayor a menor): ', arrayNumeric);
arrayNumeric.sort((a, b) => a - b);
console.log('Array ordenado (menor a mayor): ', arrayNumeric);

// Arrays de objetos
const listObjects = [
    { name: "Leire", age: 35 },
    { name: "Gorka", age: 34 },
    { name: "Miguel", age: 28 },
    { name: "Lucía", age: 3 },
    { name: "Amaia", age: 29}
];

// listObjects.sort((a, b) => {
//     if (a.age < b.age) {
//         return -1
//     } else if (a.age > b.age) {
//         return +1
//     } else {
//         return 0
//     }
// })
listObjects.sort((a, b) => a.age - b.age);

console.log(listObjects);
