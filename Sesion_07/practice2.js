// TRABAJANDO CON OBJETOS
const obj = {
    id: 4,
    name: "Juan",
    lastName: "González",
    isDeveloper: false,
    books_favorites: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
};

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;  // El obj2 ahora tiene la misma dirección de memoria del obj
console.log(obj2);

obj2.name = "Marlon"
console.log(obj2.name); // Marlon
console.log(obj.name); // Marlon

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1); // 4
console.log(val2); // 6

//////////////

const obj3 = { ...obj };  // Spread operatos

console.log(obj.name);
console.log(obj3.name);

obj3.name = "Blanca";

console.log(obj.name); // Marlon
console.log(obj3.name); // Blanca

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listMovies = [
    { title: "Lo que el viento se llevó", year: 1939 },
    { title: "Titanic", year: 1997 },
    { title: "Moana", year: 2016 },
    { title: "El efecto mariposa", year: 2004 },
    { title: "TED", year: 2012 }
];

console.log(listMovies);
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listMovies.sort((a, b) => a.year - b.year);

console.log(listMovies);