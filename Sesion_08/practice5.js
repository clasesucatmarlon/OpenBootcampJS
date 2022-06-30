// Funciones GENERADORAS
function* generatorID () {
    let id = 0;
    while (true) {
        id ++;
        if ( id === 5) {
            return id;
        }
        yield id;  // se queda parado aquì esperando hasta que se vuelva a llamar
    }
}

const gen = generatorID();
console.log(gen.next());  // Se genera un valor
console.log(gen.next());  // Se genera un valor
console.log(gen.next());  // Se genera un valor
console.log(gen.next());  // Se genera un valor

console.log(gen.next().value);  // Se obtiene un valor