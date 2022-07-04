// Herencia y Polimorfismo
class Person {
    // Methods - This hace referencia al objeto en dónde se encuentra
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    gretting() {
        console.log(`Hola ${this.name} - tienes ${this.age}`);
    };

    getName() {
        return console.log(`El nombre es: ${this.name} - public`);
    };

    // Public
    getAge () {
        return console.log(`La edad es: ${this.age} - public`);
    };

    // Private
    getAge () {
        return console.log(`La edad es: ${this.age} - private`);
    };

    setAge (newAge) {
        this.age = newAge;
    }
};

class Developer extends Person {
    constructor (name, age, languaje) {
        super (name, age);
        this.languaje = languaje;
    }

    getLanguaje () {
        return console.log(`Trabaja con: ${this.languaje} - public`);
    };

    gretting() {
        console.log(`Hola ${this.name} - tienes ${this.age} y trabajas con  ${this.languaje}`);
    };
}

const person1 = new Person('Marlon', 49);
person1.gretting();
// Getter ---> Métodos para obtener atributos/Métodos privados o protegidos
person1.getName();
person1.getAge();

// Setter ---> Métodos para obtener atributos/Métodos privados o protegidos
person1.setAge(23);
person1.getAge();

console.log('---------------------------------------------')

const developer1 = new Developer('Aurelio', 45, 'html');
developer1.getName();
developer1.getAge();
developer1.getLanguaje();
developer1.gretting();
