// src/components/Sidebar/Sidebar.jsx

/* ===================== ИМПОРТЫ ===================== */
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Sidebar.module.css'
import CodeCanvas from '../shared/CodeCanvas'

/* ===================== АНИМАЦИЯ ===================== */
const sidebarVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
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
export default function Sidebar() {
  return (
    <motion.nav
      className={styles.sidebar}
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- Канвас фон --- */}
      <CodeCanvas
        lineGap={20}
      />

      {/* --- Ссылки поверх канваса --- */}
      <div className={styles.links}>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

    </motion.nav>
  )
}