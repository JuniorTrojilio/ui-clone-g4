import { Carrossel } from './Carrossel'
import styles from './Main.module.scss'
import { MdPlayCircleOutline } from 'react-icons/md'
import { useState, useRef, MouseEventHandler } from 'react'

export const Main = () => {
  const [isActive, setIsActive] = useState(true)
  const buttonOne = useRef(null)
  const buttonTwo = useRef(null)

  const handleActive = (event) => {
    if (event.currentTarget.id === 'buttonOne') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <main className={styles.container}>
      <section className={styles.principal}>
        <div>
          <h1>Gestão 4.0: Leve seu negócio para o próximo nível!</h1>
          <p>No Gestão 4.0 ajudamos fundadores, líderes e gestores de negócios a aplicarem as melhores práticas e ferramentas para alavancar os resultados de suas empresas.</p>
          <button>Quero conhecer os programas</button>
        </div>
        <img height="360px" className={styles.analiseImg} src="gestao.png" alt="gestao" />
      </section>
      <div className={styles.divLink}>
        <a>Quero participar do gestão 4.0</a>
      </div>
      <section className={styles.employes}>
        <h2>Conheça algumas empresas que confiam no gestão 4.0</h2>
      </section>
      <Carrossel />
      <section className={styles.about}>
        <div className={styles.imagem}>
          <img src="/mg.png" alt="turma gestão" />
        </div>
        <div>
          <h2>Imersão e Mentoria para líderes</h2>
          <p>As Imersões e Mentorias do Gestão 4.0 são programas de desenvolvimento
            para alta liderança, nos quais são abordados frameworks, técnicas e
            ferramentas de gestão, vendas, operações, customer experience e growth
            utilizados pelas empresas mais inovadoras e valiosas do mundo.<br /><br />
            A Imersão foi desenvolvida para que, em poucos dias, líderes em posições
            estratégicas se atualizem nestas técnicas e consigam promover mudanças
            significativas em seus negócios.</p>
        </div>
      </section>
      <section className={styles.programs}>
        <h2>Nossos Programas</h2>
        <div>
          <button id="buttonOne" ref={buttonOne} onClick={handleActive} className={isActive && styles.isActive}>Imersões Presenciais</button>
          <button id="buttonTwo" ref={buttonTwo} onClick={handleActive} className={!isActive && styles.isActive}>Cursos  Online</button>
        </div>
      </section>
      <section>
        {isActive ? (
          <div className={styles.cursesPresencial}>
            <div>
              <img src="HPImersao.png" alt="" />
              <strong>Gestão 4.0 - Imersão e Mentoria</strong>
              <p>Destinada a líderes em posição estratégica, essa Imersão e Mentoria aborda os conceitos mais inovadores de gestão utilizados em empresas como Amazon, Google, Microsoft e Facebook.</p>
              <button>Quero Me Inscrever</button>
              <a>+ Detalhes sobre a Imersão e Mentoria da G4</a>
            </div>
            <div>
              <img src="HPGrowth.png" alt="" />
              <strong>G4 Growth - Imersão e Mentoria</strong>
              <p>Programa pensado para ajudar você a aplicar os frameworks de crescimento e escala usados pelas maiores empresas do mundo no seu negócio de forma prática e independente do seu tamanho ou modelo.</p>
              <button>Quero Me Inscrever</button>
              <a>+ Detalhes sobre a Imersão e Mentoria da G4</a>
            </div>
            <div>
              <img src="HPCX.png" alt="" />
              <strong>G4 Customer Experience - Imersão e Mentoria</strong>
              <p>Um programa de Imersão e Mentoria desenhado para líderes que buscam transformar suas empresas, focando na melhor experiência de seus clientes e construção de uma base de fãs.</p>
              <button>Quero Me Inscrever</button>
              <a>+ Detalhes sobre a Imersão e Mentoria da G4</a>
            </div>
            <div>
              <img src="HPGSales.png" alt="" />
              <strong>G4 Sales - Imersão em Vendas</strong>
              <p>Aprenda como crescer seu negócio em um programa de Imersão em Vendas focado para líderes que querem ter mais previsibilidade dos resultados. Descubra os segredos por trás das estratégias e processos de vendas das empresas mais bem sucedidas do mercado.</p>
              <button>Quero Me Inscrever</button>
              <a>+ Detalhes sobre a Imersão e Mentoria da G4</a>
            </div>
            <div>
              <img src="HG4.png" alt="" />
              <strong>G4 In Company - Imersão na sua Empresa</strong>
              <p>Leve toda a experiência dos nossos mentores para sua equipe. Treinamentos customizados para todo o seu time através de uma Metodologia 4.0 de aprendizagem continuada contemplando live de lançamento do projeto, assessment, aplicação do conteúdo e mentorias Q&A direcionadas.</p>
              <button>Quero Me Inscrever</button>
              <a>+ Detalhes sobre a Imersão e Mentoria da G4</a>
            </div>
          </div>
        ) : (
          <div className={styles.cursesOnline}>
            <div>
              <img src="PGCGrowth.png" alt="" />
              <strong>G4 Growth Online</strong>
              <p>Aprenda como aplicar as estratégias de crescimento usadas por empresas como Facebook, Google, Amazon no seu negócio de forma 100% online.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="PGCFundamentos.png" alt="" />
              <strong>G4 Fundamentos</strong>
              <p>Aprenda os fundamentos por trás das habilidades essenciais do mundo dos negócios e decole em direção ao sucesso da sua carreira ou da sua empresa!</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="PGCCX.png" alt="" />
              <strong>G4 Customer Experience</strong>
              <p>Aprenda a transformar seus clientes em fãs quem está à frente dos negócios que são destaques em Customer Experience no Brasil de forma 100% online</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="g4acelcursosc.png" alt="" />
              <strong>Aceleração De Vendas</strong>
              <p>Aprenda a estruturar a área comercial do seu negócio para criar uma maquina de vendas previsível e escalável.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="PGCDigital-Commerce.png" alt="" />
              <strong>Digital Commerce</strong>
              <p>Aprenda o passo a passo para ter sucesso no processo de levar o seu negócio para o mundo do e-commerce e das vendas pela internet.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="PGCStartups.png" alt="" />
              <strong>Startups</strong>
              <p>Aprenda como ter e transformar boas ideias em negócios de verdade alguns dos maiores empreendedores do Brasil.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="Lideranca.png" alt="" />
              <strong>Fundamentos de Liderança</strong>
              <p>Aprenda os fundamentos por trás do sucesso de grandes líderes e dê o próximo passo na sua carreira como gestor.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="vendas.png" alt="" />
              <strong>Fundamentos de Vendas</strong>
              <p>Aprenda os fundamentos por trás do sucesso dos maiores vendedores do mundo e acelere os seus resultados.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="pgcfungrowth.png" alt="" />
              <strong>Fundamentos de Growth</strong>
              <p>Aprenda os fundamentos por trás das estratégias de crescimento das maiores empresas do mundo.</p>
              <button>Confira os Detalhes</button>
            </div>
            <div>
              <img src="G4Lives-PGC.png" alt="" />
              <strong>G4 Lives</strong>
              <p>Centenas de aulas sobre Gestão, Vendas, Growth e muito mais com alguns dos principais empreendedores do Brasil.</p>
              <button>Confira os Detalhes</button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}