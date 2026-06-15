// src/components/Footer/Footer.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion } from 'framer-motion'
import styles from './Footer.module.css'
import CodeCanvas from '../shared/CodeCanvas'
import IconGithub from '../../assets/icons/IconGithub'
import IconLinkedin from '../../assets/icons/IconLinkedin'
import IconTelegram from '../../assets/icons/IconTelegram'
import IconWhatsapp from '../../assets/icons/IconWhatsapp'

/* ===================== АНИМАЦИЯ ===================== */
const footerVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

/* ===================== СОЦСЕТИ ===================== */
const socialLinks = [
  { href: 'https://github.com/login-nigol', Icon: IconGithub, label: 'GitHub — Vadim Antipov', color: '#333333' },
  { href: 'https://linkedin.com', Icon: IconLinkedin, label: 'LinkedIn — Vadim Antipov', color: '#0077b5' },
  { href: 'https://t.me/username', Icon: IconTelegram, label: 'Telegram — Vadim Antipov', color: '#229ed9' },
  { href: 'https://wa.me/49000000000', Icon: IconWhatsapp, label: 'WhatsApp — Vadim Antipov', color: '#25d366' },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- Canvas фон --- */}
      <div className={styles.canvasWrap}>
        <CodeCanvas />
      </div>

      {/* --- Контент поверх канваса --- */}
      <div className={styles.content}>

        {/* --- Копирайт слева --- */}
        <p className={styles.copy}>© 2026 Vadim Antipov</p>

        {/* --- Иконки справа --- */}
        <div className={styles.socials}>
          {socialLinks.map(({ href, Icon, label, color }) => (

            <a key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={label}
              title={label}
            >
              <Icon color={color} />
            </a>
          ))}
        </div>

      </div>
    </motion.footer>
  )
}