var arrayShoppingList = ['Verduras', 'Proteínas', 'Varios', 'Limpieza', 'Charcutería'];
console.log(arrayShoppingList);


// METODOS PARA INSERTAR VALORES
// -----------------------------------------------------------------------------
// push() ---> Muta el array original ---> Inserta al final
arrayShoppingList.push('new item final');
console.log(arrayShoppingList);

// unshift() ---> Muta el array original ---> Inserta al principio
arrayShoppingList.unshift('new item principio');
console.log(arrayShoppingList);


// METODOS PARA ELIMINAR VALORES
// -----------------------------------------------------------------------------
// pop() ---> Muta el array original ---> Elimina al final
arrayShoppingList.pop();
console.log(arrayShoppingList);

// shift() ---> Muta el array original ---> Elimina al principio
arrayShoppingList.shift();
console.log(arrayShoppingList);


// METODOS PARA ELIMINAR, MODIFICAR O AÑADIR VALORES
// -----------------------------------------------------------------------------
// splice(x, y, z) ---> Muta el array original ---> Elimina por índice, una cantidad
//                                                  de elementos desde una posición dada
arrayShoppingList.splice(2, 1);
console.log(arrayShoppingList);

// splice(indice, 0, valores) ---> Muta el array original ---> Inserta por índice, una cantidad
//                                                  de elementos desde una posición dada
//                                                  el "0" indica que se van a eliminar cero valores
arrayShoppingList.splice(0, 0, "Aceite de Girasol");
console.log(arrayShoppingList);

// splice(indice, 1, valores) ---> Muta el array original ---> Modificar por índice, una cantidad
//                                                  de elementos desde una posición dada
//                                                  el "1" indica que se va a eliminar un valor
arrayShoppingList.splice(0, 1, "Aceite de Girasol 2");
console.log(arrayShoppingList);