// Una función que admita un parámetro "num", y devuelva una lista con esa cantidad 
// de números de la secuencia de Fibonacci 
//    Por ejemplo: num = 7 => Resultado [0, 1, 1, 2, 3, 5, 8]

const fibonacci = (num) => {
    var fibbo = [];

    if (num === 1) {
        fibbo[0] = 0;
    } else {
        fibbo = [0, 1];
        for (var i = 2; i < num; i++) {
            fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
    
        }
    };
    return fibbo;
};

console.log(fibonacci(1))


// Ejecuta la depuración de VSCode para visualizar la ejecución de la función