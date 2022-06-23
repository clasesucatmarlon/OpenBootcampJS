// Variable que contenga la lista de la compra (mínimo 5 elementos)
var arrayShoppingList = ['Verduras', 'Proteínas', 'Varios', 'Limpieza', 'Charcutería'];
console.log(arrayShoppingList);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
arrayShoppingList.push('Aceite de Girasol');
console.log(arrayShoppingList);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
arrayShoppingList.splice(-1);
console.log(arrayShoppingList);

// Lista de las 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
listFilmsFavorites = [
    {
        title: "Alien, el octavo pasajero",
        director: "Ridley Scott",
        date: "1979-03-03"
    },
    {
        title: "Top Gun: Maverick",
        director: "Joseph Kosinski",
        date: "2022-05-15"
    },
    {
        title: "Tiempos Modernos",
        director: "Charles Chaplìn",
        date: "1936-06-15"
    },
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)