// Un nuevo Set con los nombres de tu familia
var listFamily = ['Marlon', 'Blanca', 'Marcelo', 'Marol', 'Blaymar', 'David', 'Victoria', 'Nasyely'];
var mySet = new Set(listFamily);
console.log('Mi Set oroginal: ', mySet);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
mySet.add('Marlon');
console.log('Mi Set agregando mi nombre nuevamente: ', mySet);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
var newSet = [...mySet, 'Javascript']
console.log('Mi Set agregando Javascript al set original: ', newSet);
