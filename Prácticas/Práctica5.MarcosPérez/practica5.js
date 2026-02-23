// Array sin duplicados
const numeros = [5, 8, 3, 8, 10, 5, 1, 3];
const numerosSinDuplicados = [...new Set(numeros)];
alert(`Array sin duplicados: ${numerosSinDuplicados.join(", ")}`);

// Set de elementos comunes
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const setAB = new Set([...setA].filter(x => setB.has(x)));
alert(`Elementos comunes: ${[...setAB].join(", ")}`);

// Menu inicio de sesion y registro(con map)
let usuarios = new Map();
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
    if (usuarios.has(nombreUsuario)) {
      alert('El nombre de usuario ya existe.');
    } else {
      let contraseña = prompt('Contraseña:');
      usuarios.set(nombreUsuario, contraseña);
      alert('Usuario registrado correctamente.');
    }
  } else if (opcion === '2') {
    if (usuarioActual) {
      alert('Ya has iniciado sesión como ' + usuarioActual);
    } else {
      let nombre = prompt('Usuario:');
      let contraseña = prompt('Contraseña:');
      if (usuarios.has(nombre) && usuarios.get(nombre) === contraseña) {
        usuarioActual = nombre;
        alert('Inicio de sesión correcto.');
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
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
    if (usuarios.size === 0) {
      alert('No hay usuarios registrados.');
    } else {
      let lista = '';
      for (let nombre of usuarios.keys()) {
        lista += '- ' + nombre + '\n';
      }
      alert('Usuarios registrados:\n' + lista);
    }
  } else if (opcion === '6') {
    if (!usuarioActual) {
      alert('No hay usuario conectado.');
    } else {
      let confirmar = confirm('¿Eliminar la cuenta ' + usuarioActual + '?');
      if (confirmar) {
        usuarios.delete(usuarioActual);
        usuarioActual = null;
        alert('Cuenta eliminada correctamente.');
      }
    }
  } else if (opcion === '0') {
    alert('Saliendo del sistema...');
  } else {
    alert('Opción no válida.');
  }
}

// Bonus:Conjuntos no repetidos
const set1 = new Set(prompt("Introduce los elementos del primer conjunto, separados por comas:").split(',').map(Number));
const set2 = new Set(prompt("Introduce los elementos del segundo conjunto, separados por comas:").split(',').map(Number));
const set3 = new Set(prompt("Introduce los elementos del tercer conjunto, separados por comas:").split(',').map(Number));
const unique1 = new Set([...set1].filter(x => !set2.has(x) && !set3.has(x)));
const unique2 = new Set([...set2].filter(x => !set1.has(x) && !set3.has(x)));
const unique3 = new Set([...set3].filter(x => !set1.has(x) && !set2.has(x)));
alert(`Elementos únicos del primer conjunto: ${[...unique1].join(", ")}`);
alert(`Elementos únicos del segundo conjunto: ${[...unique2].join(", ")}`);
alert(`Elementos únicos del tercer conjunto: ${[...unique3].join(", ")}`);
