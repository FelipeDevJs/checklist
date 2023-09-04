import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pagens/Home';
import Bloco from './pagens/bloco';
import Teste from './pagens/teste';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloco/:id' element={<Bloco />} />
        <Route path='/bloco/:id/apto/:aptoId' element={<Teste />} />
      </Routes>
    </div>
  );
}

export default App;
