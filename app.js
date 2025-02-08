// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombres = [];

function agregarEnArrayNombres() {
    let nombre = (document.getElementById('amigo').value);
    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        arrayNombres.push(nombre);
        document.querySelector('#amigo').value = '';
        console.log (arrayNombres);
        let li = document.createElement("li");
        li.innerHTML = '';
            for (let i = 0; i < arrayNombres.length; i++){
            li.innerText = arrayNombres[i];
            let ul1 = document.getElementById ('listaAmigos');
            ul1.appendChild(li);
            console.log (listaAmigos);    
            }
    }
}