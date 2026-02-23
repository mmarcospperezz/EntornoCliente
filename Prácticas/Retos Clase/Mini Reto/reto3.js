//Comprobación de conexión a internet
setInterval(() => {
    if (navigator.onLine) {
        console.log("Hay conexion a internet.");
    } else {
        console.log("No hay conexion a internet.");
    }
}, 3000);