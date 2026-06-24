// src/components/Header/Header.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import CodeCanvas from '../shared/CodeCanvas'

import avatar from '../../assets/images/avatar.png'
import IconShare from '../../assets/icons/IconShare'
import IconPrint from '../../assets/icons/IconPrint'
import IconMenuOpen from '../../assets/icons/IconMenuOpen'
import IconMenuClose from '../../assets/icons/IconMenuClose'

/* ===================== АНИМАЦИЯ ХЕДЕРА ===================== */
const headerVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* ===================== АНИМАЦИЯ ВЫПАДАШКИ ===================== */
const dropdownVariants = {
  hidden: { opacity: 0, y: '-1em', pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: 'easeOut' } }
}

/* ===================== НАВИГАЦИЯ ===================== */
const navItems = [
  // { to: '/', label: 'Anschreiben' },
  { to: '/about', label: 'Über mich' },
  { to: '/education', label: 'Ausbildung' },
  { to: '/projects', label: 'Projekte' },
  { to: '/contact', label: 'Kontakt' },
]

/* --- Тексты для typewriter --- */
const roles = [
  'Full Stack Developer',
  'Java + React',
  'Microservices',
  'Backend Developer',
  'Frontend Developer',
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  /* --- Поделиться страницей --- */
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Vadim Antipov', url: window.location.href })
    } else {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link kopiert!')
    }
  }

  /* --- Открыть страницу печати --- */
  const handlePrint = () => window.open('/print', '_blank')

  /* --- Typewriter effect --- */
  const [roleText, setRoleText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        /* --- Печатаем --- */
        setRoleText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          /* --- Пауза перед удалением --- */
          setTimeout(() => setDeleting(true), 1500)
        } else {
          setCharIndex(prev => prev + 1)
        }
      } else {
        /* --- Удаляем --- */
        setRoleText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setCharIndex(0)
          setRoleIndex(prev => (prev + 1) % roles.length)
        } else {
          setCharIndex(prev => prev - 1)
        }
      }
    }, deleting ? 50 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- Canvas фон с падающим кодом --- */}
      <CodeCanvas />

      {/* --- Контент поверх канваса --- */}
      <div className={styles.content}>

        {/* --- Аватар --- */}
        <div className={styles.avatar}>
          <img src={avatar} alt="Vadim Antipov — Full Stack Developer" />
        </div>

        {/* --- Имя и должность --- */}
        <div className={styles.info}>
          <h1 className={styles.name}>Vadim Antipov</h1>
          <p className={styles.role}>{roleText}<span>|</span></p>
        </div>

        {/* --- Кнопки справа --- */}
        <div className={styles.actions}>

          {/* --- Кнопка печати страницы --- */}
          <button
            className={styles.btnPrint}
            onClick={handlePrint}
            aria-label="Drucken"
            title="Drucken / Als PDF speichern"
          >
            <IconPrint />
          </button>

          {/* --- Кнопка поделиться --- */}
          <button className={styles.btnIcon}
            onClick={handleShare}
            aria-label="Seite teilen"
            title="Seite teilen">

            <IconShare size="1.3em" color="currentColor" />
          </button>

          {/* --- Кнопка бургера --- */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <IconMenuClose size="1.8em" color="var(--color-gold)" />
              : <IconMenuOpen size="1.8em" color="var(--color-gold)" />
            }
          </button>

        </div>
      </div>

      {/* --- Выпадашка мобильной навигации --- */}
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