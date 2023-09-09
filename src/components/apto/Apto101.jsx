import { useState } from "react"
import MainLogo from "../mainLogo"
import Banheiro from "../comodos/banheiro"
import Sala from "../comodos/sala"

import axios from 'axios'

import './apto.css'

function Apto101(){
    
    const [banheiroData, setBanheiroData] = useState({ })
    const [salaData, setSalaData] = useState({})

    //funcao para atualizar os estados com os dados do componente
    const onUpdateBanheiroData = (data)=>{
        setBanheiroData(data)
        console.log(data)
    }


    const onUpdateSalaData = (data)=>{
        setSalaData(data)
        console.log(data)
    }

    //enviar para o server
    const enviarDados = () =>{
        const dadosCombinados = {
            banheiro: banheiroData,
            sala: salaData,

        }

        if(toString(banheiroData) === undefined){
            console.log('undefined')
        }else{
            axios.post('http://localhost:3000/dados', {
                data: dadosCombinados,
            })
            .then(function (response){
                const data = response.data
                const banhe = data.data.banheiro
                const sala = data.data.sala
                console.log(sala, banhe)
            })
            .catch(function(erro){
                console.log(erro)
            })

            // console.log(dadosCombinados)
        }


        // console.log(dadosCombinados)
        // console.log('console enviar')
        //post axios
        

        // fetch('http:/localhost:3000/dados', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dadosCombinados)
        // })
        // .then(Response => Response.json())
        // .then(data => {
        //     console.log(data) //resposta do server
        // })
        // .catch(error =>{
        //     console.error('Erro ao enviar dados:', error)
        // })
        
    }

    return(
        <>
            <MainLogo />
            <div className="comodos">
                <Sala onUpdateSalaData={onUpdateSalaData} />
                <Banheiro onUpdateBanheiroData={onUpdateBanheiroData} />
                <button onClick={enviarDados}>Salvar</button>
            </div>
        </>
    )
}

export default Apto101