// src/components/Footer/Footer.jsx

/* ===================== ИМПОРТЫ ===================== */
import { contacts } from '../../data/cv'
import IconGithub from '../../assets/icons/IconGithub'
import IconLinkedin from '../../assets/icons/IconLinkedin'
import styles from './Footer.module.css'

/* ===================== КОНСТАНТЫ ===================== */
const CURRENT_YEAR = new Date().getFullYear()

/* --- Только реальные профили, без заглушек --- */
const SOCIALS = [
  { href: contacts.github, label: 'GitHub', Icon: IconGithub },
  { href: contacts.linkedin, label: 'LinkedIn', Icon: IconLinkedin },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {CURRENT_YEAR} {contacts.name}</p>

        {/* --- Иконки соцсетей --- */}
        <ul className={styles.socials}>
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={styles.social}
              >
                <Icon
                  size="1.4em"
                  color="currentColor"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
