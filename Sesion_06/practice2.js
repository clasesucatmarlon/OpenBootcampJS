var carros = [
    {
        "color": "morado",
        "tipo": "minivan",
        "registroDia": new Date('2017-01-03'),
        "capacidad": 7
    },
    {
        "color": "rojo",
        "tipo": "camioneta",
        "registroDia": new Date('2018-03-03'),
        "capacidad": 5
    },
];
// console.log(carros);

var array1 = ['Marlon', 2, false];
var array2 = ['garcía', 21, true];


// METODOS PARA CONCATENAR
// -----------------------------------------------------------------------------
// concat() ---> Obtiene un nuevo array con los elementos de las listas concatenadas
var newArray = array1.concat(array2);
console.log(newArray);

// ... ---> 
console.log(...newArray); // Separa los elementos
var newArray2 = [...array1, ...newArray];
console.log(newArray2);


// METODOS PARA OBTENER DATOS A PARTIR DE UNA LISTA
// -----------------------------------------------------------------------------
// slice(startIndex, numberElements) ---> Obtiene un nuevo array con los elementos de las lista
var newArraySlice = newArray.slice(2, 5);
console.log(newArraySlice);
