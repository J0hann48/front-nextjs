SELECT p.usuario_id
FROM pronosticos p
LEFT JOIN puntos_usuarios pu ON p.usuario_id = pu.usuario_id
WHERE pu.usuario_id IS NULL ORDER BY p.usuario_id ASC;

--- Consultar tabla de posiciones
SELECT u.name, pu.puntos_totales, pu.pronosticos_acertados FROM public.puntos_usuarios pu
	JOIN users u ON pu.usuario_id = u.id
ORDER BY puntos_totales DESC;

select * from pronosticos where usuario_id = 9;


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
    equipos e2 ON pa.equipo_visitante_id = e2.id
    where pa.fase = 'Semifinal' order by pa.id ASC;

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
    p.partido_id = 30;
   