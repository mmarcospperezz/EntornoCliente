//3
let numero3 = Number(prompt("Introduce un numero:"))
let tabla = []
let mul = 0
for (let i = 1; i <= 10; i++){
     mul = numero3 * i
     tabla.push(mul)
}
console.log(tabla)

//4
let numero4 = Number(prompt("Introduce un numero:"))
let total = 1
for (let i = 1; i <= numero4; i++){
    total *= i
}
console.log(total)

//5
let numero5 = Number(prompt("Introduce un numero entero:"))
var i = 10 
contador = 1
while(numero5 >= 1){
    if (numero5 >=1){
        contador++
    }
    i += 10
}
console.log(contador)






