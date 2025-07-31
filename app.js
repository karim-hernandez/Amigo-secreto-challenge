// variables
let amigos = [];


//funciones 

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo)
    if (amigo == '') {
    alert("Por favor inserte un nombre");
    } 
    else {
        if (amigos.includes(amigo)) {
            alert("amigo ya incluido");
        } 
        else {
            amigos.push(amigo);
        }
        console.log(amigos)
        limpiarEntradaAmigo();
        limpiarListaAmigos();
        mostrarAmigos(amigos);
    }
}

function mostrarAmigos(amigos) {
    let listaAmigos = document.getElementById('listaAmigos');
    for ( let indice = 0; indice < amigos.length; indice++ ) {
        let elementoLista = document.createElement('li');
        elementoLista.innerText = amigos[indice];
        listaAmigos.appendChild(elementoLista);
        listaAmigos.re
    }
}
function sortearAmigo() {
}

function limpiarEntradaAmigo () {
    document.querySelector('#amigo').value = '';
}


function limpiarListaAmigos () {
    document.querySelector('#listaAmigos').innerHTML = '';
}