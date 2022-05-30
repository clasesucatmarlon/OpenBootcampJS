// Cadena de texto con tu Nombre
let firstName = "Marlon";
console.log("First Name: ", firstName);

// Cadena de texto con tu Apellido
let lastName = "García";
console.log("Last Name: ", lastName);

// cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = firstName.concat(" ", lastName);
console.log('Nombre y Apellido: ', student);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = student.toUpperCase();
console.log('Estudiante en Mayúscula: ', estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = student.toLowerCase();
console.log("Estudiante en Minúscula: ", estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let studentLen = student.length;
console.log('Longitud de datos del nombre y apellido del estudiante: ', studentLen);

// - Una variable que contenga la primera letra del Nombre
let firstLetterFirstName = firstName.slice(0, 1);
console.log('Primera letra del nombre: ', firstLetterFirstName);

// - Otra variable que contenga la última letra del Apellido
let lastLetterLastName = lastName.slice(lastName.length - 1);
console.log('Última letra del apellido: ', lastLetterLastName);


// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let deleteSpacesInStudent = student.split(' ').join('');
console.log('Espacios borrados: ', deleteSpacesInStudent )


// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let firstNameIsInStudent = student.includes(firstName);
if (firstNameIsInStudent) {
   console.log(`${firstName} SÍ está incluído en ${student}`);
} else {
   console.log(`${firstName} No está incluído en ${student}`);
}
