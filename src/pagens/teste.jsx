import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ImgVitalle from "../assets/vitalle_pq.png.webp";
import "../pagens/apto.css";

function CollapsibleButton({ buttonText, hiddenText }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
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
                <input type="checkbox" />
                <p>{text}</p>
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
                "Texto do item 1", 
                "Texto do item 2", 
                "Texto do item 3"
            ]}
          />
          <CollapsibleButton
            buttonText="Sala"
            hiddenText={[
                "Texto do item 1", 
                "Texto do item 2", 
                "Texto do item 3"
            ]}
          />
          <CollapsibleButton
            buttonText="Quarto"
            hiddenText={[
                "Texto do item 1", 
                "Texto do item 2", 
                "Texto do item 3"
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default AptoId;
