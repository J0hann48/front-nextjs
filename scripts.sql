select count(*) from pronosticos;

INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (315, 16, 7, 2, 1, '2024-06-23 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (316, 16, 8, 1, 2, '2024-06-23 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (317, 16, 13, 2, 0, '2024-06-23 00:00:00');
INSERT INTO pronosticos (id, usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) VALUES (318, 16, 14, 1, 0, '2024-06-23 00:00:00');


select * from pronosticos where id = 303;

SELECT p.usuario_id
FROM pronosticos p
LEFT JOIN puntos_usuarios pu ON p.usuario_id = pu.usuario_id
WHERE pu.usuario_id IS NULL ORDER BY p.usuario_id ASC;

--- Consultar tabla de posiciones
SELECT u.name, pu.puntos_totales, pu.pronosticos_acertados FROM public.puntos_usuarios pu
	JOIN users u ON pu.usuario_id = u.id
ORDER BY puntos_totales DESC;

select * from pronosticos where usuario_id = 6;


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
    p.partido_id = 20;

   