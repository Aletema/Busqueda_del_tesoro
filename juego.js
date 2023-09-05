// coordenadas del tesoro
const WIDTH = 500;
const HEIGH = 500;

let objetivo = {
  x: numeroAleatorio(WIDTH),
  y: numeroAleatorio(HEIGH)
};

// click handler
let $mapa = document.querySelector('#mapa');
let $distance = document.querySelector('#distancia');
let clicks = 0;

$mapa.addEventListener('click', function (evento) {
  console.log('click');
  clicks++;
  let distance = distancia(evento, objetivo);
  let distanceHint = getDistanciaPista(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20) {
    alert(`GENIAL, ENCONTRASTE EL TESORO EN: ${clicks} clicks!`);
    location.reload();
  }
});