import MainLogo from './mainLogo'
import { useParams, Link } from 'react-router-dom'

function Bloco02(){
    const {id} = useParams()
    return(
        <>
            <MainLogo />
            <div className='main'>
                <div className='info'>
                    <p>Bloco {id}</p>
                </div>
                <div className='aptos'>
                    <div className="aptosnum">
                        <span>
                            <Link to=''>201</Link>
                        </span>
                        <span>
                            <Link to=''>202</Link>
                        </span>
                        <span>
                            <Link to=''>203</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloco02