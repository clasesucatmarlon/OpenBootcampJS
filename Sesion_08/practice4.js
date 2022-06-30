// Funciones ASINCRONAS
function myAsync () {
    // Hace llamado a una BD externa
    // Puede darnos algún error

}

// PROMESA:
const MyPromesa = new Promise ((resolve, reject ) => {
    const i = Math.floor(Math.random() * 2);
    console.log(i);
    // Si todo está correcto
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
});

MyPromesa
    .then( () => console.log('Se está ejecutando bien....'))
    .catch( (err) => console.log('error... ' + err))
    .finally( () => console.log('siempre me ejecuto....'))