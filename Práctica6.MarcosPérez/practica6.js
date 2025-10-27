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

//Función que cuente el número de vocales de una palabra
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
function resolverEcuacionSegundoGrado(a, b, c) {
}