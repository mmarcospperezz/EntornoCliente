fecha = new Date();
console.log(fecha.toDateString());
diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
mesesAño = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

var diaSemana = diasSemana[fecha.getDay()];
var diaMes = fecha.getDate();
var mes = mesesAño[fecha.getMonth()];
var año = fecha.getFullYear();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

console.log("Buenos dias, hoy es " + diaSemana + " " + diaMes + " de " + mes + " de " + año + ". Son las " + hora + ":" + minutos + ":" + segundos + ".");

