

$('#add').click((event) => {
    let todo = $('#todo').val();
    $('ul').append(`<li>${todo} <button class="done"></button></li>`);
    $('#todo').val("");
});

/* $('.done').click(() => {
    $(.done).append("✓")
}) */