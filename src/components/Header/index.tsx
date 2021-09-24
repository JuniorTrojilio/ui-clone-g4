import styles from './Styles.module.scss'
import {RiMenu2Line} from 'react-icons/ri'
import { MdSearch } from 'react-icons/md'


export const Header = () => {
  return (
    <header className={styles.container}>
        <img src="/logog4.png" alt="" />
        <nav>
          <a href="/">Presencial</a>
          <a href="/">Online</a>
          <a href="/">Conteúdo</a>
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <a href="/">Trabalhe conosco</a>
        </nav>
        <div className={styles.calltoaction}>
          <button>Confira nossos programas digitais</button>
          <MdSearch className={styles.iconsearch}/>
          <RiMenu2Line className={styles.icon}/>
        </div>
    </header>
  )
}