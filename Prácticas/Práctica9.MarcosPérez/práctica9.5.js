
function mostrarHermanos() {
    const items = document.querySelectorAll('#listaHermanos li');

    if (items.length < 3) {
        console.error("La lista debe tener al menos 3 elementos para este ejercicio.");
        return;
    }

    const elementoMedio = items[1]; 
    console.log(`--- Elemento Seleccionado ---`);
    console.log(`Contenido del elemento medio: ${elementoMedio.textContent}`);

    const hermanoAnterior = elementoMedio.previousElementSibling;

    const hermanoSiguiente = elementoMedio.nextElementSibling;

    console.log(`--- Hermanos Adyacentes ---`);
    if (hermanoAnterior) {
        console.log(`Hermano Anterior: ${hermanoAnterior.textContent}`);
    } else {
        console.log("No hay hermano anterior.");
    }

    if (hermanoSiguiente) {
        console.log(`Hermano Siguiente: ${hermanoSiguiente.textContent}`);
    } else {
        console.log("No hay hermano siguiente.");
    }
}

mostrarHermanos();