// Dimensiones del mapa
const WIDTH = 500;
const HEIGHT = 500;

// Generamos coordenadas aleatorias del tesoro
let objetivo = {
  x: numeroAleatorio(WIDTH),
  y: numeroAleatorio(HEIGHT)
};

// Referencias a los elementos HTML
let $mapa = document.querySelector('#mapa');
let $distance = document.querySelector('#distancia');
let clicks = 0;

// Evento cuando el jugador hace clic en el mapa
$mapa.addEventListener('click', function (evento) {
  clicks++;
  let distance = distancia(evento, objetivo);
  let distanceHint = getDistanciaPista(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  // Si está muy cerca del tesoro
  if (distance < 20) {
    Swal.fire({
      title: "¡GENIAL, ENCONTRASTE EL TESORO! 🏆",
      text: `Lo lograste en ${clicks} clicks.`,
      icon: "success",
      confirmButtonText: "Jugar de nuevo",
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(() => {
      location.reload(); // Recarga la página para jugar de nuevo
    });
  }
});
