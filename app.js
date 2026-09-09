const express = require('express')
const app = express()

app.use(express.json())

const { login } = require('./controllers/auth')
const { obtenerJugadores, registrarJugador } = require('./controllers/jugadores')
const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos')
const { verifyToken } = require('./middlewares/auth')

app.post('/login', login)

app.get('/equipos', obtenerEquipos)
app.post('/equipos', verifyToken, agregarEquipo)

app.get('/equipos/:teamID/jugadores', obtenerJugadores)
app.post('/equipos/:teamID/jugadores', verifyToken, registrarJugador)

module.exports = app
