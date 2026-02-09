const body = document.body;
const mensaje =
    document.getElementById('mensaje');
// Revisa si hay datos guardados
let nombre =
    localStorage.getItem('nombreUsuario');
let tema = localStorage.getItem('tema');
if (!nombre) {
    nombre = prompt("Introduce tu nombre:");
    if (nombre) {
        localStorage.setItem('nombreUsuario',
            nombre);
    }
}
if (!tema) {
    tema = prompt("Elige tu tema: claro u oscuro").toLowerCase();
    if (tema !== 'oscuro') {
        tema = 'claro'; // valor pordefecto
    }
    localStorage.setItem('tema', tema);
}
// Aplica el estilo
if (tema === 'oscuro') {
    body.classList.add('oscuro');
    body.classList.remove('claro');
} else {
    body.classList.add('claro');
    body.classList.remove('oscuro');
}