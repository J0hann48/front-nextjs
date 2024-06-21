// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data


const users = [
    {
        id: 1,
        name: 'Marina Parra',
    },
    {
        id: 2,
        name: 'Marina Torres',
    },
    {
        id: 3,
        name: 'Ricardo Torres',
    },
    {
        id: 4,
        name: 'Oswaldo Torres',
    },
    {
        id: 5,
        name: 'Martha Torres',
    },
    {
        id: 6,
        name: 'Juan Carlos Torres',
    },
    {
        id: 7,
        name: 'Cristian Torres',
    },
    {
        id: 8,
        name: 'Sebastian Torres',
    },
    {
        id: 9,
        name: 'Alexander Arboleda',
    },
    {
        id: 10,
        name: 'Jennifer Angulo',
    },
    {
        id: 11,
        name: 'Lorena Angulo',
    },
    {
        id: 12,
        name: 'Sebastian Pardo',
    },
    {
        id: 13,
        name: 'Camila Arboleda',
    },
    {
        id: 14,
        name: 'Larissa Ochoa',
    },
    {
        id: 15,
        name: 'Alexandra de Arboleda',
    },
    {
        id: 16,
        name: 'Natalia Flor',
    },
];

// Datos de equipos
const equipos = [
    {
        id: 1,
        nombre: 'Argentina',
        grupo: 'Grupo A'
    },
    {
        id: 2,
        nombre: 'Canada',
        grupo: 'Grupo A'
    },
    {
        id: 3,
        nombre: 'Peru',
        grupo: 'Grupo A'
    },
    {
        id: 4,
        nombre: 'Chile',
        grupo: 'Grupo A'
    },
    {
        id: 5,
        nombre: 'Mexico',
        grupo: 'Grupo B'
    },
    {
        id: 6,
        nombre: 'Jamaica',
        grupo: 'Grupo B'
    },
    {
        id: 7,
        nombre: 'Ecuador',
        grupo: 'Grupo B'
    },
    {
        id: 8,
        nombre: 'Venezuela',
        grupo: 'Grupo B'
    },
    {
        id: 9,
        nombre: 'Estados Unidos',
        grupo: 'Grupo C'
    },
    {
        id: 10,
        nombre: 'Bolivia',
        grupo: 'Grupo C'
    },
    {
        id: 11,
        nombre: 'Uruguay',
        grupo: 'Grupo C'
    },
    {
        id: 12,
        nombre: 'Panama',
        grupo: 'Grupo C'
    },
    {
        id: 13,
        nombre: 'Brasil',
        grupo: 'Grupo D'
    },
    {
        id: 14,
        nombre: 'Costa Rica',
        grupo: 'Grupo D'
    },
    {
        id: 15,
        nombre: 'Colombia',
        grupo: 'Grupo D'
    },
    {
        id: 16,
        nombre: 'Paraguay',
        grupo: 'Grupo D'
    }
];

