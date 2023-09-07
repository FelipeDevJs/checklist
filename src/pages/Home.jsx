import '../App.css'
import { Link} from 'react-router-dom'

import MainLogo from '../components/mainLogo'

function Home (){
    return(
      <>

        <div className='main-box'>
          <div className="logo">
            <MainLogo />
          </div>
          <section className='blocos'>
            <nav>
              <ul>
                <li><Link to="/bloco/01"><p>Bloco 01</p></Link></li>
                <li><Link to="/bloco/02"><p>Bloco 02</p></Link></li>
              </ul>
            </nav>
          </section>
        </div>
      </>
    )
  }

export default Home