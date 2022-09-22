const formulario = document.getElementById('formulario');
console.log(formulario);

formulario.addEventListener('submit', (e) => {
    let nombre = document.querySelector('#nombre');
    nombre.innerHTML = e.target[0].value;
    console.log(e);
    e.preventDefault()
});
