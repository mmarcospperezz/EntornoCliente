
function gestionarLista() {
    const lista = document.getElementById('listaCompra');

    if (!lista) {
        console.error("El elemento con id 'listaCompra' no existe.");
        return;
    }

    let continuar = true;
    while (continuar) {
        const nuevoItemTexto = prompt("Introduce un nuevo elemento para la lista de la compra (o 'cancelar' para terminar):");
        
        if (!nuevoItemTexto || nuevoItemTexto.toLowerCase() === 'cancelar') {
            continuar = false;
            break;
        }

        let posicion;
        do {
            posicion = prompt("¿Dónde quieres añadirlo? (inicio / final)").toLowerCase();
        } while (posicion !== 'inicio' && posicion !== 'final');

        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = nuevoItemTexto;

        if (posicion === 'inicio') {
            lista.prepend(nuevoLi);
            console.log(`"${nuevoItemTexto}" añadido al INICIO.`);
        } else { 
            lista.appendChild(nuevoLi);
            console.log(`"${nuevoItemTexto}" añadido al FINAL.`);
        }
    }
    console.log("Gestión de lista terminada.");
}

gestionarLista();