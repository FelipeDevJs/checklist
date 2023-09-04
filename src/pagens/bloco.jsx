import ImgVITALLE from '../assets/vitalle_pq.png.webp'
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

import './bloco.css'

function Bloco(){
    const { id } = useParams();

    return (
        <div className='main'>
            <section className="logoobra">
                <img src={ImgVITALLE} alt="Logo Vitalle"/>
            </section>
            <section className='bloco'>
                <h1>Bloco {id} - APTOS</h1>
            </section>
            <section className="aptos">
                <nav>
                    <ul>
                        <li>
                            <Link to={`/bloco/${id}/apto/1`}>01</Link>
                        </li>
                        <li>
                            <Link to={`/bloco/${id}/apto/2`}>02</Link>
                        </li>
                        <li>
                            <Link to={`/bloco/${id}/apto/3`}>03</Link>
                        </li>
                        <li>
                            <Link to={`/bloco/${id}/apto/4`}>04</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Bloco