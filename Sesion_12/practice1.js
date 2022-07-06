const person = {
    name: "Marlon",
    age: 49
}

const doubleAge = (age) => {
    return age * 2;
};

console.log(`El doble de la edad es: ${doubleAge(person.age)}`);

const loopAge = (age) => {
    var array = [];
    for (let index = 0; index < 10; index++) {
        array = [...array, age + index];
    };
    return array;
};
console.log(loopAge(person.age));