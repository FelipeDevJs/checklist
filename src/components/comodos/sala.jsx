import { useState, useEffect } from "react"
import { FaAngleDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import './comodo.css'

function Sala(){

    const {blocoid, aptoid} = useParams()

    const url = 'https://chekclistback.onrender.com'

    const [itens, setItens] = useState([]);
    const [comentarios, setComentarios] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(()=>{
        async function fetchItens() {
            const response = await axios.get(`${url}/itens/sala`, {
                params: {
                    id_bloco: blocoid,
                    id_apto: aptoid,
                    comodo: 'sala'
                }
            });
            setItens(response.data);
            // console.log(response)
        }
        fetchItens();
    },[])

    //verificar o menu oculto
    const toggleCollapsible = (e) => {
        setIsCollapsed(!isCollapsed);
        // console.log(isCollapsed, e)
    }

    //atualizar o checkbox
    const handleCheckboxChange = async (id, marcado) => {
        await axios.put(`${url}/itens/sala/${id}`, {
        marcado: !marcado,
        });
        setIsChecked((prev)=>({ ...prev, [id]: !marcado}))
        // console.log(isChecked)
        const updatedItens = [...itens];
        const itemIndex = updatedItens.findIndex((item) => item._id === id);
        updatedItens[itemIndex].marcado = !marcado;
        setItens(updatedItens);
    };

    //atualizar comentario
    const handleSaveComment = async (id) => {
        try {
        const response = await axios.put(`${url}/itens/sala/${id}`, {
            marcado: itens.find((item) => item._id === id).marcado,
            comentario: comentarios[id] || "", // Certifique-se de que o campo seja nomeado "comentario"
        });
        
        console.log('Comentário salvo:', response.data);
        } catch (error) {
        console.error('Erro ao salvar o comentário:', error);
        }
    };

    return(
        <>
            <div className="comodo">
                <div className="comodotitle">
                    <h3>SALA</h3>
                    <FaAngleDown
                        className={`icon collapsible ${isCollapsed ? "active" : ""}`}
                        onClick={toggleCollapsible}
                    />
                </div>
                {/* menu oculto */}
                
                {isCollapsed && (
                    <> 
                        {/* map dos itens do sala */}
                        {itens.map((item)=>(
                            <div key={item._id} className="item">
                                <div className="item_nome">
                                    {item.nome}
                                </div>
                                <div className="item_input">
                                    <label className="container">
                                        Feito corretamente? Sim
                                        <input
                                            className="check"
                                            type="checkbox"
                                            checked={item.marcado}
                                            onChange={() => handleCheckboxChange(item._id, item.marcado)}
                                        />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className="naofeito">
                                    {!isChecked[item._id] && (
                                        <div className="naofeito_box">
                                            <input
                                                type="text"
                                                placeholder={`${item.comentario}`}
                                                required={true}
                                                value={comentarios[item._id]} // Use o último comentário aqui
                                                onChange={(e) => {
                                                    const updatedComentarios = { ...comentarios };
                                                    updatedComentarios[item._id] = e.target.value;
                                                    setComentarios(updatedComentarios);
                                                }}
                                            />
                                            <button
                                                onClick={() => handleSaveComment(item._id)}
                                            >
                                                Salvar Comentário
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </> 
                )}
            </div>            
        </>
    )
}


export default Sala