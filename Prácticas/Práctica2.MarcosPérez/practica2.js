//1. Calculadora de area y perimetro de un cuadrado
    let lado = Number(prompt("Introduce la longitud del lado del cuadrado:"));
    if (lado <= 0) {
        console.log("Por favor, introduce un número válido mayor que 0.");
    }
    let area = lado * lado;
    let perimetro = 4 * lado;
    console.log("Cuadrado:");
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);

//2. Detector de numeros magicos

// 3. Crea un programa que "cuente" la cantidad de digitos de un numero(sin funciones)
    let numero1 = prompt("Introduce un número para contar sus dígitos:");
    let contador = 0;
    for (let i = 0; i < numero1.length; i++) {
            contador++;
    }
    console.log("El número " + numero1 + " tiene " + contador + " dígitos.");

//4. Mostrar los numeros pares del 1 al 100
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

//5. Calcular media de X numeros, preguntando antes al usuario cuantos números quiere introducir(bucle for).
    var cantidad = Number(prompt("¿Cuantos numeros quieres introducir?"));
    var suma = 0;
    for (let i = 0; i < cantidad; i++) {
        var numero2 = Number(prompt("Introduce un numero"));
        suma += numero2;
    }
    var media = suma / cantidad;
    alert("La media es: " + media);

//6.1 El adivinador
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado1 = false;

    while (!adivinado1) {
        let intento = Number(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;
        if (intento === numeroSecreto) {
            adivinado1 = true;
            alert("¡Felicidades! Has adivinado el número " + numeroSecreto + " en " + intentos + " intentos.");
        } else if (intento < numeroSecreto) {
            alert("El número es mayor. Inténtalo de nuevo.");
        } else {
            alert("El número es menor. Inténtalo de nuevo.");
        }
    }

//6.2 Adivinador inverso
let min = 1;
let max = 100;
let adivinado2 = false;

alert("Piensa un número entre " + min + " y " + max + ". Yo intentaré adivinarlo.");

while (!adivinado2) {
  let intento = Math.floor((min + max) / 2);
  let respuesta = prompt("¿Es tu número " + intento + "? (responde: mayor, menor, correcto)");

  if (respuesta === "correcto") {
    alert("¡Genial! Adiviné tu número: " + intento);
    adivinado2 = true;
  } else if (respuesta === "mayor") {
    min = intento + 1;
  } else if (respuesta === "menor") {
    max = intento - 1;
  } else {
    alert("Por favor responde solo con: mayor, menor o correcto.");
  }
}

//7. Jugando un poco con la consola: Aventura conversacional/juego de preguntas y respuestas.
let nombre = prompt("¡Bienvenido joven aprendiz de alcholico! ¿Cuál es tu nombre(dilo ebrio)?");
console.log("Hola " + nombre + ", estás en tu aventura mas borracha. Elige tu destino sabiamente.");
let eleccion1 = prompt("Estás en un chino. ¿Compras una litrona o una botella de agua)(litrona/botella de agua)");

if (eleccion1 === "litrona") {
    let eleccion2 = prompt("Te encuentras con el vendedor asiatico ninja. ¿Quieres pagar o hacerte un sinpa? (pagar/sinpa)");
    if (eleccion2 === "pagar") {
        console.log("Sales con exito de la tienda y encuestras la felicidad(estas borracho). ¡Felicidades " + nombre + "!");
    } else if (eleccion2 === "sinpa") {
        console.log("El chino te pilla y te mete una paliza shaolin con sus nunchakos. Has muerto " + nombre + ".");
    } else {
        console.log("Tu eleccion no vale un mojon. Vete por ahi " + nombre + ".");
    }
} else if (eleccion1 === "Agua") {
    let eleccion2 = prompt("¿Realmente quieres beber agua? (si/no)");
    if (eleccion2 === "si") {
        console.log("Como sistema inteligente(soy alcholico) te propongo que te marches de aqui no me interesa hablar contigo. ¡Xao, xao, xao " + nombre + "!");
    } else if (eleccion2 === "no") {
        console.log("Sabia que elegirias bien al final. Juntos beberemos hasta que el sol salga por el horizonte o nos lleven al hospial, te amo " + nombre + ".");
    } else {
        console.log("Tu eleccion no vale un mojon. Vete por ahi " + nombre + ".");
    }
} else {
    console.log("Tu eleccion no vale un mojon. Vete por ahi " + nombre + ".");
}

//8. Menu de opciones
let opcion;
do {
  opcion = prompt(
    "MENÚ PRINCIPAL" +
    "1. Whisky + Red Bull " +
    "2. Ron + Cocacola " +
    "3. Vodka + Limon " +
    "4. Salir " +
    "Elige una opción: "
  );

  switch (opcion) {
    case "1":
      alert("Has elegido Whiksy con Red Bull eres un hombre sabio");
      break;
    case "2":
      alert("Has elegido Ron con Cocacola eres un poco pirata");
      break;
    case "3":
      alert("Has elegido Vodka con Limon, tio eres un poco raro");
      break;
    case "4":
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opción no válida. Inténtalo de nuevo.");
  }

} while (opcion !== "4");

//9. Piedra, papel o tijeras(juego)
const opciones = ["piedra", "papel", "tijeras"];
let usuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();
let maquina = opciones[Math.floor(Math.random() * 3)];
let resultado = "";
if (usuario === maquina) {
  resultado = prompt("¡Empate!");
} else if (
  (usuario === "piedra" && maquina === "tijeras") ||
  (usuario === "papel" && maquina === "piedra") ||
  (usuario === "tijeras" && maquina === "papel")
) {
  resultado = prompt("¡Ganaste!");
} else if (opciones.includes(usuario)) {
  resultado = prompt("Perdiste...");
} else {
  resultado = prompt("Opción inválida. Debes elegir piedra, papel o tijeras.");
}
//10. Mostrar los 100 primeros numeros primos
let contadorPrimos = 0;
let numero = 2;
console.log("Los primeros 100 números primos son:");
while (contadorPrimos < 100) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numero);
        contadorPrimos++;
    }
    numero++;
}

//Bonus. Navasesh
let number = prompt("Introduce un número:");
while (number >= 10) {
  var adittion = 0;
  while (number > 0) {
    adittion += number % 10;
    number = Math.floor(number / 10);
  }
  number = adittion;
}
alert("El número navasesh es: " + adittion);