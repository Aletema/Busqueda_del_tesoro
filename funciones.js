//genera un número aleatorio
let numeroAleatorio = tamanio => {
  return Math.floor(Math.random() * tamanio);
}

// obtiene la distancia de dos puntos
let distancia = (evento, objetivo) => {
  let diffX = evento.offsetX - objetivo.x;
  let diffY = evento.offsetY - objetivo.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// devolver un String dependiendo de las distancias
let getDistanciaPista = distancia => {
  if (distancia < 30) {
    return "¡Hirviendo!";
  } else if (distancia < 50) {
    return "Muy caliente";
  } else if (distancia < 70) {
    return "Caliente";
  } else if (distancia < 100) {
    return "Tibio";
  } else if (distancia < 180) {
    return "Frio";
  } else if (distancia < 350) {
    return "Realmente Frio";
  } else {
    return "Congelado!";
  }
}