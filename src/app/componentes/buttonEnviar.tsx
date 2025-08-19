type btnEnviarProps = {
    valueNome:string
    valueObs:string
    valueRegTrab: string
    valueSelecionados : any
}
export default function BtnEnviar({valueNome, valueRegTrab ,valueObs, valueSelecionados}: btnEnviarProps){
    
    return(
        <>
            <button 
            type="submit" 
            className="w-[100px] border-1 cursor-pointer px-[4px] rounded-sm mt-3"
            onClick={()=>{
                //PEGA O VALOR DOS INPUTs (Nome, RegimeTrab, Observação)  E ARMAZENA
                let dados = [
                    {valueNome},
                    {valueRegTrab},
                    {valueSelecionados},
                    {valueObs}
                ]
                console.log(dados)
            }}
            
            >Enviar</button>
            
        </>
    )
}