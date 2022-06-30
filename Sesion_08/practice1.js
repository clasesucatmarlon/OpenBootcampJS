// Funciones con FACTOR DE PROPAGACIÓN
function imprimir(...valores) {
    valores.map(item => {
        console.log(`El valor es: ${item}`);
    })
}
imprimir(2, 4, 5, 7, 5, 12, 14);


function sumar (...valores){
    console.log(...valores);
    return valores.reduce((a, b) => a + b);
}
console.log(sumar(1, 2, 3, 4));