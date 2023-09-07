import { useParams } from 'react-router-dom';

import Bloco01 from './bloco01';
import Bloco02 from './bloco02';

import './bloco.css'

function Bloco(){
    const { id } = useParams();

    if(id === '01'){
        return <Bloco01 />
    }else if(id === '02'){
        return <Bloco02 />
    }else{
        return(
            <div>
                <h1>ID invalido</h1>
            </div>
        )
    }
}

export default Bloco