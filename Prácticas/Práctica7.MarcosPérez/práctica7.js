// 1-Crear un objeto persona con nombre, edad y ciudad. Acceder a sus propiedades con . y con [ ]. Cambiar el valor de edad y agregar una nueva propiedad profesión.
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona.nombre); 
console.log(persona["edad"]); 
persona.edad = 31;
persona.profesion = "Ingeniero";

console.log(persona);

//2-Añadir un método saludar() que muestre "Hola, soy <nombre>". Añadir un método cumplirAnos() que aumente la edad en 1.
persona.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};
persona.cumplirAnos = function() {
    this.edad += 1;
};

persona.saludar();
persona.cumplirAnos();
console.log(persona.edad);

//3-Usar delete para eliminar la propiedad ciudad. Mostrar el objeto antes y después.
console.log("Antes de delete:", persona);
delete persona.ciudad;
console.log("Después de delete:", persona);

//4-Crea un array de estudiantes, cada uno con nombre y nota. Crea una función media() y otra aprobados() que devuelva un array con los alumnos con nota superior a 5.
let estudiantes = [
    {nombre: "Ana", nota: 7},
    {nombre: "Luis", nota: 4},
    {nombre: "Marta", nota: 9},
    {nombre: "Pedro", nota: 5}
];

function media(array) {
    let suma = 0;
    for (let estudiante of array) {
        suma += estudiante.nota;
    }
    return suma / array.length;
}
function aprobados(array) {
    return array.filter(est => est.nota > 5);
}

console.log("Media:", media(estudiantes));
console.log("Aprobados:", aprobados(estudiantes));

//5-Crea la función buscarPorNombre(nombre) que devuelva el objeto del estudiante correspondiente.
function buscarPorNombre(nombre) {
    return estudiantes.find(est => est.nombre === nombre);
}

console.log(buscarPorNombre("Marta"));

//6-Crea la función actualizarNota(nombre, nuevaNota) que cambie la nota del estudiante.
function actualizarNota(nombre, nuevaNota) {
    let estudiante = estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
        estudiante.nota = nuevaNota;
    }
}

actualizarNota("Luis", 6);
console.log(estudiantes);
