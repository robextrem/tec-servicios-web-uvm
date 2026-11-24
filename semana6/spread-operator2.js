const obj = [{
	calle: "Calle Julio Quiroz",
	ciudad: "Ecatepec",
	estado: "Estado de México",
	cp: 12345
},{
	calle: "Calle Juan Mendoza",
	ciudad: "Coyoacan",
	estado: "CDMX",
	cp: 88888
}]

const arregloNuevo = [...obj]
obj.push({
	calle: "Calle 1",
	ciudad: "Coyoacan",
	estado: "CDMX",
	cp: 88888
})

console.log(obj)
console.log(arregloNuevo)

