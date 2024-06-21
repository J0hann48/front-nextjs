const { db } = require('@vercel/postgres');
const {
    users,
    equipos,
    partidos,
    pronosticos,
    puntosUsuarios,
    historialPronosticos,
} = require('../src/app/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {        
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id INT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        );
      `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                return client.sql`
          INSERT INTO users (id, name)
          VALUES (${user.id}, ${user.name});
        `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}
async function seedEquipos(client) {
    try {
        const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS equipos (
          id INT PRIMARY KEY,
          nombre VARCHAR(255) NOT NULL,
          grupo VARCHAR(50)
        );
      `);

        console.log(`Created "equipos" table`);

        const insertedEquipos = await Promise.all(
            equipos.map(async (equipo) => {
                return client.query(`
            INSERT INTO equipos (id, nombre, grupo)
            VALUES ($1, $2, $3);
          `, [equipo.id, equipo.nombre, equipo.grupo]);
            })
        );

        console.log(`Seeded ${insertedEquipos.length} equipos`);

        return {
            createTable,
            equipos: insertedEquipos,
        };
    } catch (error) {
        console.error('Error seeding equipos:', error);
        throw error;
    }
}

async function seedPartidos(client) {
    try {
        const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS partidos (
          id INT PRIMARY KEY,
          equipo_local_id INT NOT NULL,
          equipo_visitante_id INT NOT NULL,
          fecha TIMESTAMP NOT NULL,
          goles_local INT,
          goles_visitante INT,
          fase VARCHAR(50),
          FOREIGN KEY (equipo_local_id) REFERENCES equipos(id),
          FOREIGN KEY (equipo_visitante_id) REFERENCES equipos(id)
        );
      `);

        console.log(`Created "partidos" table`);

        const insertedPartidos = await Promise.all(
            partidos.map(async (partido) => {
                return client.query(`
            INSERT INTO partidos (id, equipo_local_id, equipo_visitante_id, fecha, goles_local, goles_visitante, fase)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            ON CONFLICT (id) DO NOTHING;
          `, [partido.id, partido.equipo_local_id, partido.equipo_visitante_id, partido.fecha, partido.goles_local, partido.goles_visitante, partido.fase]);
            })
        );

        console.log(`Seeded ${insertedPartidos.length} partidos`);

        return {
            createTable,
            partidos: insertedPartidos,
        };
    } catch (error) {
        console.error('Error seeding partidos:', error);
        throw error;
    }
}
async function seedPronosticos(client) {
    try {
        const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS pronosticos (
          id INT PRIMARY KEY,
          usuario_id INT NOT NULL,
          partido_id INT NOT NULL,
          goles_local INT,
          goles_visitante INT,
          fecha_pronostico TIMESTAMP NOT NULL,
          FOREIGN KEY (usuario_id) REFERENCES users(id),
          FOREIGN KEY (partido_id) REFERENCES partidos(id)
        );
      `);

        console.log(`Created "pronosticos" table`);

        const insertedPronosticos = await Promise.all(
            pronosticos.map(async (pronostico) => {
                return client.query(`
            INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (id) DO NOTHING;
          `, [pronostico.id, pronostico.usuario_id, pronostico.partido_id, pronostico.goles_local, pronostico.goles_visitante, pronostico.fecha_pronostico]);
            })
        );

        console.log(`Seeded ${insertedPronosticos.length} pronosticos`);

        return {
            createTable,
            pronosticos: insertedPronosticos,
        };
    } catch (error) {
        console.error('Error seeding pronosticos:', error);
        throw error;
    }
}

async function seedPuntosUsuarios(client) {
    try {
        const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS puntos_usuarios (
          id INT PRIMARY KEY,
          usuario_id INT NOT NULL,
          puntos_totales INT,
          pronosticos_acertados INT,
          FOREIGN KEY (usuario_id) REFERENCES users(id)
        );
      `);

        console.log(`Created "puntos_usuarios" table`);

        const insertedPuntosUsuarios = await Promise.all(
            puntosUsuarios.map(async (puntosUsuario) => {
                return client.query(`
            INSERT INTO puntos_usuarios (id, usuario_id, puntos_totales, pronosticos_acertados)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (id) DO NOTHING;
          `, [puntosUsuario.id, puntosUsuario.usuario_id, puntosUsuario.puntos_totales, puntosUsuario.pronosticos_acertados]);
            })
        );

        console.log(`Seeded ${insertedPuntosUsuarios.length} puntos_usuarios`);

        return {
            createTable,
            puntosUsuarios: insertedPuntosUsuarios,
        };
    } catch (error) {
        console.error('Error seeding puntos_usuarios:', error);
        throw error;
    }
}

async function seedHistorialPronosticos(client) {
    try {
        const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS historial_pronosticos (
          id INT PRIMARY KEY,
          puntos_usuarios_id INT NOT NULL,
          partido_id INT NOT NULL,
          goles_local_pronosticado INT,
          goles_visitante_pronosticado INT,
          goles_local_real INT,
          goles_visitante_real INT,
          puntos_obtenidos INT,
          fecha_pronostico TIMESTAMP NOT NULL,
          FOREIGN KEY (puntos_usuarios_id) REFERENCES puntos_usuarios(id),
          FOREIGN KEY (partido_id) REFERENCES partidos(id)
        );
      `);

        console.log(`Created "historial_pronosticos" table`);

        const insertedHistorialPronosticos = await Promise.all(
            historialPronosticos.map(async (historialPronostico) => {
                return client.query(`
            INSERT INTO historial_pronosticos (id, puntos_usuarios_id, partido_id, goles_local_pronosticado, goles_visitante_pronosticado, 
            goles_local_real, goles_visitante_real, puntos_obtenidos, fecha_pronostico)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            ON CONFLICT (id) DO NOTHING;
          `, [
                    historialPronostico.id, historialPronostico.puntos_usuarios_id, historialPronostico.partido_id,
                    historialPronostico.goles_local_pronosticado, historialPronostico.goles_visitante_pronosticado,
                    historialPronostico.goles_local_real, historialPronostico.goles_visitante_real,
                    historialPronostico.puntos_obtenidos, historialPronostico.fecha_pronostico
                ]);
            })
        );

        console.log(`Seeded ${insertedHistorialPronosticos.length} historial_pronosticos`);

        return {
            createTable,
            historialPronosticos: insertedHistorialPronosticos,
        };
    } catch (error) {
        console.error('Error seeding historial_pronosticos:', error);
        throw error;
    }
}

async function main() {

    const client = await db.connect();
    
    await seedHistorialPronosticos(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});