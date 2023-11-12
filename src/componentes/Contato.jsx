import { useState } from 'react';
import './Contato.scss';


function Contato() {
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  

  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!validateEmail(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    if (textarea.trim() === '') {
      alert('Por favor, preencha o campo "Como podemos te ajudar?"');
      return;
    }

    
    alert('Formulário enviado com sucesso!');
    
    
    setEmail('');
    setTextarea('');
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'textarea') {
      setTextarea(value);
    }

    
    setIsSubmitDisabled(!(validateEmail(email) && textarea.trim() !== ''));
  }

  return (
    <>
      <main>
        <div className="container-contato">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <h1>Entre em contato:</h1>
                <label htmlFor="email">Digite Seu Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Como podemos te ajudar?</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  value={textarea}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className="form-submit-btn" type="submit" disabled={isSubmitDisabled}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contato;
