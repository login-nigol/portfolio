// src/components/ui/Page.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion } from 'framer-motion'
import styles from './ui.module.css'

/* ===================== АНИМАЦИЯ ===================== */
/* --- Спокойное появление страницы: без «прыжков» --- */
const pageVariants = {
  hidden: { opacity: 0, y: '0.6em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

/* ===================== КОМПОНЕНТ: ОБЁРТКА СТРАНИЦЫ ===================== */
export default function Page({ children }) {
  return (
    <motion.main
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.main>
  )
}
