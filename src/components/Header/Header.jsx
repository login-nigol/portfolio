// src/components/Header/Header.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-css'
// import 'prismjs/themes/prism-tomorrow.css'

import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import avatar from '../../assets/images/avatar.png'
import { snippets } from './codeSnippets'
import IconShare from '../../assets/icons/IconShare'

/* ===================== ОПРЕДЕЛЯЕМ ЯЗЫК СНИППЕТА ===================== */
/* --- Смотрим на содержимое строки и возвращаем язык для Prism --- */
function detectLanguage(code) {
  if (code.includes('@') && code.includes('class') || code.includes('ResponseEntity') || code.includes('private ')) return 'java'
  if (code.includes('{') && code.includes(':') && !code.includes('=>')) return 'css'
  return 'jsx'
}

/* ===================== ПОДСВЕТКА ОДНОГО СНИППЕТА ===================== */
function highlight(code) {
  const lang = detectLanguage(code)
  return Prism.highlight(code, Prism.languages[lang] || Prism.languages.jsx, lang)
}

/* ===================== ГЕНЕРАЦИЯ СЛУЧАЙНЫХ ПОЗИЦИЙ ===================== */
/* --- Каждый сниппет получает случайную позицию и скорость --- */
function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id:       i,
    snippet:  snippets[i % snippets.length],
    left:     `${(i / count) * 100}%`,        /* --- равномерно по ширине --- */
    duration: 8 + Math.random() * 6,
    delay:    -(Math.random() * 14),           /* --- стартуем в разных точках цикла --- */
    opacity:  0.07 + Math.random() * 0.12,
    fontSize: `${0.45 + Math.random() * 0.35}em`,
  }))
}

/* ===================== АНИМАЦИЯ ХЕДЕРА ===================== */
const headerVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* ===================== АНИМАЦИЯ ВЫПАДАШКИ (мобила) ===================== */
const dropdownVariants = {
  hidden: { opacity: 0, y: '-1em', pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: 'easeOut' } }
}

/* ===================== НАВИГАЦИЯ ===================== */
const navItems = [
  { to: '/', label: 'Anschreiben' },
  { to: '/about', label: 'Über mich' },
  { to: '/education', label: 'Ausbildung' },
  { to: '/projects', label: 'Projekte' },
  { to: '/contact', label: 'Kontakt' },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Header() {

  /* --- Состояние бургер-меню --- */
  const [menuOpen, setMenuOpen] = useState(false)

  /* --- Генерируем частицы один раз --- */
  const [particles] = useState(() => generateParticles(50))

  /* --- Подсветка синтаксиса после рендера --- */
  useEffect(() => { Prism.highlightAll() }, [])

  /* --- Поделиться страницей --- */
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Vadim Antipov', url: window.location.href })
    } else {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link kopiert!')
    }
  }

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* ===================== ФОН: ПАДАЮЩИЙ КОД ===================== */}
      <div className={styles.codeBackground} aria-hidden="true">
        {particles.map(({ id, snippet, left, duration, delay, opacity, fontSize }) => (
          <motion.span
            key={id}
            className={styles.codeParticle}
            style={{ left, opacity, fontSize }}
            animate={{ y: ['-10%', '110%'] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            /* --- Prism подсвечивает через dangerouslySetInnerHTML --- */
            dangerouslySetInnerHTML={{ __html: highlight(snippet) }}
          />
        ))}
      </div>

      {/* ===================== КОНТЕНТ ХЕДЕРА ===================== */}
      <div className={styles.content}>

        {/* --- Аватар --- */}
        <div className={styles.avatar}>
          <img src={avatar} alt="Vadim Antipov — Full Stack Developer" />
        </div>

        {/* --- Имя и должность --- */}
        <div className={styles.info}>
          <h1 className={styles.name}>Vadim Antipov</h1>
          <p className={styles.role}>Full Stack Developer</p>
        </div>

        {/* --- Кнопки справа --- */}
        <div className={styles.actions}>

          {/* --- Поделиться --- */}
          <button
            className={styles.btnIcon}
            onClick={handleShare}
            aria-label="Seite teilen"
            title="Seite teilen"
          >
            <IconShare size="1.3em" color="currentColor" />
          </button>

          {/* --- Бургер (только мобила) --- */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            {/* --- 3 полоски анимируются в крестик через CSS --- */}
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>

        </div>
      </div>

      {/* ===================== ВЫПАДАШКА НАВИГАЦИИ (мобила) ===================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.dropdown}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  isActive ? `${styles.dropdownLink} ${styles.active}` : styles.dropdownLink
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}