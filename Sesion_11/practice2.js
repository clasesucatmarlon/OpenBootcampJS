// Creación y uso de clases
class Person {
    //Methods - This hace referencia al objeto en dónde se encuentra
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age; 
        this.isDeveloper = isDeveloper;
    }

    gretting() {
        console.log(`Hola ${this.name}`);
    };
};

const person1 = new Person('Marlon', 49, true);
console.log(person1);
person1.gretting();