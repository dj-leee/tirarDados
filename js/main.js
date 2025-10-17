// Conexiones con los IDs del HTML
const boton = document.getElementById("boton");
const zonaDado = document.getElementById("zonaDado");
// Funcion que se encarga de enseñar el resultado de la tirada del dado en el HTML




function tirarDado() {
    // Función que ella sola, ejecute al llamarla una tirada de dados de 6 caras
    function dadoDeSeis() {
    // generar un número aleatorio entre 1 y 6
    const resultado = Math.floor(Math.random() * 6) + 1;
    return resultado;
  }

  const resultado = dadoDeSeis();
  // Creacion de una constante Mapa, de todos los valores del dado
  const mapa =  new Map([
    [1, "-10px -10px"],
    [2, "-430px -20px"],
    [3, "-880px -25px"],
    [4, "-1320px -25px"],
    [5, "-1730px -25px"],
    [6, "-2150px -25px"]
  ]);

  if (mapa.has(resultado)) {
    zonaDado.style.backgroundPosition = mapa.get(resultado);
    
  }
}

// ...existing code...

boton.addEventListener("click", function (event) {
  // Añadimos el parámetro event
  event.preventDefault(); // Prevenimos el comportamiento por defecto, que significa que no recargue la página
  tirarDado();
});
