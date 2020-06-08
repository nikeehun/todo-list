let todo = $('#todo').val();

$('button').click((event) => {
    console.log($('#todo').val());
    $('ul').append(`<li>${todo}</li>`);
})