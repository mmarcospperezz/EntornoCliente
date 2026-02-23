//Ir a la página anterior
if (confirm("¿Quieres ir a la página anterior?")) {
    window.history.back();
} else {
    console.log("El usuario decidió no ir a la página anterior.");
}