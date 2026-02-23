
const input = document.getElementById("tareaInput");
const btnAñadir = document.getElementById("btnAñadir");
const lista = document.getElementById("listaTareas");

btnAñadir.addEventListener("click", () => {
    const textoTarea = input.value.trim();

    if (textoTarea === "") {
        alert("No se pueden añadir tareas vacías");
        return;
    }

    const li = document.createElement("li");
    li.textContent = textoTarea;

    li.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle("completada");
        }
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation(); 
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    input.value = "";
});


const btnToggle = document.getElementById("btnToggle");
const parrafo = document.getElementById("parrafo");

let activo = localStorage.getItem("estadoParrafo") === "true";

function clickParrafo() {
    parrafo.style.backgroundColor = "#ffd966";
}

function hoverParrafo() {
    parrafo.style.color = "red";
}

function salirParrafo() {
    parrafo.style.color = "black";
}

function activar() {
    parrafo.addEventListener("click", clickParrafo);
    parrafo.addEventListener("mouseenter", hoverParrafo);
    parrafo.addEventListener("mouseleave", salirParrafo);
    btnToggle.textContent = "Desactivar";
    activo = true;
    localStorage.setItem("estadoParrafo", "true");
}

function desactivar() {
    parrafo.removeEventListener("click", clickParrafo);
    parrafo.removeEventListener("mouseenter", hoverParrafo);
    parrafo.removeEventListener("mouseleave", salirParrafo);
    btnToggle.textContent = "Activar";
    parrafo.style = "";
    activo = false;
    localStorage.setItem("estadoParrafo", "false");
}

if (activo) activar();

btnToggle.addEventListener("click", () => {
    activo ? desactivar() : activar();
});

