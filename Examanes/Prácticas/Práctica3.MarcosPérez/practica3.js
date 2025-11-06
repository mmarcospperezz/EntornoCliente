//Array ordenado(sin fuinciones)
let cantidad1 = parseInt(prompt("¿Cuántos valores deseas introducir?"));
let valores = new Array(cantidad1);

for (let i = 0; i < cantidad1; i++) {
  let valor = parseFloat(prompt(`Introduce el valor ${i + 1}:`));
  valores[i] = valor;
}

for (let i = 0; i < valores.length - 1; i++) {
  for (let j = 0; j < valores.length - 1 - i; j++) {
    if (valores[j] > valores[j + 1]) {
      let temp = valores[j];
      valores[j] = valores[j + 1];
      valores[j + 1] = temp;
    }
  }
}

alert("Los valores ordenados son: " + valores.join(", "));


//Sistema de inicio de sesion y registro
let usuarios = [];
let usuarioActual = null;
let opcion = '';

while (opcion !== '0') {
  opcion = prompt(
    `MENÚ PRINCIPAL${usuarioActual ? ' (conectado: ' + usuarioActual + ')' : ''}\n\n` +
    `1) Registrarse\n` +
    `2) Iniciar sesión\n` +
    `3) Ver perfil\n` +
    `4) Cerrar sesión\n` +
    `5) Listar usuarios\n` +
    `6) Eliminar cuenta\n` +
    `0) Salir\n\nElige una opción:`
  );

  if (opcion === null) break;

  if (opcion === '1') {
    let nombreUsuario = prompt('Nombre de usuario:');
    let existe = false;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombreUsuario) {
        existe = true;
      }
    }
    if (existe) {
      alert('El nombre de usuario ya existe.');
    } else {
      let contraseña = prompt('Contraseña:');
      usuarios.push({ nombre: nombreUsuario, contraseña: contraseña });
      alert('Usuario registrado correctamente.');
    }
  } else if (opcion === '2') {
    if (usuarioActual) {
      alert('Ya has iniciado sesión como ' + usuarioActual);
    } else {
      let nombre = prompt('Usuario:');
      let contraseña = prompt('Contraseña:');
      let encontrado = false;
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre && usuarios[i].contraseña === contraseña) {
          usuarioActual = nombre;
          encontrado = true;
          alert('Inicio de sesión correcto.');
        }
      }
      if (!encontrado) alert('Usuario o contraseña incorrectos.');
    }
  } else if (opcion === '3') {
    if (usuarioActual) {
      alert('Perfil:\nUsuario: ' + usuarioActual);
    } else {
      alert('No hay usuario conectado.');
    }
  } else if (opcion === '4') {
    if (usuarioActual) {
      alert('Sesión cerrada de ' + usuarioActual);
      usuarioActual = null;
    } else {
      alert('No hay usuario conectado.');
    }
  } else if (opcion === '5') {
    if (usuarios.length === 0) {
      alert('No hay usuarios registrados.');
    } else {
      let lista = '';
      for (let i = 0; i < usuarios.length; i++) {
        lista += '- ' + usuarios[i].nombre + '\n';
      }
      alert('Usuarios registrados:\n' + lista);
    }
  } else if (opcion === '6') {
    if (!usuarioActual) {
      alert('No hay usuario conectado.');
    } else {
      let confirmar = confirm('¿Eliminar la cuenta ' + usuarioActual + '?');
      if (confirmar) {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].nombre === usuarioActual) {
            usuarios.splice(i, 1);
            usuarioActual = null;
            alert('Cuenta eliminada correctamente.');
          }
        }
      }
    }
  } else if (opcion === '0') {
    alert('Saliendo del sistema...');
  } else {
    alert('Opción no válida.');
  }
}

//Media con arrays
let cantidad2 = parseInt(prompt("¿Cuántas notas vas a ingresar?"));
let notas1 = new Array(cantidad2);

for (let i = 0; i < cantidad2; i++) {
  let nota = parseFloat(prompt("Introduce la nota #" + (i + 1) + ":"));
  notas1[i] = nota;
}

let sumaTotal1 = 0;
for (let i = 0; i < notas1.length; i++) {
  sumaTotal1 += notas1[i];
}
let mediaTotal1 = sumaTotal1 / notas1.length;

let sumaAprobados1 = 0;
let contadorAprobados1 = 0;
for (let i = 0; i < notas1.length; i++) {
  if (notas1[i] >= 5) {
    sumaAprobados1 += notas1[i];
    contadorAprobados1++;
  }
}

let mediaAprobados1 = contadorAprobados1 > 0 ? (sumaAprobados1 / contadorAprobados1) : 0;

alert(
  "Notas introducidas: " + notas1.join(", ") + "\n" +
  "Media total: " + mediaTotal1 + "\n" +
  "Media de aprobados: " + mediaAprobados1
);


//Media sin arrays
let cantidad3 = parseInt(prompt("¿Cuántas notas vas a introducir?"));
let sumaTotal2 = 0;
let contadorTotal2 = 0;
let sumaAprobados2 = 0;
let contadorAprobados2 = 0;
for (let i = 1; i <= cantidad3; i++) {
  let nota2 = parseFloat(prompt("Introduce la nota# " + i + ":"));

  sumaTotal2 += nota2;
  contadorTotal2++;

  if (nota2 >= 5) {
    sumaAprobados2 += nota2;
    contadorAprobados2++;
  }
}
let mediaTotal2 = sumaTotal2 / contadorTotal2;
let mediaAprobados2 =
  contadorAprobados2 > 0 ? sumaAprobados2 / contadorAprobados2 : 0;
alert("Media total: " + mediaTotal2.toFixed(2));
if (contadorAprobados2 > 0) {
  alert("Media de aprobados: " + mediaAprobados2.toFixed(2));
} else {
  alert("No hay aprobados, no se puede calcular la media de aprobados.");
}

//Array de 10 numeros ordenados(sin funciones)
let numeros = new Array(10);

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Introduce el número ${i + 1}:`));
  numeros[i] = num;
}

for (let i = 0; i < numeros.length - 1; i++) {
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let aux = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = aux;
    }
  }
}

alert("Array ordenado: " + numeros.join(", "));


//Arrays con mismos elementos y en misma posicion
const arr1 = [5, 10, 15, 20, 25];
const arr2 = [5, 12, 15, 22, 30];
let coincidencias = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    coincidencias++;
  }
}
alert(`El número de elementos que son iguales y están en la misma posición es: ${coincidencias}`);