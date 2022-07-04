// Introducción a la POO
const person = {
    name: 'Marlon',
    age: 49,
    isDeveloper: true,
    greeting: function()  {
        console.log(`Hola ${this.name}`)
    }
};

person.greeting();

const otherPerson = {
    name: 'Aurelio',
    age: 50,
    isDeveloper: false,
    greeting: function()  {
        console.log(`Hola ${this.name}`)
    }
};

otherPerson.greeting();

// Function factory
const createPerson = (name, age, isDeveloper) => {
    return {
        name,
        age,
        isDeveloper,
        greeting: function()  {
            console.log(`Hola ${this.name}`)
        }
    };
};

const person1 = createPerson('Marlon2', 40, true);
console.log(person1.isDeveloper);
person1.greeting();