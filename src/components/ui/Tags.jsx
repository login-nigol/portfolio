// src/components/ui/Tags.jsx

/* ===================== ИМПОРТЫ ===================== */
import styles from './ui.module.css'

/* ===================== КОМПОНЕНТ: СПИСОК ТЕГОВ ===================== */
/* --- Технологии «плашками» в одну строку с переносом --- */
export default function Tags({ items }) {
  return (
    <ul className={styles.tags}>
      {items.map((item) => (
        <li
          key={item}
          className={styles.tag}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
