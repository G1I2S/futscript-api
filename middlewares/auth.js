const jwt = require('jsonwebtoken')
const { secretKey } = require('../utils')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' })
    }

    try {
        const payload = jwt.verify(token, secretKey)
        req.user = payload
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' })
    }
}

module.exports = { verifyToken }
