const express = require('express')
const app = express()

const rutas = require('./routes/routes')
const middleware = require('./middleware/verificarToken')

app.use(express.json());
app.use(middleware) // Global
app.use(rutas)
app.listen(3001)