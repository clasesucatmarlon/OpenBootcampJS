// METODO PARA EXTRAER VALOR UNICO DE UN ARRAY (no de objetos)
// -----------------------------------------------------------------
var array = [1, 3, 5, 7, 4, 6, 1, 1 , 3, {a: 10}];
console.log('Array: ', array);

const mySet = new Set(array)
console.log('Set: ', mySet);

// .add() ---> Agregar elemento al set
mySet.add(9)
console.log(mySet)
mySet.add(4)
console.log(mySet)

// .delete() ---> Eliminar elemento del set
mySet.delete("hola")
console.log(mySet)

// .clear() ---> vaciar el set
// mySet.clear()
// console.log(mySet)

// .has() ---> Determinar si el set tiene un determinado elemento
console.log(mySet.has(40))

// .size ---> Determinar el tamaño del set
console.log(mySet.size)

// forEach ---> Recorrer un set
mySet.forEach(valor => {
    console.log(valor)
})

const it_mySet = mySet.values()
console.log(it_mySet)

const ar_mySet = [ ...mySet ]
console.log(ar_mySet[1])