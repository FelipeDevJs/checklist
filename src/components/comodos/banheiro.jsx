import React, { useState } from 'react';
import { FaAngleDown, FaFileImage } from "react-icons/fa";

import './banheiro.css'


function Banheiro({formData, onInputChange, onFileChange}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isChecked, setIsChecked] = useState(true)

    //array dos itens do banheiro
    const arryItensBanheiro = [
        'Cerâmica Parede.',
        'Cerâmica Piso.',
        // 'Rejunte Parede.',
        // 'Rejunte Piso.',
        // 'Pintura.',
        // 'Teto do Box.',
        // 'Esquadria de Alumínio.',
        // 'Silicone na Esquadria de Alumínio.',
        // 'Arremate de Cerâmica dos Ralos.',
        // 'Rejunte dos Acabamentos dos Registos e Chuveiro.',
        // 'Sifão do Lavatótio.',
        // 'Rabichos.',
        // 'Fixação do Vaso Sanitário, Lavatório e Metais.',
        // 'Porta, Alizar, Dobradiça e Fechadura.',
        // 'Soleira(Altura).',
        // 'Vazão de Água do Chuveiro e Torneira.',
        // 'Limpeza e Teste de Todos os Ralos.',
        // 'Caimento do Box.',
        // 'Testar Vazamento do Lavatório.'

    ]

    //vericar se o toggle esta aberto
    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    }
    //verificar o estado do checkbox
    // const handleCheckboxChange = () =>{
        // setIsChecked(!isChecked)
        // console.log(isChecked)
    // }
        
    const [checkedItems, setCheckedItems] = useState([])
        //verifica o checkbox
    const handleCheckboxChange = (index) =>{
        // console.log(index)
        const newCheckedItems = [...checkedItems];
        // console.log(newCheckedItems)
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);

        //passar o valor para o componente apto
        if(typeof onCheckboxChange === 'function'){
            onCheckboxChange(`checkBanhe${index}`, newCheckedItems[index]);
        }
    }



    return (
        <>
        
        <div className="banheiro box">
            <div className="name">
                <h3>BANHEIRO:</h3>
                <FaAngleDown
                    className={`icon collapsible ${isCollapsed ? "active" : ""}`}
                    onClick={toggleCollapsible}
                />
            </div>
            <hr />
            {isCollapsed && (
                <div className="options" key="banheiro">
                    {arryItensBanheiro.map((e, index)=>(
                        <div key={index} className="banheitens">
                            <div className="optionsname">
                                <p>{e}</p>
                            </div>
                            <div className="check">
                                <input 
                                    type="checkbox" 
                                    name={`checkBanhe${index}`}
                                    checked={()=>{
                                        formData.checkBanhe[index]
                                    }}
                                    onChange={()=>{
                                        handleCheckboxChange(index)
                                        onInputChange()
                                    }}
                                />
                                <label>Feito corretamente?</label>
                            </div>
                            {!isChecked && (
                                <div className="erros">
                                    <div className="text">
                                        <input 
                                            type="text" 
                                            placeholder="O que falta ?"
                                            name="faltaBanhe1.1"
                                            value={formData.faltaBanhe}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Banheiro;