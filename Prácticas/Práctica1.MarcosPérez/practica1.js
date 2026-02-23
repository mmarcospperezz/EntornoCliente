//Crear una calculadora de IVA.
 var num1 = Number(prompt("Introduce un numero"));
 const iva = 0.21;
 var resultado = num1 * iva;
 alert("El IVA es: " + resultado);
//Se le piden al usuario tres números y se devuelve la media.
    var num2 = Number(prompt("Introduce el primer numero"));
    var num3 = Number(prompt("Introduce el segundo numero"));
    var num4 = Number(prompt("Introduce el tercer numero"));
    var media = (num2 + num3 + num4) / 3;
    alert("La media es: " + media);
//El usuario introduce un número y la consola indica si es par o impar.
    var numero5 = Number(prompt("Introduce un numero"));
    if (numero5 % 2 == 0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    }
//Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.
    var nombre1 = prompt("Introduce el primer nombre");
    var nombre2 = prompt("Introduce el segundo nombre");
    var nombre3 = prompt("Introduce el tercer nombre");
    if (nombre1 == nombre2 || nombre1 == nombre3 || nombre2 == nombre3) {
        alert("Hay nombres repetidos");
    } else {
        alert("No hay nombres repetidos");
    }
//Se introduce la nota numérica del examen y devuelve categoría (suspenso, aprobado, notable…).
    var nota = Number(prompt("Introduce la nota del examen"));
    if (nota < 5) {
        alert("Suspenso");
    } else if (nota >= 5 && nota <= 6) {
        alert("Aprobado");
    } else if (nota >= 7 && nota <= 8) {
        alert("Notable");
    } else if (nota >= 9 && nota <= 10) {
        alert("Sobresaliente");
    } else {
        alert("Nota fuera de rango");
    }
//Se introduce el año de nacimiento y se indica si es mayor de edad o no.
    var año = Number(prompt("Introduce tu año de nacimiento"));
    var edad = 2025 - año;
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
//Se pide el DNI y se calcula la letra.
    var dni = Number(prompt("Introduce tu DNI sin letra"));
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var letra = letras[dni % 23];
    alert("Tu letra del DNI es: " + letra);
//Calcular media de X numeros, preguntando antes al usuario cuantos números quiere introducir(bucle for).
    var cantidad = Number(prompt("¿Cuantos numeros quieres introducir?"));
    var suma = 0;
    for (let i = 0; i < cantidad; i++) {
        var numero = Number(prompt("Introduce un numero"));
        suma += numero;
    }
    var media2 = suma / cantidad;
    alert("La media es: " + media2);