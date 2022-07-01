// ERRORES
const myFunction = value => {
    if (typeof value === "number") {
        return value * 2;
    }
    throw new Error("El valor debe ser de tipo número");
}

// TRY - CATCH - FINALLY
const data = "2";
try {
    console.log(`Resultado: ${myFunction(data)}`);
} catch (err) {
    console.error(`Se ha generado un ${err}`);
} finally {
    console.log('Simpre se ejecutará...');
}

// InternalError: cuando hay error interno - ej. recursividad
// SystaxError: Error en la sintaxis - ej. cont en vez de const 
// TypeError: Error en tipo de dato
// RangeError: Tratamos de acceder a una posición que no existe - ej en arrays
// ReferenceError: Cuando no existe una referencia - ej llamar una variavble que no ha sido declarada