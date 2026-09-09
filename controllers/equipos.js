const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await getTeams()
        res.status(200).json(equipos)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los equipos' })
    }
}

const agregarEquipo = async (req, res) => {
    const equipo = req.body

    if (!equipo.name) {
        return res.status(400).json({ message: 'El nombre del equipo es obligatorio' })
    }

    try {
        const nuevoEquipo = await addTeam(equipo)
        res.status(201).json(nuevoEquipo)
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el equipo' })
    }
}

module.exports = { obtenerEquipos, agregarEquipo }
