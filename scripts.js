

$('#add').click((event) => {
    let todo = $('#todo').val();
    $('ul').append(`<li>${todo}</li>`);
    $('#todo').val("");
});

/* $('.done').click(() => {
    $(.done).append("✓")
}) */