// Datos de partidos
const partidos = [
    {
        id: 1,
        equipo_local_id: 1, // Argentina
        equipo_visitante_id: 2, // Canada
        fecha: '2024-06-20T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 2,
        equipo_local_id: 3, // Peru
        equipo_visitante_id: 4, // Chile
        fecha: '2024-06-21T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 3,
        equipo_local_id: 4, // Chile
        equipo_visitante_id: 1, // Argentina
        fecha: '2024-06-25T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 4,
        equipo_local_id: 3, // Peru
        equipo_visitante_id: 2, // Canada
        fecha: '2024-06-25T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 5,
        equipo_local_id: 1, // Argentina
        equipo_visitante_id: 3, // Peru
        fecha: '2024-06-29T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 6,
        equipo_local_id: 2, // Canada
        equipo_visitante_id: 4, // Chile
        fecha: '2024-06-29T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 7,
        equipo_local_id: 5, // Mexico
        equipo_visitante_id: 6, // Jamaica
        fecha: '2024-06-22T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 8,
        equipo_local_id: 7, // Ecuador
        equipo_visitante_id: 8, // Venezuela
        fecha: '2024-06-22T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 9,
        equipo_local_id: 8, // Venezuela
        equipo_visitante_id: 5, // Mexico
        fecha: '2024-06-26T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 10,
        equipo_local_id: 7, // Ecuador
        equipo_visitante_id: 6, // Jamaica
        fecha: '2024-06-26T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 11,
        equipo_local_id: 5, // Mexico
        equipo_visitante_id: 7, // Ecuador
        fecha: '2024-06-30T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 12,
        equipo_local_id: 6, // Jamaica
        equipo_visitante_id: 8, // Venezuela
        fecha: '2024-06-30T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 13,
        equipo_local_id: 9, // Estados Unidos
        equipo_visitante_id: 10, // Bolivia
        fecha: '2024-06-23T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 14,
        equipo_local_id: 11, // Uruguay
        equipo_visitante_id: 12, // Panama
        fecha: '2024-06-23T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 15,
        equipo_local_id: 12, // Panama
        equipo_visitante_id: 9, // Estados Unidos
        fecha: '2024-06-27T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 16,
        equipo_local_id: 11, // Uruguay
        equipo_visitante_id: 10, // Bolivia
        fecha: '2024-06-27T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 17,
        equipo_local_id: 9, // Estados Unidos
        equipo_visitante_id: 11, // Uruguay
        fecha: '2024-07-01T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 18,
        equipo_local_id: 10, // Bolivia
        equipo_visitante_id: 12, // Panama
        fecha: '2024-07-01T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 19,
        equipo_local_id: 13, // Brasil
        equipo_visitante_id: 14, // Costa Rica
        fecha: '2024-06-24T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 20,
        equipo_local_id: 15, // Colombia
        equipo_visitante_id: 16, // Paraguay
        fecha: '2024-06-24T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 21,
        equipo_local_id: 16, // Paraguay
        equipo_visitante_id: 13, // Brasil
        fecha: '2024-06-28T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 22,
        equipo_local_id: 15, // Colombia
        equipo_visitante_id: 14, // Costa Rica
        fecha: '2024-06-28T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 23,
        equipo_local_id: 13, // Brasil
        equipo_visitante_id: 15, // Colombia
        fecha: '2024-07-02T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    },
    {
        id: 24,
        equipo_local_id: 14, // Costa Rica
        equipo_visitante_id: 16, // Paraguay
        fecha: '2024-07-02T00:00:00Z',
        goles_local: null,
        goles_visitante: null,
        fase: 'Grupos'
    }
];

// Datos de pronósticos
const pronosticos = [
    {
        id: 1,
        usuario_id: 5,
        partido_id: 1, // Argentina vs Canada
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-20T00:00:00Z'
    },
    {
        id: 2,
        usuario_id: 5,
        partido_id: 2, // Peru vs Chile
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-21T00:00:00Z'
    },
    {
        id: 3,
        usuario_id: 5,
        partido_id: 3, // Chile vs Argentina
        goles_local: 1,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-25T00:00:00Z'
    },
    {
        id: 4,
        usuario_id: 5,
        partido_id: 4, // Peru vs Canada
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-25T00:00:00Z'
    },
    {
        id: 5,
        usuario_id: 5,
        partido_id: 5, // Argentina vs Peru
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-29T00:00:00Z'
    },
    {
        id: 6,
        usuario_id: 5,
        partido_id: 6, // Canada vs Chile
        goles_local: 0,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-29T00:00:00Z'
    },
    {
        id: 7,
        usuario_id: 5,
        partido_id: 7, // Mexico vs Jamaica
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-22T00:00:00Z'
    },
    {
        id: 8,
        usuario_id: 5,
        partido_id: 8, // Ecuador vs Venezuela
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-22T00:00:00Z'
    },
    {
        id: 9,
        usuario_id: 5,
        partido_id: 9, // Venezuela vs Mexico
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-26T00:00:00Z'
    },
    {
        id: 10,
        usuario_id: 5,
        partido_id: 10, // Ecuador vs Jamaica
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-26T00:00:00Z'
    },
    {
        id: 11,
        usuario_id: 5,
        partido_id: 11, // Mexico vs Ecuador
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-30T00:00:00Z'
    },
    {
        id: 12,
        usuario_id: 5,
        partido_id: 12, // Jamaica vs Venezuela
        goles_local: 1,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-30T00:00:00Z'
    },
    {
        id: 13,
        usuario_id: 5,
        partido_id: 13, // Estados Unidos vs Bolivia
        goles_local: 1,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-23T00:00:00Z'
    },
    {
        id: 14,
        usuario_id: 5,
        partido_id: 14, // Uruguay vs Panama
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-23T00:00:00Z'
    },
    {
        id: 15,
        usuario_id: 5,
        partido_id: 15, // Panama vs Estados Unidos
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-27T00:00:00Z'
    },
    {
        id: 16,
        usuario_id: 5,
        partido_id: 16, // Uruguay vs Bolivia
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-27T00:00:00Z'
    },
    {
        id: 17,
        usuario_id: 5,
        partido_id: 17, // Estados Unidos vs Uruguay
        goles_local: 1,
        goles_visitante: 3,
        fecha_pronostico: '2024-07-01T00:00:00Z'
    },
    {
        id: 18,
        usuario_id: 5,
        partido_id: 18, // Bolivia vs Panama
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-07-01T00:00:00Z'
    },
    {
        id: 19,
        usuario_id: 5,
        partido_id: 19, // Brasil vs Costa Rica
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-24T00:00:00Z'
    },
    {
        id: 20,
        usuario_id: 5,
        partido_id: 20, // Colombia vs Paraguay
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-24T00:00:00Z'
    },
    {
        id: 21,
        usuario_id: 5,
        partido_id: 21, // Paraguay vs Brasil
        goles_local: 2,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-28T00:00:00Z'
    },
    {
        id: 22,
        usuario_id: 5,
        partido_id: 22, // Colombia vs Costa Rica
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-28T00:00:00Z'
    },
    {
        id: 23,
        usuario_id: 5,
        partido_id: 23, // Brasil vs Colombia
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-07-02T00:00:00Z'
    },
    {
        id: 24,
        usuario_id: 5,
        partido_id: 24, // Costa Rica vs Paraguay
        goles_local: 0,
        goles_visitante: 2,
        fecha_pronostico: '2024-07-02T00:00:00Z'
    },
    {
        id: 25,
        usuario_id: 1,
        partido_id: 1, // Argentina vs Canada
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-20T00:00:00Z'
    },
    {
        id: 26,
        usuario_id: 1,
        partido_id: 2, // Peru vs Chile
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-21T00:00:00Z'
    },
    {
        id: 27,
        usuario_id: 1,
        partido_id: 3, // Chile vs Argentina
        goles_local: 2,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-25T00:00:00Z'
    },
    {
        id: 28,
        usuario_id: 1,
        partido_id: 4, // Peru vs Canada
        goles_local: 2,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-25T00:00:00Z'
    },
    {
        id: 29,
        usuario_id: 1,
        partido_id: 5, // Argentina vs Peru
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-29T00:00:00Z'
    },
    {
        id: 30,
        usuario_id: 1,
        partido_id: 6, // Canada vs Chile
        goles_local: 0,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-29T00:00:00Z'
    },
    {
        id: 31,
        usuario_id: 1,
        partido_id: 7, // Mexico vs Jamaica
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-22T00:00:00Z'
    },
    {
        id: 32,
        usuario_id: 1,
        partido_id: 8, // Ecuador vs Venezuela
        goles_local: 1,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-22T00:00:00Z'
    },
    {
        id: 33,
        usuario_id: 1,
        partido_id: 9, // Venezuela vs Mexico
        goles_local: 1,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-26T00:00:00Z'
    },
    {
        id: 34,
        usuario_id: 1,
        partido_id: 10, // Ecuador vs Jamaica
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-26T00:00:00Z'
    },
    {
        id: 35,
        usuario_id: 1,
        partido_id: 11, // Mexico vs Ecuador
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-30T00:00:00Z'
    },
    {
        id: 36,
        usuario_id: 1,
        partido_id: 12, // Jamaica vs Venezuela
        goles_local: 1,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-30T00:00:00Z'
    },
    {
        id: 37,
        usuario_id: 1,
        partido_id: 13, // Estados Unidos vs Bolivia
        goles_local: 1,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-23T00:00:00Z'
    },
    {
        id: 38,
        usuario_id: 1,
        partido_id: 14, // Uruguay vs Panama
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-23T00:00:00Z'
    },
    {
        id: 39,
        usuario_id: 1,
        partido_id: 15, // Panama vs Estados Unidos
        goles_local: 0,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-27T00:00:00Z'
    },
    {
        id: 40,
        usuario_id: 1,
        partido_id: 16, // Uruguay vs Bolivia
        goles_local: 3,
        goles_visitante: 1,
        fecha_pronostico: '2024-06-27T00:00:00Z'
    },
    {
        id: 41,
        usuario_id: 1,
        partido_id: 17, // Estados Unidos vs Uruguay
        goles_local: 1,
        goles_visitante: 1,
        fecha_pronostico: '2024-07-01T00:00:00Z'
    },
    {
        id: 42,
        usuario_id: 1,
        partido_id: 18, // Bolivia vs Panama
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-07-01T00:00:00Z'
    },
    {
        id: 43,
        usuario_id: 1,
        partido_id: 19, // Brasil vs Costa Rica
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-24T00:00:00Z'
    },
    {
        id: 44,
        usuario_id: 1,
        partido_id: 20, // Colombia vs Paraguay
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-24T00:00:00Z'
    },
    {
        id: 45,
        usuario_id: 1,
        partido_id: 21, // Paraguay vs Brasil
        goles_local: 2,
        goles_visitante: 2,
        fecha_pronostico: '2024-06-28T00:00:00Z'
    },
    {
        id: 46,
        usuario_id: 1,
        partido_id: 22, // Colombia vs Costa Rica
        goles_local: 3,
        goles_visitante: 0,
        fecha_pronostico: '2024-06-28T00:00:00Z'
    },
    {
        id: 47,
        usuario_id: 1,
        partido_id: 23, // Brasil vs Colombia
        goles_local: 2,
        goles_visitante: 0,
        fecha_pronostico: '2024-07-02T00:00:00Z'
    },
    {
        id: 48,
        usuario_id: 1,
        partido_id: 24, // Costa Rica vs Paraguay
        goles_local: 0,
        goles_visitante: 2,
        fecha_pronostico: '2024-07-02T00:00:00Z'
    }
];

// Datos de puntos de usuarios
const puntosUsuarios = [
    {
        id: 1,
        usuario_id: 1,
        puntos_totales: 10,
        pronosticos_acertados: 1
    }    
];

// Datos de historial de pronósticos
const historialPronosticos = [
    {
        id: 1,
        puntos_usuarios_id: 1,
        partido_id: 1,
        goles_local_pronosticado: 2,
        goles_visitante_pronosticado: 1,
        goles_local_real: 3,
        goles_visitante_real: 1,
        puntos_obtenidos: 10,
        fecha_pronostico: '2023-06-18T12:00:00Z'
    }
];

module.exports = {
    users,
    equipos,
    partidos,
    pronosticos,
    puntosUsuarios,
    historialPronosticos,
};
