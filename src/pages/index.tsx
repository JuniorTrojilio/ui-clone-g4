import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import styles from './styles.module.scss'


export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <section className={styles.git}>
        <p>Esta página é apenas objeto de estudo criada em <span>React</span> como UI Clone</p>
        <h3>Made with adrenaline by <a href="https://github.com/JuniorTrojilio">Junior Trojilio</a></h3>
      </section>
    </>
  )
}
