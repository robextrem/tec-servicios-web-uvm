const getSaludo = (req, res) => {
  res.json({ mensaje: 'Hola desde el controlador 👋' });
};

const getDespedida = (req, res) => {
	const nombre =req.body.nombre

	res.json({
		response: `Adios ${nombre}`
	})
}

export {getSaludo, getDespedida};