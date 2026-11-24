const sumar = (req,res) => {
	const a = 10
	const b = 7
	res.json({r: a+b})
}

export {sumar}