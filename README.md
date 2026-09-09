# FutScript

Gestión de equipos y jugadores para escuelas de fútbol: alta de equipos y planteles, consulta de plantillas por equipo, y acceso protegido por autenticación basada en tokens.

## Características

- Autenticación stateless con JWT
- Rutas de escritura protegidas mediante middleware de autorización
- Consultas relacionales (JOIN) para resolver jugadores junto a su posición
- Suite de tests de integración sobre la API completa

## Stack

- Node.js / Express
- PostgreSQL (`pg`)
- JWT (`jsonwebtoken`)
- Jest + Supertest

## Endpoints

| Método | Ruta | Auth | Descripción |
|---|---|---|---|
| POST | `/login` | - | Autentica y devuelve un token JWT |
| GET | `/equipos` | - | Lista todos los equipos |
| POST | `/equipos` | Token requerido | Crea un nuevo equipo |
| GET | `/equipos/:teamID/jugadores` | - | Lista los jugadores de un equipo junto a su posición |
| POST | `/equipos/:teamID/jugadores` | Token requerido | Registra un nuevo jugador en un equipo |

El token se envía en el header `Authorization` (sin prefijo `Bearer`).

## Instalación

```bash
npm install
npm start
```

La conexión a la base de datos se configura en [db/consultas.js](db/consultas.js).

## Tests

```bash
npm test
```
