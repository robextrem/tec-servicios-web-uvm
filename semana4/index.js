const express = require('express')
const port = 3005

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
	const hola = {
		mensaje: 'Hola Mundo!'
	}
	response.send(hola)
})

app.get('/acerca', (request, response) => {
	response.send("Esta es la practica de la semana 4 para el backend")
})

app.get('/alumnos/:id', (request, response) => {
	const id = request.params.id
	//const { id } = request.params
	let alumno = {}
	if( id == 1){
		alumno = {
		id: 1,
		nombre: "Abraham",
		calificacion: 10
		}
	}else if(id == 2){
		alumno = {
			id: 2,
			nombre: "Bruno",
			calificacion: 9
		}
	}else if(id == 3){
		alumno = {
			id: 3,
			nombre: "Brandon",
			calificacion: 4
		}
	}else if(id == 4){
		alumno = {
			id: 4, 
			nombre: "Sanroman",
			calificacion: 0
		}
	}else{
		const error = {
			mensaje: "Alumno no encontrado"
		}
		response.send(error)
		return
	}

	response.send(alumno)
})

/** Ejercicio: Hacer el resto de operaciones numericas */
app.get('/suma/:num1/:num2', (request, response) => { 
	const num1 = parseInt(request.params.num1)
	const num2 = parseInt(request.params.num2)
	const suma = num1 + num2	
	response.send({ resultado: suma })
})

app.get('/multiplicacion', (request, response) => { 
	response.send("soy un get multiplicacion")
})

app.post('/multiplicacion', (request, response) => { 
	const num1 = parseInt(request.body.num1)
	const num2 = parseInt(request.body.num2)
	const multiplicacion = num1 * num2	
	response.send({resultado : multiplicacion})
})

app.delete('/resta', (request, response) => { 
	const num1 = parseInt(request.params.num1)
	const num2 = parseInt(request.params.num2)
	const resta = num1 - num2	
	response.send({ resultado: resta })
})


app.listen(port, () => {
	console.log(`Iniciando servidor web en el puerto ${port}`)
})