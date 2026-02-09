//1-Palabra mas larga
function palabraMasLarga(frase) {
    let palabras = frase.split(' ');
    let palabraLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    return "La palabra más larga de la frase es: " + palabraLarga;
}
// ejemplo de uso
let frase = prompt("Ingrese una frase:");
console.log(palabraMasLarga(frase));

// 2-Verificar si una palabra empieza con pre
function empiezaConPre(palabra) {
    return palabra.toLowerCase().startsWith("pre");
}
// ejemplo de uso
let palabra = prompt("Ingrese una palabra:");
if (empiezaConPre(palabra)) {
    console.log("La palabra empieza con 'pre'.");
} else {
    console.log("La palabra no empieza con 'pre'.");
}

// 3-Reemplazar "perro" por "gato" en una frase
function reemplazarPerroPorGato(frase) {
    return frase.toLowerCase().replace("perro", "gato");
}
// ejemplo de uso
let frase2 = prompt("Ingrese una frase que contenga la palabra 'perro':");
console.log(reemplazarPerroPorGato(frase2));

// 4-Generar un número aleatorio entre dos valores
function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ejemplo de uso
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
console.log("Número aleatorio entre " + num1 + " y " + num2 + ": " + numeroAleatorioEntre(num1, num2));

// 5-BONUS: calcular distancia entre dos puntos X e Y
class Punto {
  constructor(valX, valY) {
    this.valX = valX;
    this.valY = valY;
  }
}
function calcularDistancia(p1, p2) {
  let dx = p2.valX - p1.valX;
  let dy = p2.valY - p1.valY;
  return Math.sqrt((dx * dx) + (dy * dy));
}
// ejemplo de uso
let a = new Punto(1, 2);
let b = new Punto(4, 6);

let distancia = calcularDistancia(a, b);
console.log("La distancia es:" + distancia);

//6- Dada una fecha de cumpleaños determina en qué día de la semana nació y la edad a día de hoy.
function diaDeLaSemanaYEdad(fechaCumpleanos) {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fechaNacimiento = new Date(fechaCumpleanos);
    const diaSemana = diasSemana[fechaNacimiento.getDay()];

    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return `Nació un ${diaSemana} y tiene ${edad} años.`;
}
// ejemplo de uso
let fechaCumple = prompt("Ingrese su fecha de cumpleaños (YYYY-MM-DD):");
console.log(diaDeLaSemanaYEdad(fechaCumple));
