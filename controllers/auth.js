const jwt = require('jsonwebtoken')
const { secretKey } = require('../utils')

const ADMIN = { username: 'admin', password: '1234' }

const login = (req, res) => {
    const { username, password } = req.body

    if (username === ADMIN.username && password === ADMIN.password) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' })
        return res.status(200).json({ token })
    }

    return res.status(400).json({ message: 'Usuario o contraseña incorrectos' })
}

module.exports = { login }
