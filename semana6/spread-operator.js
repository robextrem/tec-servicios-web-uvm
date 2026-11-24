// ... spread operator 

const arreglo1 = [1, 2, 3]
const arreglo2 = ["guayaba", "fresa", "banana"]

const arregloCopiado = [...arreglo1]
//const arregloCopiado = arreglo1
/**
 * const arregloCopiado = []
 * for(let i = 0; i < arreglo1.length; i++){
 * 	arregloCopiado[i] = arreglo1[i]
 }
 * 
*/

arreglo1.push(4)
arreglo1.push(5)
arreglo1.push(6)

console.log(...arreglo1)
console.log(arreglo2)

//Arreglo copiado
console.log(arregloCopiado)
console.log(arreglo1)