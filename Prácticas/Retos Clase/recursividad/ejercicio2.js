function invertirString(str) {
  if (str === "") return "";
  return invertirString(str.slice(1)) + str[0];
}

//uso
alert(invertirString("mundo"));
