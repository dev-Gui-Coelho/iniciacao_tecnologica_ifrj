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
  const [turmas_select, setLista]: any = useState<any[]>([])
  const [valueObs, setValueObs] = useState('')

  return (
    <>
      <section id="header" className="
                  w-[100vw]
                  h-[15vh]
                  flex
                  justify-around">

        <a href="https://www.ifrj.edu.br/" target="_blank">
          <img src="/assets/ifrj-logo.png" alt="logo IFRJ"/>
        </a>
        <div className="
                flex
                flex-row
                items-center
                gap-[25%]">
                  
          <img src="/assets/instagram.png" alt="" className="w-[25px] h-[25px]"/>
          <img src="/assets/facebook.png" alt="" className="w-[25px] h-[25px]"/>
          <img src="/assets/linkedin.png" alt="" className="w-[25px] h-[25px]"/>
          <img src="/assets/youtube.png" alt="" className="w-[25px] h-[25px]"/>
        </div>
      </section>
      <div>
        <section className="
                  flex
                  flex-col
                  xl:w-[45vw]
                  sm:w-[75vw]
                  h-[75vh]
                  bg-[#428829]
                  rounded-[46px]
                  ml-[64px]
                  mt-[20px]
                  shadow-[2px_7px_15px_#777777]">


          <InputName value={valueNome} setValueNome={setValueNome} />
          <IptRegimeTrab value={valueRegTrab} setValueRegTrab={setValueRegTrab} />
          <IptDiasTurnoAtualizado selecionados={selecionados} setSelecionados={setSelecionados} />
          <IptTurmasAtt turmas_select={turmas_select} setLista={setLista} />
          <IptObservacao value={valueObs} setValueObs={setValueObs} />
          <BtnEnviar valueNome={valueNome} valueRegTrab={valueRegTrab} valueMaterias={turmas_select} valueObs={valueObs} valueSelecionados={selecionados} />
        </section>
      </div>

    </>
  )
}
