// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombres = [];
let arrayNombresSorteados = [];

function agregarEnArrayNombres() {
    let nombre = (document.getElementById('amigo').value);
    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        if (arrayNombres.includes(nombre)){
            alert('Lo siento, ya existe ese nombre');
            document.querySelector('#amigo').value = '';    
        } else {
            arrayNombres.push(nombre);
            document.querySelector('#amigo').value = '';
            let li = document.createElement("li");
            li.innerHTML = '';
                for (let i = 0; i < arrayNombres.length; i++){
                li.innerText = arrayNombres[i];
                let ul1 = document.getElementById('listaAmigos');
                ul1.appendChild(li);   
                }
        }   
    }
}


function sortearAmigo() {
    if (arrayNombres.length <= 2 ) {
        alert('Por favor, inserte a lo menos 3 nombres.');
    } else {
        let i1 =  parseInt(Math.floor(Math.random()*arrayNombres.length));
        console.log (i1);
        if (arrayNombresSorteados.includes(arrayNombres[i1])){
            return sortearAmigo();
        } else {
            arrayNombresSorteados.push(arrayNombres[i1]);
            console.log(arrayNombresSorteados);
            if (arrayNombres.length == arrayNombresSorteados.length) {
            alert('Ya se sortearon todos los Nombres.');  
            } else {
            let ul2 = document.getElementById('resultado');
            ul2.innerHTML = arrayNombres[i1];
            }
        }    
    }
}

function reiniciarjuego () {
    let ul3 = document.getElementById('resultado');
    ul3.innerHTML = "";
    let ul4 = document.getElementById('listaAmigos');
    ul4.innerHTML = "";
    arrayNombres = [];
    arrayNombresSorteados = [];
}


