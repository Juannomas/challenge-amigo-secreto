// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];


function agregarAmigo() {
    let nombre = (document.getElementById('amigo').value);
    if (nombre == '') {
        alert('mal');
    } else {
    listaAmigos.push(nombre);
    console.log (listaAmigos);
    document.querySelector('#amigo').value = '';
    }
}
