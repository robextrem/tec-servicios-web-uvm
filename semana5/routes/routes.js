const { Router } = require('express')
const router = Router()
const controlAprobado = require('../middleware/controlAprobado')

router.get('/examen', function(req, res){
	res.status(200).json({
		calificacion: 10
	})
})

router.put('/calificacion', controlAprobado, function(req, res){
	const promedio = req.body.promedio
	res.status(200).json({
		resultado: "Aprobado con " + promedio 
	})
})

router.post('/saludo/:nombre', function(req, res){

	const nombre = req.params.nombre
    const edad = req.body.edad
	const lugar = req.body.ciudad

	if(!lugar){
		res.status(400).json({
			"error": "Falta el lugar"
		})
	} 

	res.status(200).json({
		"saludo": "Hola "+ nombre + " de "+ edad + " anios" + ", bienvenido a " + lugar
	})
})

// /perrito?raza=bulldog&edad=3
router.get("/perrito", function(req, res){

	const raza = req.query.raza
	const edad = req.query.edad

	res.status(200).json({
		caballito: "caballito",
		raza, // raza: raza
		edad // "edad": edad
	})
})

module.exports = router;