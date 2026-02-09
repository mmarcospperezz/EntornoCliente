
function anadirH1() {
    const nuevoH1 = document.createElement('h1');

    const titulo = document.createTextNode('¡Título Añadido por JavaScript!');

    nuevoH1.appendChild(titulo);


    document.body.prepend(nuevoH1); 
    console.log("Se ha añadido un nuevo h1 al inicio de la página.");
}

anadirH1();