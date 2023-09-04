import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown, FaInfoCircle } from "react-icons/fa";
import ImgVitalle from "../assets/vitalle_pq.png.webp";
import "../pagens/apto.css";

function CollapsibleButton({ buttonText, hiddenText }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div>
      <div
        className={`collapsible ${isCollapsed ? "active" : ""}`}
        onClick={toggleCollapsible}
      >
        {buttonText}
        <FaAngleDown />
      </div>
      
      {isCollapsed && (
        <div className="content">
          <ul>
            {hiddenText.map((text, index) => (
              <li key={index}>
                <div className="listckeck">
                  <input type="checkbox" />
                </div>
                <div className="listtext">
                  <p>{text}</p>
                </div>
                <div
                    className="listinfo"
                    onMouseEnter={toggleTooltip}
                    onMouseLeave={toggleTooltip}
                >
                    <FaInfoCircle />
                    {showTooltip && (
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
