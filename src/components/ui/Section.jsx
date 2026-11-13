// src/components/ui/Section.jsx

/* ===================== ИМПОРТЫ ===================== */
import styles from './ui.module.css'

/* ===================== КОМПОНЕНТ: СЕКЦИЯ С ЗАГОЛОВКОМ ===================== */
/* --- Заголовок слева тонкой линией, контент ниже --- */
export default function Section({
  title,
  children,
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  )
}
