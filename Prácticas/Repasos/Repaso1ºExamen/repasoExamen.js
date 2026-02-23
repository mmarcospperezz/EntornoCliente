//Calculadora: Decimal → Hexadecimal
var decimal = parseInt(prompt("Introduce un número decimal:"));
var n = decimal;
var hexChars = "0123456789ABCDEF";
var resultado = "";
if (n === 0) {
  resultado = "0";
} else {
  while (n > 0) {
    var resto = n % 16;
    resultado = hexChars[resto] + resultado;
    n = (n - resto) / 16;
  }
}
alert("El número " + decimal + " en hexadecimal es: " + resultado);

//Calculadora: Segundos → Días, Horas, Minutos y Segundos
var segundosTotales = parseInt(prompt("Introduce una cantidad de segundos:"));
var dias = (segundosTotales - segundosTotales % 86400) / 86400;
var resto = segundosTotales % 86400;
var horas = (resto - resto % 3600) / 3600;
resto = resto % 3600;
var minutos = (resto - resto % 60) / 60;
var segundos = resto % 60;
alert(
  segundosTotales + " segundos equivalen a:\n" +
  dias + " días, " +
  horas + " horas, " +
  minutos + " minutos y " +
  segundos + " segundos."
);

//Calculadora: Números Perfectos (True/False)
var num = parseInt(prompt("Introduce un número para comprobar si es perfecto:"));
var suma = 1;
var d = 2;
if (num <= 1) {
  alert("El número " + num + " NO es perfecto.");
} else {
  while (d * d <= num) {
    if (num % d === 0) {
      suma = suma + d;
      if (d !== num / d) {
        suma = suma + (num / d);
      }
    }
    d = d + 1;
  }
  if (suma === num) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}

//Encontrar el máximo de un array (sin funciones)
var tamaño = parseInt(prompt("¿Cuántos números tendrá el array?"));
var arr = [];
var i = 0;
while (i < tamaño) {
  arr[i] = parseFloat(prompt("Introduce el número " + (i + 1) + ":"));
  i = i + 1;
}
var max = arr[0];
i = 1;
while (i < arr.length) {
  if (arr[i] > max) {
    max = arr[i];
  }
  i = i + 1;
}
alert("El número máximo del array es: " + max);


//Rotar un array (último pasa al inicio)
var tamaño2 = parseInt(prompt("¿Cuántos elementos tiene el array a rotar?"));
var arr2 = [];
var j = 0;
while (j < tamaño2) {
  arr2[j] = parseFloat(prompt("Introduce el número " + (j + 1) + ":"));
  j = j + 1;
}
if (arr2.length > 0) {
  var ultimo = arr2[arr2.length - 1];
  j = arr2.length - 1;
  while (j > 0) {
    arr2[j] = arr2[j - 1];
    j = j - 1;
  }
  arr2[0] = ultimo;
}
alert("Array rotado: [" + arr2.join(", ") + "]");


