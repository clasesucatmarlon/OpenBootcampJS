// DETERMINAR SI ELEMENTOS CUMPLEN ALGUNA CONDICIÒN
// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some(valor => valor < -0);
console.log(res);

const exist = array.some(valor => valor === 9);
console.log(exist);

const listObjects = [
    { name: "Leire", age: 35 },
    { name: "Gorka", age: 34 },
    { name: "Miguel", age: 28 },
    { name: "Lucía", age: 3 },
    { name: "Amaia", age: 29}
];
const existJuan = listObjects.some(persona => persona.name === "Juan");
console.log(existJuan);

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Marlon";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// Determinar los índices de un array
const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);