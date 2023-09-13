import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bloco from './components/bloco';
import Apto from './components/apto/Apto';
import Login from './pages/login';
import Dash from './pages/dash';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloco/:id' element={<Bloco />} />
        <Route path='/bloco/:blocoid/apto/:aptoid' element={<Apto />} />
        <Route path='/admin' element={<Login/>} />
        <Route path='/dash' element={<Dash/>} />
      </Routes>
      <footer>
        <Link to='/admin'>
          <p>ADMIN</p>
        </Link>
      </footer>
    </div>
  );
}

export default App;
