// $(document).ready( () => {
$(() => {

    $('#show-btn').click(() => {
        $('h1').show();
    });

    $('#hide-btn').click(() => {
        $('h1').hide();
    });

    $('#add-element').click( () => {
        $('ul').append('<li>Nuevo elemento al final</li>');
        $('ul').prepend('<li>Nuevo elemento al inicio</li>');
    });

    $('li').mouseenter((element)=>{
        element.target.style.color = 'blue';
        element.target.style.cursor = 'pointer';
    });

    $('li').mouseout((element)=>{
        element.target.style.color = 'black';
        element.target.style.cursor = 'none';
    });

    $('#message').click( () => {
        console.log('Hola, estoy utilizando jQuery');
    })
});
