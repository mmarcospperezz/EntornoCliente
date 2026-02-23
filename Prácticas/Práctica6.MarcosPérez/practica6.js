//Funcion cuadrado de un numero
function cuadrado(num) {
    return num * num;
}
//uso
 let number1 = Number(prompt("Introduce un número para calcular su cuadrado:"));
 alert(cuadrado(number1));


//Funcion calculadora factorial de un numero
function factorial(num) {
    if (num < 0) return false;
    if (num === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
//uso
let number2 = Number(prompt("Introduce un número para calcular su factorial:"));
alert(factorial(number2));

//Funcion celsius a fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
//uso
let celsius = Number(prompt("Introduce una temperatura en grados Celsius para convertirla a Fahrenheit:"));
alert(celsiusAFahrenheit(celsius));

//Funcion es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
//uso
let number3 = Number(prompt("Introduce un número para comprobar si es primo:"));
alert(esPrimo(number3));

//Función contador número de vocales de una palabra
function contarVocales(palabra) {
    let contador = 0;
    const vocales = 'aeiouAEIOU';
    for (let char of palabra) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}
//uso
let palabra = prompt("Introduce una palabra para contar sus vocales:");
alert(contarVocales(palabra) + "vocales");

//Función  ecuación de segundo grado
function Ecuacion2ºGrado(a, b, c) {
  const formula = b ** 2 - 4 * a * c;

  if (formula < 0) {
    return [];
  } else if (formula === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    const raiz = Math.sqrt(formula);
    const x1 = (-b + raiz) / (2 * a);
    const x2 = (-b - raiz) / (2 * a);
    return [x1, x2];
  }
}
//uso
let a = Number(prompt("Introduce el dato a de la ecuación de segundo grado:"));
let b = Number(prompt("Introduce el dato b de la ecuación de segundo grado:"));
let c = Number(prompt("Introduce el dato c de la ecuación de segundo grado:"));
alert(Ecuacion2ºGrado(a, b, c));

//Funcion con callback
function callBack(numero, callback) {
  if (numero > 10) {
    callback();
  } else {
    alert("El número no es mayor que 10.");
  }
}
function positiveMessage(){
  alert("El número es mayor que 10.");
}
//uso
let number4 = Number(prompt("Introduce un número para comprobar si es mayor que 10:"));
callBack(number4, positiveMessage);


//Funcion sumar todos
function sumarTodos(nums) {
  let suma = 0;
  for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
  }
  return suma;
}
//uso
let cantidad = parseInt(prompt("¿Cuántos números deseas agregar al array?"));
let numeros = [];
for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt(`Introduce el número ${i + 1}:`));
    numeros.push(num);
}
let resultado = sumarTodos(numeros);
alert ("La suma total de todos los numeros es:" + resultado)




//Funcion palindromos
function filtrarPalindromos(palabras) {
  return palabras.filter(palabra => {
    const normalizada = palabra.toLowerCase();
    const invertida = normalizada.split('').reverse().join('');
    return normalizada === invertida;
  });
}

//uso
const lista = ["oso", "casa", "reconocer", "hola", "radar", "nivel"];
const palindromos = filtrarPalindromos(lista);
alert(palindromos);



