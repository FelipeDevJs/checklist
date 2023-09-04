import '../App.css'
import { Link} from 'react-router-dom'
import ImgBPWL from '../assets/bpwl-oficial.png.webp'
import ImgVITALLE from '../assets/vitalle_pq.png.webp'

function Home (){
    return(
      <div className='main-box'>
        <div className="logos">
          <section className='logobp'>
            <img src={ImgBPWL} alt="Logo BPWL" />
          </section>
          <section className='logoobra'>
            <img src={ImgVITALLE} alt="Logo Vitalle"/>
          </section>
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
    )
  }

export default Home