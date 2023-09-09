import React, { useState } from 'react';
import { FaAngleDown, FaFileImage } from "react-icons/fa";

function Sala({onUpdateSalaData}) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [inputData, setInputData] = useState('')

    const enviarDadosParaApto101 = () =>{
        const dadosSala = {
            Sala: inputData,
        }
        onUpdateSalaData(dadosSala)
    }

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="SALA box">
            <div className="name">
                <h3>SALA:</h3>
                <FaAngleDown
                    className={`icon collapsible ${isCollapsed ? "active" : ""}`}
                    onClick={toggleCollapsible}
                />
            </div>
            <hr />
            {isCollapsed && (
                <div className="options" key="sala">
                    <div className="optionsname">
                        <p>instalação de pia</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="feito" />
                        <label>Feito corretamente?</label>
                    </div>
                    <div className="erros">
                        <div className="img">
                            <input type="file" name="foto" id="foto" />
                            <label htmlFor="foto">
                                <FaFileImage />
                            </label>
                        </div>
                        <div className="text">
                            <input 
                                type="text" 
                                placeholder="O que falta ?" 
                                onChange={(e)=>setInputData(e.target.value)}
                            />
                        </div>
                        <button onClick={enviarDadosParaApto101}>Enviar para cima</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sala;
