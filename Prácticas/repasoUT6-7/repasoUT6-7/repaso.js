/************ 1. AÑADIR PÁRRAFO ************/
document.getElementById("btnParrafo").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Este es un nuevo párrafo añadido al body.";
    document.body.appendChild(p);
});


/************ 2. BOTONES DINÁMICOS ************/
document.getElementById("btnCrearBotones").addEventListener("click", () => {
    const num = confirm("¿Quieres crear 3 botones?") ? 3 : 0;

    const contenedor = document.getElementById("contenedorBotones");
    contenedor.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        const boton = document.createElement("button");
        boton.textContent = `Botón ${i}`;

        boton.addEventListener("click", () => {
            alert(boton.textContent);
        });

        contenedor.appendChild(boton);
    }
});


/************ 3. INTERRUPTOR BOMBILLA ************/
let encendida = false;
const imgBombilla = document.getElementById("bombilla");

document.getElementById("btnBombilla").addEventListener("click", () => {
    encendida = !encendida;
    imgBombilla.src = encendida ? "encendida.png" : "apagada.png";
});


/************ 4 Y 5. COLOR DE FONDO + LOCALSTORAGE ************/
const colorInput = document.getElementById("colorInput");
const btnColor = document.getElementById("btnColor");

// Cargar color guardado al iniciar
const colorGuardado = localStorage.getItem("colorFondo");
if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
}

btnColor.addEventListener("click", () => {
    const color = colorInput.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("colorFondo", color);
});
