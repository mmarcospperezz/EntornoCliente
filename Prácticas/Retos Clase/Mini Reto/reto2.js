//Guardar usuario en localStorage
  let usuario = localStorage.getItem("usuario");
  if (!usuario) {
    usuario = prompt("INGRESA TU NOMBRE DE USUARIO:");
    if (usuario) {
        localStorage.setItem("usuario", usuario);
  } else {
    usuario = "invitado";
  }
}
alert (`¡Hola, ${usuario}!`);