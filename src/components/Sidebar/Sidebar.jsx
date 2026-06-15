// src/components/Sidebar/Sidebar.jsx

/* ===================== ИМПОРТЫ ===================== */
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

/* ===================== КОМПОНЕНТ ===================== */
export default function Sidebar() {
  return (
    /* --- Боковая навигация --- */
    <nav className={styles.sidebar}>

      {/* --- Навигационные ссылки --- */}
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Anschreiben</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Über mich</NavLink>
      <NavLink to="/education" className={({ isActive }) => isActive ? styles.active : ''}>Ausbildung</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projekte</NavLink>

    </nav>
  )
}