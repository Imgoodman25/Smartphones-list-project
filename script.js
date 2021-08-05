$(document).ready(() => {
    $('#search').keyup(() => {
        $('#result').html('');
        let searchField = $('#search').val();
        let expression = new RegExp(searchField, "i");
        $.getJSON('data.json', (data) => {
            $.each(data, (key, value) => {
                if(value.nama.search(expression) != -1 || value.kelas.search(expression) != -1){
                    // console.log('lala ')
                    $('#result').append(`<li class="list-group-item">${value.nama} | ${value.kelas}</li>`)
                }
            })
        })
    })
})