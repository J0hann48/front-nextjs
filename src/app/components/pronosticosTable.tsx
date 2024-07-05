import React, {useMemo, useState, useEffect} from "react";
import {MaterialReactTable} from 'material-react-table';
import axios, { Axios } from "axios";

const PronosticosTable = () => {
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("http://localhost:3000/api/pronosticos")
        .then(response => {
            console.log('Data', response)
            setData(response.data['message']);
            setLoading(false);
        })
        .catch(err => {
            console.log('Error', err)
        })
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: 'usuario',
                header: 'Usuario',
                size: 150
            },
            {
                accessorKey: 'equipo_local',
                header: 'Equipo Local',
                size: 150
            },
            {
                accessorKey: 'goles_local',
                header: 'Goles local',
                size: 150
            },
            {
                accessorKey: 'equipo_visitante',
                header: 'Equipo Visitante',
                size: 150
            },
            {
                accessorKey: 'goles_visitante',
                header: 'Goles Visitante',
                size: 150
            },
            {
                accessorKey: 'fase',
                header: 'Fase',
                size: 50
            }
        ],
        [],
    );
    return (
        <>
        {!loading && (
            <MaterialReactTable columns={columns} data={data} />
        )}
        </>
    );
};

export default PronosticosTable;