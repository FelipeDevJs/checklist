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
                            <Link to={`/bloco/${id}/apto/101`}>101</Link>
                        </span>
                        {/* <span>
                            <Link to={`/bloco/${id}/apto/102`}>102</Link>
                        </span>
                        <span>
                            <Link to={`/bloco/${id}/apto/103`}>103</Link>
                        </span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloco02