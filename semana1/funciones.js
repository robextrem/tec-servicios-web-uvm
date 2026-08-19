function suma(a, b){
	const resultado = a + b
	return resultado
}

/*Podemos llamar la función de la siguiente manera*/
console.log(suma(1, 2))
/*O podemos guardar el resultado de la función en una variable*/
const resu= suma(1, 2)
console.log(resu)
/** resultado esta en otro scope*/
/*console.log(resultado)*/

function nombreCompleto(nombre, apellido){
	const miNombre = nombre + " " + apellido
	return miNombre
}

const apell = "Romero"

const n1 = nombreCompleto("Juan", "Perez")
const n2 = nombreCompleto("Roberto", apell)
const n3 = nombreCompleto("Roberto", 3)

console.log(n1)
console.log(n2)
console.log(n3)