"use client";
import { useEffect, useState } from 'react';

type varNameProps = {
    value : string;
    setValueNome : any;
}

export default function InputName({value, setValueNome}:varNameProps){
    const [nome, setNome] = useState("");

    useEffect(()=>{
        console.log(nome)
    },[nome]);

    return (
        <>
            <label 
                htmlFor="iptName"
                className="
                    text-white
                    text-[18px]">Digite seu nome completo:</label>
            <input 
                type="text" 
                id="iptName" 
                value={value} 
                onChange={(e)=>setValueNome(e.target.value)} 
                className="border-white
                            border-b-1
                            outline-0
                            w-[50%]
                            text-white
                            mb-[3%]
                            mt-[1%]"/>
        </>
    )
}
