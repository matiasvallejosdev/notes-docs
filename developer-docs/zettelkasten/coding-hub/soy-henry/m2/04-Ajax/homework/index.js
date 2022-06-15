$('#loading').hide();

$("#boton").click(()=>{

    $.get('http://localhost:5000/amigos/', (data)=>{
        const lista = $('#lista');
        lista.empty();
        $('#loading').show();
        for(let amigo of data){
            var li = document.createElement('li');
            li.innerText = amigo.name;
            lista.append(li);
        }
        $('#loading').hide();
        // console.log(data);
    })

})


$('#search').click(()=>{
    const id = $('#input').val();
    $('#input').val('');
    $.get('http://localhost:5000/amigos/' + id, (amigo)=>{
        
        $('#amigo').text(amigo.name);
        
    }).fail((amigo)=>{
        if(!amigo.name) alert("Requested URL not found.")
        else console.error(amigo);
    });
})

$('#delete').click(()=>{
    const id = $('#inputDelete').val();
    $('#inputDelete').val('');
    $.ajax({url: 'http://localhost:5000/amigos/' + id, 
    type: 'DELETE',
    success:() => {
        $('#sucess').text(`Se elimino correctamente el id ${id}`);
        },
    });
});