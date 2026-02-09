
function iniciarContador() {
    let contador = 0;

    const elementoContador = document.getElementById('contador');

    if (!elementoContador) {
        console.error("El elemento con id 'contador' no existe en el HTML.");
        return;
    }
    
    elementoContador.style.fontSize = '3em';
    elementoContador.style.textAlign = 'center';
    elementoContador.style.margin = '20px';

    function actualizarContador() {
        contador++;
        elementoContador.textContent = `Contador: ${contador}`;
        console.log(`Contador actualizado a: ${contador}`);
    }

    actualizarContador();

    setInterval(actualizarContador, 3000);
}

iniciarContador();