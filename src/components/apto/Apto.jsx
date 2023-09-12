import MainLogo from "../mainLogo"
import Sala from "../comodos/sala"
import Banheiro from "../comodos/banheiro2"

import './apto.css'

function Apto101(){
    return(
        <>
            <MainLogo />
            <div className="comodos">
                <Banheiro />
                <Sala />
            </div>
        </>
    )
}

export default Apto101