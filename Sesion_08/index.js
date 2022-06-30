// Una función sin parámetros que devuelva siempre "true"
function withOutParams() {
    return true;
}
console.log(`Función sin parámetros: ${withOutParams()}`);

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function returnPromise () {
    return setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 1000);
}
returnPromise();

// Una función generadora de índices pares automáticos
function* generatorIdPairs () {
    let id = 0;
    while (true) {
        id ++;
        if (id === 10) {
            return id;
        }
        if (id % 2 === 0) {
            yield id; // se queda parado aquì esperando hasta que se vuelva a llamar
        }
    }
};
const generators = generatorIdPairs(); 
console.log(generators.next());  // Se genera un valor
console.log(generators.next());  // Se genera un valor
console.log(generators.next());  // Se genera un valor
console.log(generators.next());  // Se genera un valor
console.log(generators.next());  // Se genera un valor