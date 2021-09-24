import styles from './Footer.module.scss'
import {SiInstagram, SiYoutube, SiSpotify, SiTelegram} from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <img src="logocorona.png" alt="" />
          <p> O propósito do Gestão 4.0 é apoiar os gestores em suas jornadas, para que desenvolvam suas empresas e transformem a realidade econômica e social do país.</p>
          <div className={styles.social}>
            <SiInstagram />
            <SiYoutube />
            <SiSpotify />
            <SiTelegram />
          </div>
        </div>
        <div>
          <strong>Imersões Presenciais</strong>
          <a href="/">Gestão 4.0</a>
          <a href="/">Growth</a>
          <a href="/">Customer Experience</a>
          <a href="/">G4 Sales</a>
          <a href="/">In Company</a>
        </div>
        <div>
          <strong>Cursos Online</strong>
          <a href="/">G4 Fundamentos</a>
          <a href="/">G4 Startups</a>
          <a href="/">G4 Growth Online</a>
          <a href="/">G4 CX Online</a>
          <a href="/">G4 lives</a>
          <a href="/">G4 Digital Commerce</a>
          <a href="/">G4 Aceleração de Vendas</a>
          <a href="/">Formação G4</a>
        </div>
        <div>
          <strong>Institucional</strong>
          <a href="/">Quem somos</a>
          <a href="/">Vagas Abertas</a>
          <a href="/">Nossos Podcasts</a>
          <a href="/">Nossos Artigos</a>
          <a href="/">Nosso Youtube</a>
          <a href="/">Entre em contato</a>
        </div>
    </footer>
  )
}