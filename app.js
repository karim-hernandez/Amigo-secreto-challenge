// definir variables
let amigos = [];
let mensajeNombreNoValido = "Por favor inserte un nombre";
let mensajeAmigoRepetido ="Amigo ya incluido";
let mensajeSorteoSinAmigos ="Debes incluir minimo dos nombres a la lista";
let mensajeTodosSorteados ="Ya has sorteado a todos los amigos, añade mas para continuar sorteando o reinicia";
let indicesSorteados =[];
let numeroDeSorteo = 1;

//definir funciones 
function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;
    //revisar que el campo no sean solo espacio en blanco
    if (amigo.replaceAll(' ', '') == '') {
    alert(mensajeNombreNoValido);
    }
    //revisar que no se repita el valor ingresado 
    else if (amigos.includes(amigo)) {
        alert(mensajeAmigoRepetido);
    }
    else {
        amigos.push(amigo);
    }
        limpiarEntrada('#amigo');
        limpiarLista('#listaAmigos');
        mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    //iterar sobre la lista de amigos
    for ( let indice = 0; indice < amigos.length; indice++ ) {
        //generar elementos de lista
        let elementoLista = document.createElement('li');
        elementoLista.innerText = amigos[indice];
        //agregar elemento de lista a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

function mostrarAmigoSorteado(amigoSorteado) {
    //leer el elemento del HTLM donde  se mostrara el resultado
    let listaAmigos = document.getElementById('resultado');
    //crear el elemento de la lista donse se mostrara el resultado
    let elementoLista = document.createElement('li');
    //asignar el valor del amigo sorteado al elemento
    elementoLista.innerText = amigoSorteado;
    //agregar el elemento al objeto del html
    listaAmigos.appendChild(elementoLista);
}

function sortearAmigo() {
    // validar que hay minimo dos amigos
    if (amigos.length <2) {
        alert(mensajeSorteoSinAmigos);
    }
    else {
        // validar que no se han sorteado todos los amigos
        if (indicesSorteados.length == amigos.length) {
            alert(mensajeTodosSorteados);
        }
        else {
            //generar nuevo indice de sorteo
            let indiceSorteo = Math.floor(Math.random() * amigos.length);
            // validar que el indice no ha sido sorteado antes
            if (indicesSorteados.includes(indiceSorteo)) {
                sortearAmigo();
            }
            //dar resultado
            else {
                indicesSorteados.push(indiceSorteo);
                let amigoSorteado = amigos[indiceSorteo];
                limpiarLista('#resultado');
                mostrarAmigoSorteado(`El amigo secreto #${numeroDeSorteo} es: "${amigoSorteado}"`)
                numeroDeSorteo++;
            } 
        }
    }
}

function limpiarEntrada (entrada) {
    document.querySelector(entrada).value = '';
}

function limpiarLista(campo) {
    document.querySelector(campo).innerHTML = '';
}

function reiniciarSorteo() {
    limpiarEntrada('#amigo');
    limpiarLista('#listaAmigos');
    limpiarLista('#resultado');
    amigos = [];
    indicesSorteados = [];
    numeroDeSorteo = 1;
}