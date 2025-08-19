"use client"
import { useEffect, useState } from "react"

type regTrabProps = {
    value: string
    setValueRegTrab: any
}

export default function IptRegimeTrab({value, setValueRegTrab}:regTrabProps){
    const [carga_h, setCarga_h] = useState("")

    useEffect(()=>{
        console.log(carga_h)
    },[carga_h])

    return(
        <>
            <h5>Assinale seu regime de trabalho: </h5>
            <div>
                <label 
                    htmlFor="ipt_regime_hora">20h: </label>
                <input 
                    id="ipt_regime_hora" 
                    type="radio" 
                    name="carga_horaria"
                    value="20h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
            </div>
            <div>
                <label 
                    htmlFor="ipt_regime_hora_2">40h: </label>
                <input 
                    id="ipt_regime_hora_2" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
                    
            </div>
            <div>
                <label 
                    htmlFor="ipt_regime_hora_3">40h DE: </label>
                <input 
                    id="ipt_regime_hora_3" 
                    type="radio" 
                    name="carga_horaria"
                    value="40h DE"
                    onChange={(e)=>setValueRegTrab(e.target.value)}/>
                    
            </div>
        </>
    )
}