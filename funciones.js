// Genera un número aleatorio
let numeroAleatorio = tamanio => {
  return Math.floor(Math.random() * tamanio);
}

// Obtiene la distancia entre dos puntos
let distancia = (evento, objetivo) => {
  let diffX = evento.offsetX - objetivo.x;
  let diffY = evento.offsetY - objetivo.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Mejora en la sensibilidad de las pistas
let getDistanciaPista = distancia => {
  if (distancia < 10) {
    return "🔥 ¡Ardiendo! 🔥";
  } else if (distancia < 25) {
    return "¡Hirviendo! ♨️";
  } else if (distancia < 45) {
    return "Muy caliente 🔥";
  } else if (distancia < 65) {
    return "Caliente 🌡️";
  } else if (distancia < 90) {
    return "Tibio 🌤️";
  } else if (distancia < 140) {
    return "Fresco 🍃";
  } else if (distancia < 200) {
    return "Frío ❄️";
  } else if (distancia < 300) {
    return "Realmente frío 🧊";
  } else if (distancia < 450) {
    return "Congelado! 🥶";
  } else {
    return "❄️ EXTREMADAMENTE CONGELADO ❄️";
  }
}
