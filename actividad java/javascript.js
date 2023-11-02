function numeroParImpar() {
    const listaNumeros = [4, 7, 12, 15, 20, 33, 8, 11, 28, 19];

    for (let i = 0; i < listaNumeros.length; i++) {
        const numero = listaNumeros[i];
        if (numero % 2 === 0) {
            console.log(numero + " es un número par.");
        } else {
            console.log(numero + " es un número impar.");
        }
    }
}


function numeroParImpar2(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}





const frutas=["Manzana", "Banana", "Naranja"]
console.log (frutas [0]) 
console.log (frutas [1]) 
console.log (frutas [2])  


function agregarFruta(uva) {
frutas.push ("uva")
console.log (frutas)

}

function bucle1 () {
    for (let i=0;i < frutas.length; i++)
    console.log(frutas[i])
}


function largoDeArray () {
    if (frutas.length %2===0)
    {return "La longitud del array es par";}
    else {return "La longitud del array es impar"}

    }


    const frases = ["XENEIZE", "BOSTERO", "BOCA JRS", "CABJ"];
    const botonGenerarFrase = document.getElementById("generar-frase");
    const fraseDisplay = document.getElementById("frase-display");
    
    botonGenerarFrase.addEventListener("click", function() {
      const fraseAleatoria = obtenerFraseAleatoria(frases);
      mostrarFraseEnPantalla(fraseAleatoria);
    });
    
    function obtenerFraseAleatoria(frases) {
      const indice = Math.floor(Math.random() * frases.length);
      return frases[indice];
    }
    
    function mostrarFraseEnPantalla(frase) {
      fraseDisplay.textContent = frase;
    }


function notaAlumno(nombre, nota) {
    const resultadoElement = document.getElementById("resultado1");
  
    if (nota > 4) {
      resultadoElement.textContent = "El alumno " + nombre + " aprobó la cursada.";
    } else {
      resultadoElement.textContent = "El alumno " + nombre + " reprobó la cursada.";
    }
  }


  

const equipoAzul = ["Tommy", "Mati", "Gonza"];
const equipoAmarillo = ["Juli", "Sofi", "Cande"];

const botonVerificarEquipo = document.getElementById("verificar-equipo");
const nombreJugadorInput = document.getElementById("nombre-jugador");
const resultadoElement = document.getElementById("resultado2");

botonVerificarEquipo.addEventListener("click", function() {
  const nombreJugador = nombreJugadorInput.value;
  determinarEquipo(nombreJugador);
});

function determinarEquipo(jugador) {
  if (jugador === "todos") {
    mostrarListadoCompleto();
  } else if (equipoAzul.includes(jugador)) {
    resultadoElement.textContent = "El jugador es del equipo azul";
  } else if (equipoAmarillo.includes(jugador)) {
    resultadoElement.textContent = "El jugador es del equipo amarillo";
  } else {
    resultadoElement.textContent = "El jugador no está en ninguno de los equipos.";
  }
}

function mostrarListadoCompleto() {
  resultadoElement.textContent = "Listado completo del equipo azul: " + equipoAzul.join(", ") +
                               "\nListado completo del equipo amarillo: " + equipoAmarillo.join(", ");}




















    




 



  

 







