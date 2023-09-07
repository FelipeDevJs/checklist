import Predio from '../assets/predio.jpg'
import LogoObra from '../assets/vitalle_pq.png.webp'

import './mainLogo.css'

function MainLogo(){
    return(
        <div className='mainlogo'>
            <div className="predio">
                <img src={Predio} alt="" />
            </div>
            <div className="obra">
                <img src={LogoObra} alt="" />
            </div>
        </div>
    )
}

export default MainLogo