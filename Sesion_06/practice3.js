
var array1 = ['Marlon', 2, false, 'García', 22, 10];
var array2 = ['garcía', 21, true];


// METODOS PARA ITERAR
// -----------------------------------------------------------------------------
// For
for (var i = 0; i < array1.length; i++) {
    // console.log(array1[i]);
}


// forEach
array1.forEach(element => {
    console.log(element);
});


var carros = [
    {
        "color": "morado",
        "tipo": "minivan",
        "registroDia": new Date('2017-01-03'),
        "capacidad": 7
    },
    {
        "color": "morado",
        "tipo": "camioneta",
        "registroDia": new Date('2018-03-03'),
        "capacidad": 5
    },
];
// console.log(carros);
// METODOS PARA FILTRAR
// filter()
// -----------------------------------------------------------------------------
const response = carros.filter(item => {
    if (item.color === 'rojo') {
        return console.log('Encontrado en el objeto');
    }
});

// Otra manera1
const response2 = carros.find(item => {
    return item.color === 'morado';
});
console.log(response2.color);

// Otra manera 2
const { capacidad } = carros.find(item => {
    return [item.color === 'morado'];
})
console.log(capacidad);
