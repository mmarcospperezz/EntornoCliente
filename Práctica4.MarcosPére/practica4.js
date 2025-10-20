// Array hasta que se introduce cero
const numeros = [];
let numero;

do {
    numero = Number(prompt("Introduce un número (0 para terminar):"));
    if (numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);

alert(`Has introducido ${numeros.length} números.`);

// Comprobar si hay algun 5 dentro del array
if (numeros.includes(5)) {
    alert("El número 5 está en el array.");
} else {
    alert("El número 5 no está en el array.");
}

// Pedir un número y contar cuántas veces aparece
const buscar = parseInt(prompt("¿Qué número quieres buscar en el array?"));
let contador = 0;

for (let n of numeros) {
    if (n === buscar) {
        contador++;
    }
}

if (contador > 0) {
    alert(`El número ${buscar} aparece ${contador} veces en el array.`);
} else {
    alert(`El número ${buscar} no aparece en el array.`);
}

// Buscar nombre
const nombres = ["Ana", "Luis", "Maria", "Carlos", "Lucía", "Pedro"];
const nombreBuscado = prompt("Introduce un nombre:");
if (nombres.includes(nombreBuscado)) {
    alert(`El nombre "${nombreBuscado}" está en la lista.`);
} else {
    alert(`El nombre "${nombreBuscado}" no está en la lista.`);
}

// Menu compra
let lista = [];
let opcion;

do {
    opcion = prompt(
        "LISTA DE LA COMPRA\n" +
        "Actual: " + (lista.length ? lista.join(", ") : "(vacía)") + "\n\n" +
        "1. Añadir al final\n" +
        "2. Añadir al principio\n" +
        "3. Eliminar un elemento\n" +
        "4. Borrar toda la lista\n" +
        "5. Salir\n\n" +
        "Elige una opción:"
    );

    if (opcion === "1") {
        let item = prompt("Introduce el producto a añadir al final:");
        if (item) lista.push(item);

    } else if (opcion === "2") {
        let item = prompt("Introduce el producto a añadir al principio:");
        if (item) lista.unshift(item);

    } else if (opcion === "3") {
        let item = prompt("Introduce el producto a eliminar:");
        let index = lista.indexOf(item);
        if (index !== -1) {
            lista.splice(index, 1);
            alert(`"${item}" eliminado.`);
        } else {
            alert(`"${item}" no está en la lista.`);
        }

    } else if (opcion === "4") {
        lista = [];
        alert("Lista vaciada.");

    } else if (opcion !== "5") {
        alert("Opción no válida.");
    }

} while (opcion !== "5");

alert("Saliendo...");

//Array descuentos
let precios = [Math.floor(Math.random() * 101),
Math.floor(Math.random() * 101),
Math.floor(Math.random() * 101),
Math.floor(Math.random() * 101),
Math.floor(Math.random() * 101)];
let descuento = parseFloat(prompt("Introduce el descuento (en %):"));
if (!isNaN(descuento)) {
    for (let i = 0; i < precios.length; i++) {
        precios[i] = precios[i] - (precios[i] * descuento / 100);
    }
    alert("Precios con descuento: " + precios.join(", "));
} else {
    alert("Porcentaje no válido.");
}

// BONUS: Array hasta que se introduce cero
const numeros2 = [];
let numero2;

do {
    numero2 = Number(prompt("Introduce un número (0 para terminar):"));
    if (numero2 !== 0) {
        numeros2.push(numero2);
    }
} while (numero2 !== 0);

alert(`Has introducido ${numeros2.length} números.`);
numeros2.sort((a, b) => a - b);
alert("Números ordenados: " + numeros2.join(", "));
