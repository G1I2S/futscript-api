CREATE DATABASE futscript;
\c futscript;

CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

INSERT INTO equipos values
(DEFAULT, 'Real Madrid'),
(DEFAULT, 'Barcelona');

INSERT INTO jugadores (id_equipo, name, position) values
(1, 'Karim Benzema', 1),
(1, 'Luka Modrić', 2),
(2, 'Robert Lewandowski', 1);
