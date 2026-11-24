const direccion = {
	calle: "Calle Julio Quiroz",
	ciudad: "Ecatepec",
	estado: "Estado de México",
	cp: 12345,
	ciudadadano: {
		nombre: "Luis",
		apellido: "Romero",
		nacionalidad:{
			pais: "Mexicana"
		}
	}
}
/*
console.log(direccion.calle)
console.log(direccion.ciudad)
console.log(direccion.estado)
console.log(direccion.cp)
console.log(direccion.ciudadadano.nombre)
console.log(direccion.ciudadadano.nacionalidad.pais)
*/
const pais = direccion.ciudadadano.nacionalidad.pais

const { calle, ciudad, estado, cp, ciudadadano, mascota } = direccion

console.log(calle)
console.log(ciudad)
console.log(estado)
console.log(cp)
console.log(ciudadadano)
console.log(mascota) // undefined porque no existe en el objeto

const { nombre, apellido, nacionalidad } = ciudadadano
console.log("==========")

console.log(nombre)
console.log(apellido)
console.log(nacionalidad)