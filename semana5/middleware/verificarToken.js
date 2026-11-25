function verificarToken(req, res, next){
	const token = req.headers["x-access-token"]
	if(!token){
		res.status(400).json({
			"error": "Falta el token"
		})
	}
	if(token == "12345"){
		next() // Continuar
	}else{
		res.status(400).json({
			"error": "Token no valido"
		})
	}
}

export default verificarToken