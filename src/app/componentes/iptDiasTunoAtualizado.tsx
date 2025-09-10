import { useState, useMemo, useEffect } from "react";

type checkProps = {
    selecionados: any;
    setSelecionados : any;
}

export default function IptDiasTurnoAtualizado({selecionados, setSelecionados}:checkProps){
    const dias = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const turnos = [
        {label: "Manhã (07:30 às 12:00)", key: "Manha"},
        {label: "Tarde (13:00 às 18:30)", key: "Tarde"},
        {label: "Noite (18:00 às 22:10)", key: "Noite"},
    ];

    const handleCheckbox = (dia:string, turno:string, checked:boolean)=>{
        const chave = `${dia}|${turno}`;
        setSelecionados((prev:any) => ({
            ...prev,
            [chave]: checked,
        }));
    };
    const marcados = useMemo(
    () => Object.keys(selecionados).filter((k) => selecionados[k]),
    [selecionados]
    );

    useEffect(() => {
    console.log(marcados);
    }, [marcados]);

    return(
        <div>
            <h6>
                Todos os professoraes deverão assinalar <strong>4 opções de dias por turno</strong> em que leciona:
            </h6>
            <table>
            <thead>
                <tr>
                <th></th>
                    {turnos.map(turno => <th key={turno.key}>{turno.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {dias.map(dia => (
                <tr key={dia}>
                    <td>{dia}</td>
                    {turnos.map(turno => (
                        <td key={turno.key}>
                            <input
                            type="checkbox"
                            checked={!!selecionados[`${dia}|${turno.key}`]}
                            onChange={(e) => handleCheckbox(dia, turno.key, e.target.checked)}
                            />
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>

        </div>
);

}