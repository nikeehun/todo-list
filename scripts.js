let todo = $('input');

$('button').click((event) => {
    $('ul').append('<li>${todo}</li>');
})