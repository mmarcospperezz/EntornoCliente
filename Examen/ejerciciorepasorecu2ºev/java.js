const productos = {};

function añadirProducto(nombre) {
    if (productos[nombre]) {
        productos[nombre]++;
    } else {
        productos[nombre] = 1;
    }

    mostrarLista();
}

function quitarProducto(nombre) {
    if (!productos[nombre]) return;
    productos[nombre]--;
    if (productos[nombre] <= 0) {
        delete productos[nombre];
    }
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = "";

    for (let producto in productos) {
        const li = document.createElement("li");
        li.textContent = `${producto} x ${productos[producto]} `;

        const btnQuitar = document.createElement('button');
        btnQuitar.textContent = 'Quitar';
        btnQuitar.addEventListener('click', function() {
            quitarProducto(producto);
        });

        li.appendChild(btnQuitar);
        lista.appendChild(li);
    }
}