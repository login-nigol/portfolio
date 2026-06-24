// src/pages/Contact/Contact.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion } from 'framer-motion'
import styles from './Contact.module.css'
import IconGithub from '../../assets/icons/IconGithub'
import IconLinkedin from '../../assets/icons/IconLinkedin'
import IconTelegram from '../../assets/icons/IconTelegram'
import IconWhatsapp from '../../assets/icons/IconWhatsapp'

/* ===================== АНИМАЦИЯ ===================== */
const blockVariants = {
    hidden: { opacity: 0, y: '2em' },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
    })
}

/* ===================== КОНТАКТЫ ===================== */
const contacts = [
    { label: 'Email', value: 'vadim.antipov@gmx.de', href: 'mailto:vadim.antipov@gmx.de' },
    { label: 'Telefon', value: '+49 174 48 43 902', href: 'tel:+491744843902' },
    { label: 'LinkedIn', value: 'linkedin.com/in/vadimantipov', href: 'https://linkedin.com/in/vadimantipov' },
]

/* ===================== СОЦСЕТИ ===================== */
/* --- ВАЖНО: заменить t.me/ВАШ_USERNAME на реальный --- */
const socials = [
    { href: 'https://github.com/login-nigol', Icon: IconGithub, label: 'GitHub', color: '#333333' },
    { href: 'https://linkedin.com/in/vadimantipov', Icon: IconLinkedin, label: 'LinkedIn', color: '#0077b5' },
    { href: 'https://t.me/vadimalmata', Icon: IconTelegram, label: 'Telegram', color: '#229ed9' },
    { href: 'https://wa.me/491744843902', Icon: IconWhatsapp, label: 'WhatsApp', color: '#25d366' },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Contact() {
    return (
        <div className={styles.contact}>

            {/* ===== ЗАГОЛОВОК ===== */}
            <motion.div
                className={styles.card}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                <h1 className={styles.title}>Kontakt</h1>
                <p className={styles.subtitle}>Ich freue mich über Ihre Nachricht!</p>
            </motion.div>

            {/* ===== КОНТАКТЫ ===== */}
            <motion.div
                className={styles.card}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                <div className={styles.contactList}>
                    {contacts.map(({ label, value, href }) => (
                        <div key={label} className={styles.contactItem}>
                            <span className={styles.contactLabel}>{label}</span>
                            <a
                                href={href}
                                target={href.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className={styles.contactValue}
                            >
                                {value}
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ===== СОЦСЕТИ ===== */}
            <motion.div
                className={styles.card}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                <h2 className={styles.cardTitle}>Social Media</h2>
                <div className={styles.socials}>
                    {socials.map(({ href, Icon, label, color }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label={label}
                            title={label}
                        >
                            <Icon color={color} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </motion.div>

        </div>
    )
}