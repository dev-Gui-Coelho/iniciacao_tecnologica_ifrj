"use client";
import Image from "next/image";
import InputName from './componentes/iptTextName';
import { useState } from "react";
import IptRegimeTrab from "./componentes/iptRegimeTrab";
import IptObservacao from "./componentes/iptObservacoes";
import BtnEnviar from "./componentes/buttonEnviar";
import IptDiasTurnoAtualizado from "./componentes/iptDiasTunoAtualizado";
import { materiaPorTurmas } from "./componentes/materiasPorPeriodo";
import IptTurmasAtt from "./componentes/iptTurmasAtualizado";


export default function Home() {
  //VARIAVEIS GLOBAIS DOS COMPONENTES
  const [valueNome, setValueNome] = useState('')
  const [valueRegTrab, setValueRegTrab] = useState('')
  const [selecionados, setSelecionados] = useState<Record<string, boolean>>({})
  const [turmas_select, setLista]:any = useState<any[]>([])
  const [valueObs,setValueObs] = useState('')

  return (
    <div className="flex flex-col w-[60%]">
      <InputName value={valueNome} setValueNome={setValueNome}/>
      <IptRegimeTrab value={valueRegTrab} setValueRegTrab={setValueRegTrab}/>
      <IptDiasTurnoAtualizado selecionados={selecionados} setSelecionados={setSelecionados}/>
      <IptTurmasAtt turmas_select={turmas_select} setLista={setLista}/>
      <IptObservacao value={valueObs} setValueObs={setValueObs}/>
      <BtnEnviar valueNome={valueNome} valueRegTrab={valueRegTrab} valueMaterias={turmas_select} valueObs={valueObs} valueSelecionados={selecionados}/>
    </div>
      
  )
}
