//Ejercicio 1: Suma de todos los numeros
let number1 = Number(prompt("Introduce un numero entero y positivo"));
let suma1 = 0;
for (let i = number1; i >= 0; i--) {
    suma1 += i;
}
alert(suma1);


//Ejercicio 2: Adivina el numero
let numeroSecreto = Math.floor(Math.random() * 500) + 1;
   let intentos = 0;
   let adivinado1 = false;

   while (!adivinado1) {
       let intento = Number(prompt("Adivina el número (entre 1 y 500):"));
       intentos++;
       if (intento === numeroSecreto) {
           adivinado1 = true;
           alert("Mastodonte has adivinado el numerito que es:" + numeroSecreto + " en " + intentos + " intentos.");
       } else if (intento < numeroSecreto) {
           alert("El número es mayor. Tira para arriba.");
       } else {
           alert("El número es menor. Tira para abjo.");
       }
   }


   
//Ejercicio 3: Conteo multiplos de 3
let number2;
do {
  number2 = parseInt(prompt("Introduce un número (0 para terminar):"));

  if (number2 !== 0) {
    let cantidad = Math.floor(number2 / 3);
    console.log (cantidad)
  }

} while (number2 !== 0);

//Ejercio 4: Notas de clase
let alumnos = ["Pablo", "Marcos", "Lucia", "Maria", "Pedro"];
let notas = [5, 6, 7, 8, 9];
let suma2 = 0
//media
for (let nota of notas) {
    suma2 += nota;
    media = suma2 / notas.length;
}
alert(media);

//alumno + nota
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i] + " --> " + notas[i]);
}

//mejor y peor nota
let maxNota = Math.max(...notas);
let indiceMax = notas.indexOf(maxNota);
console.log(`Mejor nota: ${alumnos[indiceMax]} --> ${maxNota}`);

let minNota = Math.min(...notas);
let indiceMin = notas.indexOf(minNota);
console.log(`Peor nota: ${alumnos[indiceMin]} --> ${minNota}`);

//Ejercicio 5
let numeros = [1, 2, 3, 2, 4, 3, 5, 1];
let sinRepetidos = [];

for (let num of numeros) {
  if (!sinRepetidos.includes(num)) {
    sinRepetidos.push(num);
  }
}

console.log(sinRepetidos);
