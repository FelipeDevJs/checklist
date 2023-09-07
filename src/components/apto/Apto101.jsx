import { useState } from "react"
import MainLogo from "../mainLogo"
import Banheiro from "../comodos/banheiro"
import Sala from "../comodos/sala"

import './apto.css'

function Apto101(){
    
    const [banheiroData, setBanheiroData] = useState({})
    const [salaData, setSalaData] = useState({})

    //atualiza estados dos componentes
    const updateBanheiroData = (data) => {
        setBanheiroData(data)
    }

    const updateSalaData = (data)=>{
        setSalaData(data)
    }

    //enviar para o server
    const enviarDados = () =>{
        const dadosCombinados = {
            banheiro: banheiroData,
            sala: salaData,

        }

        console.log(toString(banheiroData), salaData)

        fetch('https://3000-felipedevjs-checklistba-fd2o8jqjmc5.ws-us104.gitpod.io/dados', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosCombinados)
        })
        .then(Response => Response.json())
        .then(data => {
            console.log(data) //resposta do server
        })
        .catch(error =>{
            console.error('Erro ao enviar dados:', error)
        })
        
    }

    return(
        <>
            <MainLogo />
            <Banheiro onUpdateData={updateBanheiroData} />
            <Sala onUpdateData={updateSalaData} />
            <button onClick={enviarDados}>Salvar</button>
        </>
    )
}

export default Apto101