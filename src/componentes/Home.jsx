import  { useState } from 'react';
import "./Home.scss";
import Problema_imagem from "../imagens/oproblema.jpg";
import Solucao_imagem from "../imagens/solução.png";
import styled from 'styled-components';

function Home() {

  function BottomSection(props) {
    return (
      <div className="bottom">
        {props.children}
      </div>
    );
  }

  const SectionImage = styled.img`
    width: 350px; 
  `;

  function TopSection(props) {
    return (
      <div className="top">
        {props.children}
      </div>
    );
  }

  function Lista() {
    const [informacoesDoOnibus, setInformacoesDoOnibus] = useState('');

   
    const procura_onibus = () => {
      
      const numeroOnibus = document.getElementById('pesquisa').value;

      
      const infoDoOnibus = localStorage.getItem(numeroOnibus);

      
      setInformacoesDoOnibus(infoDoOnibus || 'Nenhuma informação disponível para este ônibus.');
    };

    return (
      <section>
        <div className="cabecalho-lista">

        </div>
        <div className="containerOnibus" >
          <main className="mainOnibus">
            <section id='lista'>
              <div className="lista">
                <details open id="detailsBus">
                  <summary id="summaryBus">Cheque aqui o número dos ônibus disponíveis e veja mais detalhes sobre eles</summary>
                  <ul id="ulBus">
                    <li id="liBus">N°: 309</li>
                    <li id="liBus">N°: 105</li>
                    <li id="liBus">N°: 56</li>
                    <li id="liBus">N°: 973</li>
                    <li id="liBus">N°: 256</li>
                    <li id="liBus">N°: 861</li>
                    <li id="liBus">N°: 465</li>
                    <li id="liBus">N°: 162</li>
                  </ul>
                </details>
              </div>
            </section>
            <section>
              <div className="inputs">
                <input type="text" placeholder="Digite aqui o número do seu ônibus" id="pesquisa" />
                <button id="botao" onClick={procura_onibus}>Pesquisar</button>
              </div>
            </section>

            <section>
              <div id="resultado">
                {informacoesDoOnibus}
              </div>
            </section>
          </main>
        </div>
      </section>
    );
  }

  return (
    <>
      <main className="main-index">
        <h3 className='titulo-principal'>Procure o ponto de ônibus mais perto de você!</h3>

        <div className="mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.48545458755!2d-46.6523865!3d-23.5640843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1694623396147!5m2!1spt-BR!2sbr" style={{ width: "100%", height: "600px" }} allowfullscreen="" loading="lazy" id="iframe"></iframe>
        </div>

        <section className="problema" id='sobre'>
          <TopSection>
            <h2>O Problema</h2>
          </TopSection>
          <BottomSection>
            <SectionImage src={Problema_imagem} alt="O Problema" />
            <div className="text">
              <p>Nossa empresa identificou como mais urgente o problema de acessibilidade dos deficientes nos transportes públicos, como falta de elevadores, rampas nas entradas dos transportes e condições inadequadas de acesso. Essa falta de acessibilidade tem impactos significativos nas vidas das pessoas com deficiência. </p>
            </div>
          </BottomSection>
        </section>

        <section className="solucao" id='solucao'>
          <TopSection>
            <h2>A Solução</h2>
          </TopSection>
          <BottomSection>
            <SectionImage src={Solucao_imagem} alt="A Solução" />
            <div className="text">
              <p>Para solucionar esses problemas nossa empresa decidiu criar um site capaz de identificar meios de locomoção acessíveis para pessoas com deficiência motora, o usuário por exemplo poderá colocar o número de seu ônibus em nosso site e nosso sistema falará para ele se é acessível ou não, caso não seja o sistema falará para ele qual transporte será adequado para o usuário. Além disso, nosso site também irá fornecer informações detalhadas sobre os recursos de acessibilidade de cada meio de transporte público, como a presença de elevadores, rampas, espaço para cadeiras de rodas e sinalização adequada.</p>
            </div>
          </BottomSection>
        </section>

        <Lista />
      </main>
    </>
  );
}

export default Home;
