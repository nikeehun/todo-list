let todo = $('#todo').val();

$('button').click((event) => {
    $('ul').append(`<li>${todo}</li>`);
})

