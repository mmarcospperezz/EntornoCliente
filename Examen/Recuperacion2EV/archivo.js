const input = document.getElementById("tareaInput");
const btn = document.getElementById("btnAñadir");
const lista1 = document.getElementById("listaPreparacion");
const lista2 = document.getElementById("listaFinalizado");

btnAñadir.addEventListener("click", () => {
    const textoTarea = input.value.trim();
    if (textoTarea === "") {
        alert("No se puede añadir tareas vacias");
        return;
    }
    const li1 = document.createElement("li");
    li1.textContent = textoTarea;

    li1.addEventListener("click", (e) => {
        if (e.target.tagName !== "button") {
            li.classList.toggle("EN PREPARACION")
        }
    })

    const btnFinalizar = document.createElement("button");
    btnFinalizar.textContent = "Finalizar Tarea";
    btnFinalizar.style.marginLeft = "10px";

    const li2 = document.createElement("li");

    btnFinalizar.addEventListener("click", (e) => {
        e.stopPropagation();
        li1.remove();
        li2.textContent = textoTarea;
        li2.appendChild(btnEliminar);
        lista2.appendChild(li2)
        input.value = "";
    })

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar Tarea";
    btnEliminar.style.marginLeft = "10px";

    btnEliminar.addEventListener("click", (e) => {
        li2.remove();
    })
    li1.appendChild(btnFinalizar);
    lista1.appendChild(li1)
    input.value = "";
});





