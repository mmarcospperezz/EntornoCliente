//Funcion cuadrado de un numero
function cuadrado(num) {
    return num * num;
}
//uso
console.log(cuadrado(5)); 
console.log(cuadrado(-3));
console.log(cuadrado(0));

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
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-2));

//Funcion celsius a fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
//uso
console.log(celsiusAFahrenheit(0)); 
console.log(celsiusAFahrenheit(100)); 
console.log(celsiusAFahrenheit(-40));

//Funcion es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
//uso
console.log(esPrimo(7)); 
console.log(esPrimo(10)); 
console.log(esPrimo(1));
console.log(esPrimo(-5));

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
console.log(contarVocales("Hola Mundo")); 
console.log(contarVocales("JavaScript")); 
console.log(contarVocales("XYZ"));

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
console.log(Ecuacion2ºGrado(1, -3, 2)); 
console.log(Ecuacion2ºGrado(1, 2, 1)); 
console.log(Ecuacion2ºGrado(1, 0, 1));

//Funcion con callback
function callBack(numero, callback) {
  if (numero > 10) {
    callback();
  } else {
    console.log("El número no es mayor que 10.");
  }
}
//uso
callBack(15, () => {
  console.log("El número es mayor que 10.");
});
callBack(8, () => {
  console.log("El número es mayor que 10.");
});

//Funcion sumar todos
function sumarTodos(...nums) {
  let suma = 0;
  for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
  }
  return suma;
}
//uso
console.log(sumarTodos(1, 2, 3, 4, 5)); 
console.log(sumarTodos(10, -2, 3)); 
console.log(sumarTodos());

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
console.log(palindromos);



