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
        }
    }
function sortearAmigo() {
}
function limpiarEntradaAmigo () {
    document.querySelector('#amigo').value = '';

}