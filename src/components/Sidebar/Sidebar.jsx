// src/components/Sidebar/Sidebar.jsx

/* ===================== ИМПОРТЫ ===================== */
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Sidebar.module.css'

/* ===================== АНИМАЦИЯ ===================== */
/* Появление сайдбара справа при загрузке */
const sidebarVariants = {
  hidden:  { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* --- Пункты меню --- */
const navItems = [
  { to: '/',          label: 'Anschreiben' },
  { to: '/about',     label: 'Über mich'   },
  { to: '/education', label: 'Ausbildung'  },
  { to: '/projects',  label: 'Projekte'    },
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
      {/* --- Навигационные ссылки из массива --- */}
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

    </motion.nav>
  )
}