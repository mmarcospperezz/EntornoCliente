function sumar(lista) {
  return lista.reduce((acc, num) => acc + num, 0);
}

function filtrarPares(lista) {
  return lista.filter(num => num % 2 === 0);
}

function aplicarOperacion(lista, operacion) {
  return lista.map(operacion);
}

const lista = [1, 2, 3, 4, 5, 6];

console.log("Sumar:", sumar(lista));
console.log("Filtrar pares:", filtrarPares(lista));
console.log("Duplicar con aplicarOperacion:", aplicarOperacion(lista, x => x * 2));
