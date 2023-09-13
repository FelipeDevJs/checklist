import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dash() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false); // Inicialmente, definido como falso

  useEffect(() => {
    // Verifique a autorização do usuário aqui usando o token JWT armazenado
    const token = localStorage.getItem('token'); // Certifique-se de que o token tenha sido armazenado após o login

    if (token) {
      // Se o token estiver presente, o usuário está autorizado
      // Você também pode fazer uma verificação no servidor para garantir que o token seja válido
      setAuthorized(true);
    } else {
      // Se o token não estiver presente, o usuário não está autorizado
      setAuthorized(false);
      navigate('/admin'); // Redirecione para /admin
    }
  }, [navigate]);

  if (!authorized) {
    return null; // Evite renderizar qualquer conteúdo se o usuário não estiver autorizado
  }

  return (
    <>
      <h1>Dash</h1>
      {/* Conteúdo da página /dash */}
    </>
  );
}

export default Dash;
