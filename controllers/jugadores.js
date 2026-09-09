const { getPlayers, addPlayer } = require('../db/consultas')

const obtenerJugadores = async (req, res) => {
    const { teamID } = req.params

    try {
        const jugadores = await getPlayers(teamID)
        res.status(200).json(jugadores)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los jugadores' })
    }
}

const registrarJugador = async (req, res) => {
    const { teamID } = req.params
    const jugador = req.body

    if (!jugador.name || !jugador.position) {
        return res.status(400).json({ message: 'Nombre y posición son obligatorios' })
    }

    try {
        const nuevoJugador = await addPlayer({ jugador, teamID })
        res.status(201).json(nuevoJugador)
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el jugador' })
    }
}

module.exports = { obtenerJugadores, registrarJugador }
