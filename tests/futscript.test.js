const request = require('supertest')
const app = require('../app')

describe('FutScript API', () => {
    let token

    beforeAll(async () => {
        const loginResponse = await request(app)
            .post('/login')
            .send({ username: 'admin', password: '1234' })

        token = loginResponse.body.token
    })

    test('GET /equipos responde con un array y status 200', async () => {
        const response = await request(app).get('/equipos')

        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })

    test('POST /login con credenciales correctas responde con un objeto', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'admin', password: '1234' })

        expect(typeof response.body).toBe('object')
        expect(response.body.token).toBeDefined()
    })

    test('POST /login con credenciales incorrectas responde con status 400', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'admin', password: 'incorrecta' })

        expect(response.status).toBe(400)
    })

    test('POST /equipos/:teamID/jugadores con token válido responde con status 201', async () => {
        const equipoResponse = await request(app)
            .post('/equipos')
            .set('Authorization', token)
            .send({ name: 'Equipo de prueba' })

        const teamID = equipoResponse.body.id

        const response = await request(app)
            .post(`/equipos/${teamID}/jugadores`)
            .set('Authorization', token)
            .send({ name: 'Jugador de prueba', position: 1 })

        expect(response.status).toBe(201)
    })
})
