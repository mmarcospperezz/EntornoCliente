
function mostrarContenidoEtiquetas() {
    const etiqueta = prompt("Introduce el nombre de la etiqueta que deseas buscar (ej: 'p', 'h1', 'div', 'span'):");

    if (etiqueta) {
        const elementos = document.querySelectorAll(etiqueta);

        if (elementos.length > 0) {
            console.log(`--- Contenido de todas las etiquetas <${etiqueta}> ---`);
            elementos.forEach((elemento, index) => {
                console.log(`Elemento ${index + 1}:`);
                console.log(elemento.innerHTML.trim() || "(Sin contenido interno)");
            });
            console.log("-----------------------------------------");
        } else {
            console.log(`No se encontraron elementos con la etiqueta <${etiqueta}>.`);
        }
    } else {
        console.log("Operación cancelada o etiqueta no proporcionada.");
    }
}

mostrarContenidoEtiquetas();