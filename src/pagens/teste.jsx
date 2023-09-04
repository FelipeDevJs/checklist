import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown, FaInfoCircle } from "react-icons/fa";
import ImgVitalle from "../assets/vitalle_pq.png.webp";
import "../pagens/apto.css";

function CollapsibleButton({ buttonText, hiddenText }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [campoAberto, setCampoAberto] = useState(false);
  const [checkboxSim, setCheckboxSim] = useState(true);
  const [checkboxNao, setCheckboxNao] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleClick = () => {
    setCampoAberto(!campoAberto);
  };

  const handleClickSim = () =>{
    setCheckboxSim(!checkboxSim)
    setCheckboxNao(!checkboxNao)
  }

  const handleClickNao = () => {
    setCheckboxNao(!checkboxNao)
    setCheckboxSim(!checkboxSim)
  }

  const onMouseEnter = (index) => {
    setActiveItemIndex(index)
    // setShowTooltip(false)
  }

  return (
    <div>
      <div
        className={`collapsible ${isCollapsed ? "active" : ""}`}
        onClick={toggleCollapsible}
        // onMouseEnter={()=>onMouseEnter(activeItemIndex)}
        // onMouseLeave={()=>onMouseEnter(activeItemIndex)}
      >
        {buttonText}
        <FaAngleDown />
      </div>
      
      {isCollapsed && (
        <div className="content">
          <ul>
            {hiddenText.map((text, index) => (
              <li key={index}>
                <div className="listtext">
                  <p>{text}</p>
                </div>
                <div className="listckeck">
                  <p>Está Okay?</p>
                  <div>
                    <p>Sim</p>
                    <input 
                      type="checkbox" 
                      name="sim" 
                      checked={checkboxSim}
                      onChange={handleClickSim}
                    />
                    <p>Não</p>
                    <input 
                      type="checkbox" 
                      name="nao" 
                      checked={checkboxNao}
                      onChange={handleClickNao}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="naotext">
                    {campoAberto && (
                      <input
                        type="text"
                        placeholder="Digite aqui"
                        style={{
                          width:"200px",
                          height:"10px 0"
                        }}
                      />
                    )}
                  </div>
                </div>
                <div
                    className="listinfo"
                    onMouseEnter={()=>onMouseEnter(index)}
                    onMouseLeave={()=>onMouseEnter(index)}
                >
                    <FaInfoCircle />
                    {activeItemIndex === index && (
                        <div className="tooltip">
                            Texto de aviso
                        </div>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AptoId() {
  const { id, aptoId } = useParams();

  return (
    <div>
      <section className="logoobra">
        <img src={ImgVitalle} alt="Logo Vitalle" />
      </section>
      <section className="local">
        <h1>Bloco {id} - apto {aptoId}</h1>
      </section>
      <section className="aptocheck">
        <div className="aptobox">
          <CollapsibleButton
            buttonText="Banheiro"
            hiddenText={[
              "Vaso",
              "Pia",
              "Torneira"
            ]}
          />
          <CollapsibleButton
            buttonText="Sala"
            hiddenText={[
              "Paredes",
              "Rodapé",
              "Piso"
            ]}
          />
          <CollapsibleButton
            buttonText="Quarto"
            hiddenText={[
              "Paredes",
              "Rodapé",
              "Piso"
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default AptoId;