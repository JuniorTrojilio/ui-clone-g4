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
          <a>Gestão 4.0</a>
          <a>Growth</a>
          <a>Customer Experience</a>
          <a>G4 Sales</a>
          <a>In Company</a>
        </div>
        <div>
          <strong>Cursos Online</strong>
          <a>G4 Fundamentos</a>
          <a>G4 Startups</a>
          <a>G4 Growth Online</a>
          <a>G4 CX Online</a>
          <a>G4 lives</a>
          <a>G4 Digital Commerce</a>
          <a>G4 Aceleração de Vendas</a>
          <a>Formação G4</a>
        </div>
        <div>
          <strong>Institucional</strong>
          <a>Quem somos</a>
          <a>Vagas Abertas</a>
          <a>Nossos Podcasts</a>
          <a>Nossos Artigos</a>
          <a>Nosso Youtube</a>
          <a>Entre em contato</a>
        </div>
    </footer>
  )
}