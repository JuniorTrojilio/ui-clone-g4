import styles from './Carrossel.module.scss'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useEffect, useRef } from 'react'


export const Carrossel = () => {
  const carrossel = useRef(null)

  useEffect(() => {
    carrossel.current.scrollLeft = 0
  })

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carrossel.current.scrollLeft -= 160
  }
  
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    carrossel.current.scrollLeft += 160
  }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.carrossel} ref={carrossel}>
          <div className="slider">
            <img src="/bancopan.png" alt="banco" />
          </div>
          <div className="slider">
            <img src="/mitsubish.png" alt="banco" />
          </div>
          <div className="slider">
            <img src="/reserva.png" alt="banco" />
          </div>
          <div className="slider">
            <img src="/ambev.png" alt="banco" />
          </div>
          <div className="slider">
            <img src="/cocobambu.png" alt="banco" />
          </div>
          <div className="slider">
            <img src="/viavarejo.png" alt="banco" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleLeftClick} className={styles.btnprev} ><MdChevronLeft/></button>
          <button onClick={handleRightClick} className={styles.btnnext} ><MdChevronRight/></button>
        </div>
      </div>
    </>
  )
}