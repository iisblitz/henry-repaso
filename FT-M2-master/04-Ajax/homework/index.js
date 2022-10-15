var URL = 'http://localhost:5000/amigos';

let showFriends = function (){
$('#boton').click(funcion(){
 
   $('#lista').empty();
    $.get(`${URL}`, function(friends){
        friends.forEach(e => {
            $('lista').append(`<li id="${e.id}">${e.name} <button id= "${e.id}" onclick=`deleteFriend(${id})`>X</button> </li>`)
        })
    })
});
}
$('boton').click(showFriends);

$('#search').click(function(){
    let id = $('input').val();
    if(id){
        $.get(`$(URL)/${id}`, funcion(friend){
            $('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`)
            $('input').val("");
        })
    }else{
        $('#amigo').text('tienes que regresar un ID');
    }
});

let deleteFriends = function(idCruz){
    let id;
    if(typeof idCruz === 'number'){
        id = idCruz
    }else{
        id = $('inputDelete').val();
    }
    if(id){
        $.get( `$(URL)/${id}`,function (f){
            friend = f;
        })
        $.ajax({
            url: `$(URL)/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text('Tu amigo, ${friend.name} fue eliminado correctamente')
                $('#inputDelete').val("");
                showFriends();
            }
        })
    }else{



    }
};

$('#delete').click(deleteFriend);