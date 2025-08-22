"use client"
import { useEffect, useState } from "react"
import { materiaPorTurmas } from "./materiasPorPeriodo";

type propsListaMaterias={
    turmas_select : any,
    setLista: any
}

export default function IptTurmasAtt({turmas_select, setLista}: propsListaMaterias){
    const [turmas, setTurmas]:any = useState()
    // const [turmas_select, setLista]:any = useState<string[]>([])
    const [materiaSelecionada, setMateriaSelecionada] = useState<string[]>([])
    const [materias, setMaterias] = useState<string[]>([])
    let turmas_list = [
    { value: "0", label:'MAM', disabled: true },
    { value: "1", label:'MAM-111' },
    { value: "2", label:'MAM-121' },
    { value: "3", label:'MAM-131' },
    { value: "4", label:'MAM-141' },
    { value: "5", label:'MAM-151' },
    { value: "6", label:'MAM-161' },
    { value: "7", label:'INF', disabled: true },
    { value: "8", label:'INF-211' },
    { value: "9", label:'INF-221' },
    { value: "10", label:'INF-231' },
    { value: "11", label:'INF-241' },
    { value: "12", label:'INF-251' },
    { value: "13", label:'INF-261' },
    { value: "14", label:'TRC', disabled: true },
    { value: "15", label:'TRC-311' },
    { value: "16", label:'TRC-321' },
    { value: "17", label:'TRC-331' },
    { value: "18", label:'TRC-341' },
    { value: "19", label:'TRC-351' },
    { value: "20", label:'TRC-361' },
    { value: "21", label:'TRC-OPT' },
    { value: "22", label:'TGA', disabled: true },
    { value: "23", label:'TGA-311' },
    { value: "24", label:'TGA-321' },
    { value: "25", label:'TGA-331' },
    { value: "26", label:'TGA-341' },
    { value: "27", label:'TGA-351' },
    { value: "28", label:'TGA-OPT' },
]   
    const lista_materias = materiaPorTurmas
    const add_turmas = () => {
        if (turmas && materiaSelecionada.length> 0) {
        const novosItens = materiaSelecionada.map(m => `${turmas} - ${m}`).filter(item => !turmas_select.includes(item))
        setLista([...turmas_select, ...novosItens])
        setMateriaSelecionada([])
        setMaterias([]) 
        setTurmas("")
        }
    }

    useEffect(()=>{
        console.log(turmas_select)
    },[turmas_select])

    return(
        <>
            <label>Turmas - Após acordo com seus pares, especifique as diciplinas e turmas em que lecionará: 
            </label>
            <div>
                <select className="border-black border-1"
                        value={turmas}
                        onChange={(e)=>{
                            const turma = e.target.value
                            setTurmas(turma)
                            setMaterias(lista_materias[turma] || [])
                            setMateriaSelecionada([])
                            }}>
                            <option value="" hidden></option>
                        {turmas_list.map((t)=>{
                                    return(
                                        <option
                                            className="cursor-pointer"
                                            key={t.value}
                                            value={t.label}
                                            disabled={t.disabled || false}>
                                            {t.label}
                                        </option>
                                    )
                        })}
                </select>
                <button className="cursor-pointer border-1 px-2 rounded-sm ml-3"
                        onClick={add_turmas}>Adicionar</button>
                {materias.length > 0 && (
                <div className="mt-2">
                {materias.map((m) => (
                    <label key={m} className="block">
                    <input
                        type="checkbox"
                        value={m}
                        checked={materiaSelecionada.includes(m)}
                        onChange={(e) => {
                        if (e.target.checked) {
                            setMateriaSelecionada([...materiaSelecionada, m])
                        } else {
                            setMateriaSelecionada(materiaSelecionada.filter(mat => mat !== m))
                        }
                        }}
                    />
                    {m}
                    </label>
                ))}
                </div>
)}
            </div>
            <div>
                {/* ADICIONAR TURMAS SELECIONADAS NO MENU SUSPENSO NA TELA  */}
                <ul>
                        {turmas_select.map((l:string, index:number)=>(
                                <div key={index} className="flex flex-col w=[100%]">
                                    <li className="w-[90%] p-[5px] mr-[2px]">
                                        <span>{l}</span>
                                        <button className="ml-[5px] cursor-pointer border-1 px-1 rounded-sm"
                                        onClick={()=>{
                                            /*REMOVER TURMA SOLICITADA*/ 
                                            let show_turmas = turmas_select.filter((_:null,i:number)=>i != index)
                                            setLista(show_turmas)
                                                }}>Remover</button></li>
                                </div>
                        ))}
                </ul>
            </div>
        </>
    )
}