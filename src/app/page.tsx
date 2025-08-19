"use client";
import Image from "next/image";
import InputName from './componentes/iptTextName';
import { useState } from "react";
import IptRegimeTrab from "./componentes/iptRegimeTrab";
import IptTurmas from "./componentes/iptTurmas";
import IptObservacao from "./componentes/iptObservacoes";
import BtnEnviar from "./componentes/buttonEnviar";
import IptDiasTurnoAtualizado from "./componentes/iptDiasTunoAtualizado";


export default function Home() {
  //VARIAVEIS GLOBAIS DOS COMPONENTES
  const [valueNome, setValueNome] = useState('')
  const [valueRegTrab, setValueRegTrab] = useState('')
  const [valueObs,setValueObs] = useState('')
  const [selecionados, setSelecionados] = useState<Record<string, boolean>>({})

  return (
    <div className="flex flex-col w-[60%]">
      <InputName value={valueNome} setValueNome={setValueNome}/>
      <IptRegimeTrab value={valueRegTrab} setValueRegTrab={setValueRegTrab}/>
      <IptDiasTurnoAtualizado selecionados={selecionados} setSelecionados={setSelecionados}/>
      <IptTurmas />
      <IptObservacao value={valueObs} setValueObs={setValueObs}/>
      <BtnEnviar valueNome={valueNome} valueRegTrab={valueRegTrab} valueObs={valueObs} valueSelecionados={selecionados}/>
    </div>
      
  )
}
