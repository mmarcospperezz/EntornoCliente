const colorUsuario = prompt("Introduce un color para el texto:");
const parrafos = document.querySelectorAll('p');
parrafos.forEach(p => {
    p.setAttribute('style', `color: ${colorUsuario};`);
});