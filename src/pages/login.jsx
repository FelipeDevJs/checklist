import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function Login() {
  const url = 'http://localhost:3001';
  const navigate = useNavigate(); // Use useNavigate to get navigation function

  // States to store input field values and login status
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [loginSucesso, setLoginSucesso] = useState(true);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const dados = {
      nome: nome,
      senha: senha,
    };

    try {
      const resposta = await axios.post(`${url}/login`, dados);
      console.log('Resposta do servidor:', resposta.data);

      if (resposta.status === 200) {
        navigate('/dash'); // Use navigate function to redirect to /dash
      }
    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
      setLoginSucesso(false);
    }
  };

  return (
    <>
      <div className="main">
        <form>
          <h4>Entrar no sistema</h4>
          <input
            type="text"
            name="nome"
            className="nome"
            placeholder="Nome"
            value={nome}
            onChange={handleNomeChange}
          />
          <input
            type="password"
            name="pwd"
            className="pass"
            placeholder="Senha"
            value={senha}
            onChange={handleSenhaChange}
          />
          <input
            type="submit"
            onClick={handleLogin}
            value="Entrar"
          />
        </form>
        {!loginSucesso && <p>Erro ao fazer login. Verifique suas credenciais.</p>}
      </div>
    </>
  );
}

export default Login;
