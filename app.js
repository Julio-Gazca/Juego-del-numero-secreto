//Variables
let numeroSecreto = 0;
let countIntentos = 1;
let numerosSorteados = [];
let numeroMax = 10;

//Asigna texto a los elementos de HTML
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

//Verifica si el intento del usuario es correcto
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);

    if(numeroDeUsuario == numeroSecreto){
        //Muestra un mensaje al acertar con el numero de intentos que tomo
        asignarTextoElemento('p', `Acertaste el numero en ${countIntentos} ${(countIntentos === 1) ? 'intento' : 'intentos'}`);
        //Activa el botón de Nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //Muestra ayudas al usuario para adivinar el numero
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        
    }
    //Contador de intentos
    countIntentos++;
    limpiarCaja();

    return;
}

//Pone todas las condiciones iniciales para el juego
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    countIntentos = 1;
}

//Limpia la caja, reinicia las condiciones y desactiva el botón de nuevo juego
function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

//Elimina todo el texto de la caja
function limpiarCaja(){
   document.querySelector('#valorDeUsuario').value = '';
}

//Genera el número a adivinar 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    
    console.log(numerosSorteados);
    console.log(numeroGenerado);

    //Verifica si el numero ya había sido generado previamente
    if(numerosSorteados.length == numeroMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }
    else{
        //Genera un número nuevo si el numero se encuentra en el array
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{ //Mete el numero generado al array y nos devuelve el numero
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();