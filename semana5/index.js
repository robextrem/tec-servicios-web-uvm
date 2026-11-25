import express from 'express'
const app = express()

import rutas from './routes/routes.js'
import middleware from './middleware/verificarToken.js'

app.use(express.json());
app.use(middleware) // Global
app.use(rutas)
app.listen(3004)