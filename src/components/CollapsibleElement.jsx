import React, { useState } from 'react';
import { FaAngleDown, FaFileImage } from "react-icons/fa";

import './apto/apto.css'

function CollapsibleElement({ title }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="questoes">

            <div className={`${title} box`}>
                <div className="name">
                    <h3>{title.toUpperCase()}:</h3>
                    <FaAngleDown
                        className={`icon collapsible ${isCollapsed ? "active" : ""}`}
                        onClick={toggleCollapsible}
                    />
                </div>
                <hr />
                {isCollapsed && (
                    <div className="options" key={title}>
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
                                <input type="text" placeholder="O que falta ?" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CollapsibleElement;
