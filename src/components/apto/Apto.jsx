import MainLogo from "../mainLogo"
import Sala from "../comodos/sala"
import Banheiro from "../comodos/banheiro2"

import './apto.css'

function Apto101(){
    return(
        <>
            
            <div className="comodos">
                <MainLogo />
                <Banheiro />
                <Sala />
            </div>
        </>
    )
}

export default Apto101