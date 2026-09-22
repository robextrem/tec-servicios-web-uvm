function controlAprobado(req, res, next){

	const promedio = req.body.promedio

	if(!promedio){
		res.status(400).json({
			"error": "Falta el promedio"
		})
	}

	if(promedio >= 7 ){
		next() // Continuar
	}else{
		res.status(400).json({
			"error": "No aprobado, por burro"
		})
	}
	
}

module.exports = controlAprobado