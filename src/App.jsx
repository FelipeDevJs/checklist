import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bloco from './components/bloco';
import Apto from './components/apto/Apto';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloco/:id' element={<Bloco />} />
        <Route path='/bloco/:blocoid/apto/:aptoid' element={<Apto />} />
      </Routes>
    </div>
  );
}

export default App;
