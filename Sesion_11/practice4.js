// Getters y Setters
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
    };

    getName() {
        return console.log(`El nombre es: ${this.#name} - public`);
    };

    // Public
    getAge () {
        return console.log(`La edad es: ${this.#age} - public`);
    };

    // Private
    #getAge () {
        return console.log(`La edad es: ${this.#age} - private`);
    };

    setAge (newAge) {
        this.#age = newAge;
    }
};

const person1 = new Person('Marlon', 49);
person1.gretting();

// Getter ---> Métodos para obtener atributos/Métodos privados o protegidos
person1.getName();
person1.getAge();

// Setter ---> Métodos para obtener atributos/Métodos privados o protegidos
person1.setAge(23);
person1.getAge();