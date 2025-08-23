type textObsProps= {
    value : any;
    setValueObs: any;
}

export default function IptObservacao({value, setValueObs}:(textObsProps)){
    return(
        <>
            <label>Observações:</label>
            {/* TEXT AREA PARA SER EDITAVEL O TAMANHO EXIBIDO */}
            <textarea
                className="border-1"
                value={value}
                rows={4}
                cols={40}
                
                onChange={(e)=>setValueObs(e.target.value)}
                style={{ resize: 'both', overflow: 'auto', width: '60px',minHeight: '70px', minWidth: '400px', maxHeight:'200px', maxWidth:'600px'}}>
                
            </textarea>
        </>
    )
}