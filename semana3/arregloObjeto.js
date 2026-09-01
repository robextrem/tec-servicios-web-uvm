const mascotas = [
	{
		nombre: "Firulais",
		edad: 3
	},
	{
		nombre: "Nala",
		edad: 2
	},
	{
		nombre: "Firulais",
		edad: 3
	},
	{
		nombre: "Nala",
		edad: 4
	}
]

for(let i = 0; i < mascotas.length; i++){
	//const mascota = mascotas[i]
	console.log("Mi perro " + mascotas[i].nombre + " tiene " + mascotas[i].edad + " años")
}

for(let mascota of mascotas){
	console.log("Mi perro " + mascota.nombre + " tiene " + mascota.edad + " años")
}

for(let indice in mascotas){
	console.log("Mi perro " + mascotas[indice].nombre + " tiene " + mascotas[indice].edad + " años")
}

