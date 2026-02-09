let xp = 0;
let salud = 100;
let dinero = 50;
let saludMonstruo;

const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const texto = document.querySelector('#texto');
const xpText = document.querySelector('#xpText');
const saludText = document.querySelector('#saludText');
const dineroText = document.querySelector('#dineroText');
const imagen = document.querySelector('#imagenEntorno');

const localizaciones = [
    {
        nombre: "pueblo",
        "texto": "Estás en la plaza. Ves un cartel que señala la tienda y un campo de entrenamiento.",
        "botones": ["Ir a la tienda", "Entrenar", "Luchar con dragón"],
        "funciones": [irTienda, irEntrenar, lucharDragon],
        "imagen": "https://via.placeholder.com/400x150/C5A37D/5D4037?text=Plaza+del+Pueblo"
    },
    {
        nombre: "tienda",
        "texto": "Entras a la tienda. El tendero te mira seriamente.",
        "botones": ["Comprar salud (10 oro)", "Comprar arma (30 oro)", "Volver al pueblo"],
        "funciones": [comprarSalud, comprarArma, irPueblo],
        "imagen": "https://via.placeholder.com/400x150/8D6E63/FFFFFF?text=Tienda+de+Objetos"
    },
    {
        nombre: "entrenamiento",
        "texto": "Hay dos reclutas practicando. ¿A quién quieres retar?",
        "botones": ["Retar Escudero", "Retar Caballero", "Volver al pueblo"],
        "funciones": [luchaEscudero, luchaCaballero, irPueblo],
        "imagen": "https://via.placeholder.com/400x150/A1887F/FFFFFF?text=Campo+de+Entrenamiento"
    },
    {
        nombre: "combate",
        "texto": "¡El enemigo se prepara para atacar!",
        "botones": ["Atacar", "Esquivar", "Huir"],
        "funciones": [atacar, esquivar, irPueblo],
        "imagen": "https://via.placeholder.com/400x150/E57373/FFFFFF?text=¡COMBATE!"
    }
];

// Inicializar botones
boton1.onclick = irTienda;
boton2.onclick = irEntrenar;
boton3.onclick = lucharDragon;

function actualizar(loc) {
    texto.innerText = loc.texto;
    boton1.innerText = loc.botones[0];
    boton2.innerText = loc.botones[1];
    boton3.innerText = loc.botones[2];
    boton1.onclick = loc.funciones[0];
    boton2.onclick = loc.funciones[1];
    boton3.onclick = loc.funciones[2];
    imagen.src = loc.imagen;
}

function irPueblo() { actualizar(localizaciones[0]); }
function irTienda() { actualizar(localizaciones[1]); }
function irEntrenar() { actualizar(localizaciones[2]); }

function comprarSalud() {
    if (dinero >= 10) {
        dinero -= 10;
        salud += 10;
        dineroText.innerText = dinero;
        saludText.innerText = salud;
        texto.innerText = "Has comprado salud. Te sientes mejor.";
    } else {
        texto.innerText = "No tienes suficiente dinero.";
    }
}

function comprarArma() {
    if (dinero >= 30) {
        dinero -= 30;
        xp += 5;
        dineroText.innerText = dinero;
        xpText.innerText = xp;
        texto.innerText = "¡Nueva espada comprada! Tu XP sube.";
    } else {
        texto.innerText = "No tienes oro suficiente.";
    }
}

function lucharDragon() {
    saludMonstruo = 150;
    actualizar(localizaciones[3]);
    texto.innerText = "¡Un enorme dragón desciende del cielo!";
}

function luchaEscudero() {
    saludMonstruo = 20;
    actualizar(localizaciones[3]);
    texto.innerText = "El escudero levanta su espada de madera.";
}

function luchaCaballero() {
    saludMonstruo = 50;
    actualizar(localizaciones[3]);
    texto.innerText = "El caballero parece experimentado...";
}

function atacar() {
    texto.innerText = "¡Atacas al enemigo!";
    saludMonstruo -= (10 + xp);
    if (saludMonstruo <= 0) {
        texto.innerText = "¡Has ganado! Recibes 20 de oro.";
        dinero += 20;
        dineroText.innerText = dinero;
        // Esperar un poco antes de volver al pueblo
        setTimeout(irPueblo, 2000);
    } else {
        salud -= 5;
        saludText.innerText = salud;
        if (salud <= 0) {
            texto.innerText = "Has caído en combate... Fin del juego.";
            setTimeout(() => location.reload(), 3000); // Reinicia el juego
        }
    }
}

function esquivar() {
    texto.innerText = "Esquivas el ataque con éxito.";
    xp += 1;
    xpText.innerText = xp;
}