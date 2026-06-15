// src/components/Header/Header.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion } from 'framer-motion'
import styles from './Header.module.css'
import avatar from '../../assets/images/avatar.png'

/* ===================== АНИМАЦИЯ ===================== */
/* Появление шапки сверху при загрузке страницы */
const headerVariants = {
  hidden:  { y: '-100%', opacity: 0 },
  visible: { y: 0,       opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* ===================== КОМПОНЕНТ ===================== */
export default function Header() {
  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- Аватар --- */}
      <div className={styles.avatar}>
        <img src={avatar} alt="Vadim Antipov" />
      </div>

      {/* --- Имя и должность --- */}
      <div className={styles.info}>
        <h1 className={styles.name}>Vadim Antipov</h1>
        <p className={styles.role}>Full Stack Developer</p>
      </div>

      {/* --- Кнопки: GitHub, LinkedIn, CV --- */}
      <div className={styles.actions}>
        <a href="https://github.com/login-nigol" target="_blank" rel="noreferrer" className={styles.btn}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.btn}>
          LinkedIn
        </a>
        <a href="/cv.pdf" download className={styles.btnAccent}>
          CV ↓
        </a>
      </div>

    </motion.header>
  )
}