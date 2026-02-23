const inputUrl = document.getElementById('urlImagen');
const inputTexto = document.getElementById('textoImagen');
const boton = document.getElementById('btnAnadir');
const catalogo = document.getElementById('catalogo');

boton.addEventListener('click', () => {
    const url = inputUrl.value;
    const texto = inputTexto.value;

    if (url === '' || texto === '') {
        alert("Por favor, rellena ambos campos.");
        return;
    }

    const contenedorTarjeta = document.createElement('div');
    contenedorTarjeta.classList.add('tarjeta');

    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = url;
    nuevaImagen.alt = texto;

    const pieFoto = document.createElement('p');
    pieFoto.textContent = texto;

    contenedorTarjeta.appendChild(nuevaImagen);
    contenedorTarjeta.appendChild(pieFoto);
    catalogo.appendChild(contenedorTarjeta);

    inputUrl.value = '';
    inputTexto.value = '';
});