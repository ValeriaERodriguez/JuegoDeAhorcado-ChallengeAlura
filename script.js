let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const palabras = ['alura', 'programa', 'caramelos', 'pais', 'latinoamerica', 'computadora', 'mouse','teclado'];
const btn = document.getElementById('jugar');
const imagen = document.getElementById( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );
const boton_agregar = document.getElementById('GuardarPalabra');
var wLetters = []; //almacena las letras incorrectas
var inputAgregarPalabra = document.querySelector("#input_agregar_palabra");
var letrasErradas = [];

/* click en iniciar juego */
btn.addEventListener('click', iniciar );


function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        id('resultado').innerHTML = "GANASTE!!";
        game_over( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}
function mostrarerror(){
    if(arrayPalabra.indexOf(key) == -1 && wLetters.indexOf(key) == -1){
        wLetters.push(key);
        wLetters[intentos-restaintentos].innerHTML = wLetters[intentos-restaintentos];
        destapar(ahorcado[intentos+3-restaintentos]);
        restaintentos--;
    }
}

function agregarPalabraSecreta(){ //funcion para agregar palabras para adivinar al juego.
    
    palabraNueva = inputAgregarPalabra.value;
    if (palabraNueva == ""){
        alert("No ingresó ninguna palabra. Vuelva a intentar.")
        inputAgregarPalabra.focus();
        return;
        juegoHabilitado = false;
    }else if(palabraNueva.length > 8){
        alert("El máximo permitido son 8 letras.");
        inputAgregarPalabra.value = "";
        inputAgregarPalabra.focus();
        juegoHabilitado=false;
        return;
    }else{
        for(posicion = 0; posicion < palabraNueva.length; posicion++){
            if (palabraNueva[posicion].charCodeAt() < 65 || palabraNueva[posicion].charCodeAt() > 90){       
                alert("La palabra contiene caracteres no válidos. Vuelva a intentar.");
                inputAgregarPalabra.value = "";
                inputAgregarPalabra.focus();
                juegoHabilitado = false;
                return;
            }else{
                juegoHabilitado = true;
            } 
        }
    }
    if (juegoHabilitado){ //desde acá se verifica si la palabra ingresada ya existe.
        var repetida = false;
        for(var posicion = 0; posicion < palabrasSecretas.length; posicion++){
            if (palabraNueva == palabrasSecretas[posicion]){
                alert("La palabra '" + palabraNueva + "' ya fue elegida");
                repetida = true;
                break;
            }
        }
            if (repetida==false){
                palabrasSecretas.push(palabraNueva);
            }
    }    
    inputAgregarPalabra.value="";
    empezarJuego();
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}


game_over( );