// Ámbito de las clases, métodos y atributos públicos, privados y protegidos
class Person {
    // Datos de manera privada - Usar #
    // Se pueden acceder dentro de la clase
    #name;
    #age;

    // Datos de manera protegidas - usar _
    // Se pueden acceder dentro de la clase y clases descendientes
    _isDeveloper;

    //Methods - This hace referencia al objeto en dónde se encuentra
    constructor(name, age) {
        this.#name = name;
        this.#age = age; 
        this._isDeveloper = false;
    }

    gretting() {
        console.log(`Hola ${this.#name} - tienes ${this.#age}`);
        this.#getAge();
    };

    getName() {
        return console.log(`El nombre es: ${this.#name}`);
    };

    // Public
    getAge () {
        return console.log(`La edad es: ${this.#age} - public`);
    };

    // Private
    #getAge () {
        return console.log(`La edad es: ${this.#age} - private`);
    };
};

const person1 = new Person('Marlon', 49);
console.log(person1);
person1.gretting();

person1.getName();
person1.getAge();
console.log(person1._isDeveloper)
console.log(person1);
