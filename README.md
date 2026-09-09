# FutScript

API REST hecha con Express y PostgreSQL para administrar escuelas de fútbol: equipos y jugadores. Incluye autenticación con JWT y tests de integración con Jest + Supertest.

## Stack

- Express
- PostgreSQL (`pg`)
- JWT (`jsonwebtoken`)
- Jest + Supertest

## Endpoints

| Método | Ruta | Auth | Descripción |
|---|---|---|---|
| POST | `/login` | - | Autentica al usuario admin y devuelve un JWT |
| GET | `/equipos` | - | Lista todos los equipos |
| POST | `/equipos` | Token requerido | Crea un nuevo equipo |
| GET | `/equipos/:teamID/jugadores` | - | Lista los jugadores de un equipo (INNER JOIN con posiciones) |
| POST | `/equipos/:teamID/jugadores` | Token requerido | Registra un nuevo jugador en un equipo |

El token se envía en el header `Authorization` (sin prefijo `Bearer`).

### Usuario admin

```json
{
  "username": "admin",
  "password": "1234"
}
```

## Base de datos

El archivo [script.sql](script.sql) crea la base de datos `futscript` y las tablas `equipos`, `posiciones` y `jugadores`, con datos de ejemplo.

Las credenciales de conexión están en [db/consultas.js](db/consultas.js) (por defecto `postgres`/`postgres` en `localhost`, pensado para desarrollo local).

## Uso

```bash
npm install
psql -U postgres -f script.sql
npm start
```

## Tests

```bash
npm test
```

Requiere que la base de datos esté disponible y accesible con las credenciales configuradas en `db/consultas.js`.
