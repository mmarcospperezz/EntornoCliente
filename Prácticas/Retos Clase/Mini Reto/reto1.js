  //Aviso cada 5 segundos(reto1)
  let intervalo = setInterval(() => {
    let respuesta = confirm("¿QUIERES QUE TE RECUERDE MAS?");
    if (!respuesta) {
      clearInterval(intervalo);
      alert("STOP RECORDATORIO.");
    }
  }, 5000);


