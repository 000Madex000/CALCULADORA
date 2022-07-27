const numero = document.getElementsByName('data-number')

//const numeros = document.querySelectorAll('.number');
//console.log(numeros)
const operacion = document.getElementsByName('data-operar')
//const operaciones= document.querySelectorAll('.operar');
//console.log(operaciones)
const botonIgual= document.getElementsByName('data-igual')[0];
//console.log(botonIgual)
const botonEliminar = document.getElementsByName('data-delete')[0];
//console.log(botonEliminar)
var resultado = document.getElementById('resultado')
var actualoperacion='';
var anterioroperacion='';
var operando = undefined;

numero.forEach(function(boton){
 boton.addEventListener('click',function(){
  agregarNumero(boton.innerText);
   
 })
})

operacion.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccionarOperacion(boton.innerText);
     
    })
   })
botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
})


botonEliminar.addEventListener('click',function(){
    clear();
    actualizarDisplay();
})

function agregarNumero(num){
    actualoperacion = actualoperacion.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    resultado.value = actualoperacion;
} 