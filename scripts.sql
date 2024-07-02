select id from pronosticos order by id desc;

INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (357, 13, 21, 1, 2, '2024-06-25 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (358, 13, 22, 1, 0, '2024-06-25 00:00:00');

INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (359, 13, 5, 2, 0, '2024-06-25 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (360, 13, 6, 1, 1, '2024-06-25 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (361, 13, 11, 2, 2, '2024-06-25 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (362, 13, 12, 1, 2, '2024-06-25 00:00:00');

INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (11, 11, 2, 1, '2024-06-25 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (12, 11, 2, 1, '2024-06-25 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (11, 12, 0, 2, '2024-06-25 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (12, 12, 0, 1, '2024-06-25 00:00:00');

-- Pendiente

INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (11, 17, 1, 3, '2024-06-25 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (11, 18, 0, 1, '2024-06-25 00:00:00');




select * from pronosticos where id = 303;

SELECT p.usuario_id
FROM pronosticos p
LEFT JOIN puntos_usuarios pu ON p.usuario_id = pu.usuario_id
WHERE pu.usuario_id IS NULL ORDER BY p.usuario_id ASC;

--- Consultar tabla de posiciones
SELECT u.name, pu.puntos_totales, pu.pronosticos_acertados FROM public.puntos_usuarios pu
	JOIN users u ON pu.usuario_id = u.id
ORDER BY puntos_totales DESC;

select * from pronosticos where usuario_id = 8;


-- Consultar partidos
SELECT 
	pa.id, 
	e1.nombre AS equipo_local,
    pa.goles_local,
	e2.nombre AS equipo_visitante,
    pa.goles_visitante
FROM 
    partidos pa
JOIN 
    equipos e1 ON pa.equipo_local_id = e1.id
JOIN 
    equipos e2 ON pa.equipo_visitante_id = e2.id;


--- Consultar pronosticos por partido

SELECT 
    u.name AS usuario,
	e1.nombre AS equipo_local,
    p.goles_local,
	e2.nombre AS equipo_visitante,
    p.goles_visitante
FROM 
    pronosticos p
JOIN 
    users u ON p.usuario_id = u.id
JOIN 
    partidos pa ON p.partido_id = pa.id
JOIN 
    equipos e1 ON pa.equipo_local_id = e1.id
JOIN 
    equipos e2 ON pa.equipo_visitante_id = e2.id
WHERE 
    p.partido_id = 12;


   