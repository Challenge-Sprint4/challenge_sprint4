import { } from 'react'
import "./Sobre.scss"
import Somos_imagem from "../imagens/quemsomos.png"
import Problema_imagem from "../imagens/oproblema.jpg"
import Missao_imagem from "../imagens/icone-missao.png"
import Solucao_imagem from "../imagens/solução.png"
import styled from 'styled-components'


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
  


function Sobre() {
  
  return (
    <>
      <main className="main-sobre">
        <section className="sobre">
            <TopSection>
                <h2>Quem Somos</h2>
            </TopSection>
            <BottomSection>
                <SectionImage src={Somos_imagem} alt="Quem Somos"/>
                <div className="text">
                    <p>Nós somos uma empresa dedicada e apaixonada por promover a inclusão e a mobilidade para pessoas com deficiência física. Nosso projeto nasceu da crença fundamental de que todos os cidadãos têm o direito não apenas de se locomover pela cidade, mas também de fazê-lo de maneira segura, independente e digna.</p>
                </div>
            </BottomSection>
        </section>
        

        <section className="problema">
            <TopSection>
                <h2>O Problema</h2>
            </TopSection>
            <BottomSection>
                <SectionImage src={Problema_imagem} alt="O Problema"/>
                <div className="text">
                    <p>Nossa empresa identificou como mais urgente o problema de acessibilidade dos deficientes nos transportes públicos, como falta de elevadores, rampas nas entradas dos transportes e condições inadequadas de acesso. Essa falta de acessibilidade tem impactos significativos nas vidas das pessoas com deficiência. </p>
                </div>
            </BottomSection>
        </section>
        
        <section className="missão">
            <TopSection>
                <h2>Nossa Missão</h2>
            </TopSection>
            <BottomSection>
                <SectionImage src={Missao_imagem} alt="Nossa Missão"/>
                <div className="text">
                    <p>Nossa missão é clara e impactante: Capacitar pessoas com deficiência física a alcançar seus destinos com facilidade, dignidade e igualdade. Através do acesso a ônibus adaptados e de uma rede de apoio sólida, estamos comprometidos em transformar a realidade da mobilidade para todos.</p>
                </div>
            </BottomSection>
        </section>
        
        <section className="solucao">
            <TopSection>
                <h2>A Solução</h2>
            </TopSection>
            <BottomSection>
                <SectionImage src={Solucao_imagem} alt="A Solução"/>
                <div className="text">
                    <p>Para solucionar esses problemas nossa empresa decidiu criar um site capaz de identificar meios de locomoção acessíveis para pessoas com deficiência motora, o usuário por exemplo poderá colocar o número de seu ônibus em nosso site e nosso sistema falará para ele se é acessível ou não, caso não seja o sistema falará para ele qual transporte será adequado para o usuário. Além disso, nosso site também irá fornecer informações detalhadas sobre os recursos de acessibilidade de cada meio de transporte público, como a presença de elevadores, rampas, espaço para cadeiras de rodas e sinalização adequada.</p>
                </div>
            </BottomSection>
        </section>
    </main>
    </>
  )
}

export default Sobre
