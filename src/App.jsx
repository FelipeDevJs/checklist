import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bloco from './components/bloco';
import Apto101 from './components/apto/Apto101';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloco/:id' element={<Bloco />} />
        <Route path='/bloco/:id/apto/101' element={<Apto101 />} />
      </Routes>
    </div>
  );
}

export default App;
