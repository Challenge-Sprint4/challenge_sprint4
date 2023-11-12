import  { useState, useEffect } from 'react';
import $ from 'jquery';
import './Login.css';
import Onibus_imagem from '../imagens/onibus.jpg';
import Ponto_imagem from '../imagens/ponto.jpg';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  const [cadastroNome, setCadastroNome] = useState('');
  const [cadastroEmail, setCadastroEmail] = useState('');
  const [cadastroSenha, setCadastroSenha] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');



  const handleCepChange = (event) => {
    const novoCep = event.target.value.replace(/\D/g, '');
    setCep(novoCep);
  };

  const validateLogin = (e) => {
    e.preventDefault();
    
  };

  const validateCadastro = (e) => {
    e.preventDefault();
    
  };

  return (
    <main className="main-login">
      <section className="section-login">
        <div className="container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img id="imagem1" src={Ponto_imagem} alt="Imagem do ponto" />
            </div>
            <div className="back">
              <img id="imagem2" src={Onibus_imagem} alt="Imagem Cadastro" />
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form onSubmit={validateLogin}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text" 
                        placeholder="Digite seu email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={loginSenha}
                        onChange={(e) => setLoginSenha(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text">
                      <a href="/senha-esquecida">Esqueceu a senha?</a>
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Enviar" />
                    </div>
                    <div className="text sign-up-text">
                      Não tem uma conta?{' '}
                      <label htmlFor="flip">Inscreva-se agora</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Inscrever-se</div>
                <form onSubmit={validateCadastro}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={cadastroNome}
                        onChange={(e) => setCadastroNome(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Digite seu email"
                        value={cadastroEmail}
                        onChange={(e) => setCadastroEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-map-marker-alt"></i>
                      <input
                        type="text"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={handleCepChange}
                        maxLength="8"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-road"></i>
                      <input
                        type="text"
                        placeholder="Rua"
                        value={rua}
                        readOnly
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-map-marker-alt"></i>
                      <input
                        type="text"
                        placeholder="Bairro"
                        value={bairro}
                        readOnly
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={cadastroSenha}
                        onChange={(e) => setCadastroSenha(e.target.value)}
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Enviar" />
                    </div>
                    <div className="text sign-up-text">
                      Já tem uma conta?{' '}
                      <label htmlFor="flip">Conecte-se agora</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
