// Una clase llamada "Estudiante" que tenga:

// Una variable llamada nombre

// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// Crea una nueva instancia de "Estudiante"

// Haz la llamada al método obtenDatos

class Student {
    constructor(name, asignatures) {
        this.name = name,
        this.asignatures = asignatures;
    };

    getData () {
        return {
            name: this.name,
            asignatures: this.asignatures
        }
    };
}

const student1 = new Student('Marlon', ['Javascript', 'HTML', 'CSS']);

const name = student1.getData().name;
const asignatures = student1.getData().asignatures;

console.log(`${name} cursa las asignaturas: ${asignatures.join(', ')}`)