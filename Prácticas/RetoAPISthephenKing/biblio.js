async function obtenerLibros() {
    try {
        const respuesta = await fetch('https://stephen-king-api.onrender.com/api/books');
        
        const datos = await respuesta.json();
        const libros = datos.data; 

        console.log("Títulos de los libros:");
        libros.forEach(libro => console.log(libro.Title));

        tabla(libros);

    } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
    }
}

function tabla(libros) {
    const contenedor = document.getElementById('tabla-contenedor');
    
    const tabla = document.createElement('table');
    tabla.border = "1";
    const encabezado = `
        <thead>
            <tr>
                <th>Título</th>
                <th>Año</th>
            </tr>
        </thead>`;
    
    const filas = libros.map(libro => `
        <tr>
            <td>${libro.Title}</td>
            <td>${libro.Year}</td>
        </tr>
    `).join('');

    tabla.innerHTML = encabezado + `<tbody>${filas}</tbody>`;
    contenedor.appendChild(tabla);
}

obtenerLibros();