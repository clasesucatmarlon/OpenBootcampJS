// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const personalData = { 
    firstName: "Marlon",
    lastName: "García",
    age: 49,
    hight: 1.69,
    isWebDeveloper: true 
};

// Una variable que obtenga tu edad a partir del objeto anterior
var getAge = personalData.age;
console.log(`Edad: ${getAge}`);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
var newList = [ 
        {...personalData}, 
        [
            {
                firstName: "Naser",
                lastName: "Abuchaibe",
                age: 42,
                hight: 1.69,
                isWebDeveloper: true 
            },
            {
                firstName: "Edwin",
                lastName: "Monsalve",
                age: 26,
                hight: 1.77,
                isWebDeveloper: true 
            }
        ]
];
console.log(newList[1][1].lastName);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
var newList2 = [ 
    {...personalData}, 
    {
        firstName: "Naser",
        lastName: "Abuchaibe",
        age: 52,
        hight: 1.69,
        isWebDeveloper: true 
    },
    {
        firstName: "Edwin",
        lastName: "Monsalve",
        age: 26,
        hight: 1.77,
        isWebDeveloper: true 
    }
];
var orderAge = newList2.sort( (a, b) => b.age - a.age);
console.log(orderAge);