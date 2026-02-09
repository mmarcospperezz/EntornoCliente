//Cambio de texto
let nombre = prompt("Por favor, introduce tu nombre:");
if (nombre) {
    document.getElementById("mensaje").textContent = "Hola " + nombre;
} else {
    document.getElementById("mensaje").textContent = "Hola invitado";
}
