-- Pendiente demás marcadores Ricardo Torres
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) 
VALUES (3, 26, 2, 0, '2024-06-24 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) 
VALUES (3, 27, 2, 1, '2024-06-24 00:00:00');
INSERT INTO pronosticos (usuario_id, partido_id, goles_local, goles_visitante, fecha_pronostico) 
VALUES (3, 28, 2, 2, '2024-06-24 00:00:00');
insert into equipo_campeon_usuarios (equipo_id, usuario_id) values (1, 3);





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
    where pa.fase = 'Cuartos' order by pa.id ASC;

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
    p.partido_id = 25;

   
 create table equipo_campeon_usuarios(
 	id SERIAL primary key,
 	equipo_id int not null,
 	usuario_id int not null,
 	foreign key (equipo_id) references equipos(id),
 	foreign key (usuario_id) references users(id)
 );

create sequence equipo_campeon_sequence start with 1 increment by 1 no minvalue no maxvalue cache 1;
alter table equipo_campeon_usuarios alter column id set default nextval('equipo_campeon_sequence');
   