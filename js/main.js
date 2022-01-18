
//Botón para abrir/cerrar la tabla de contenidos

let boton = document.querySelector("#toggle");
let tabla = document.querySelector(".tabla-contenidos");


boton.addEventListener('click', function() {
    if (tabla.style.display == "block") {
        tabla.classList.remove("visible")
      setTimeout(function() {
        tabla.style.display = "none"
      }, 210);
  
    } else {
        tabla.style.display = "block";
      setTimeout(function() {
        tabla.classList.add("visible")
      }, 20);
    }
  
  }, false);


//Botón para volver arriba

let botonArriba = document.querySelector("#botonArriba");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
}


botonArriba.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
}, false);




