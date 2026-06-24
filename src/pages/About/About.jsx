// src/pages/About/About.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from './About.module.css'

import avatar from '../../assets/images/avatar.png'

import Accordion from '../../components/shared/Accordion/Accordion'

/* ===================== АНИМАЦИЯ БЛОКОВ ===================== */
/* --- Каждый блок появляется снизу с задержкой --- */
const blockVariants = {
  hidden: { opacity: 0, y: '2em' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  })
}

/* ===================== ТЕХНОЛОГИИ ===================== */
const techStack = [
  {
    title: 'Frontend',
    items: ['React 19', 'Vite', 'React Router', 'Axios', 'Framer Motion', 'CSS Modules', 'HTML5', 'JavaScript ES6+']
  },
  {
    title: 'Backend',
    items: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'REST API']
  },
  {
    title: 'Datenbank',
    items: ['PostgreSQL', 'Liquibase', 'JPA', 'MinIO']
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux VPS']
  },
  {
    title: 'Tools',
    items: ['Git', 'Swagger', 'Maven', 'IntelliJ IDEA']
  },
  {
    title: 'Konzepte',
    items: ['Microservices', 'CI/CD', 'Clean Code', 'OOP', 'SOLID', 'Agile']
  },
]

/* ===================== ОПЫТ РАБОТЫ ===================== */
const experience = [
  {
    period: 'Feb 2025 — Heute',
    role: 'Junior Full Stack Developer',
    company: 'Self-Employed',
    items: [
      'Freelance-Webentwicklung: Landing Pages, SPAs, responsive Formulare',
      'Integration von REST APIs und clientseitiger Logik',
    ]
  },
  {
    period: 'Mai 2006 — Apr 2012',
    role: 'SMT-Spezialist',
    company: 'Zollner Elektronik AG',
    items: [
      'Programmierung und Wartung von automatisierten Fertigungsanlagen (AOI, SiPlace)',
      'Inbetriebnahme von AOI-Systemen zur automatischen Sichtprüfung',
    ]
  },
  {
    period: 'Feb 1999 — Aug 2003',
    role: 'Geschäftsführer',
    company: 'EVA Plus GmbH, Almaty',
    items: [
      'Verkauf, Reparatur und Wartung von Computertechnik',
      'Installation und Konfiguration von Netzwerken',
      'Teamführung und Kundenbetreuung',
    ]
  },
]

/* ===================== ЯЗЫКИ ===================== */
const languages = [
  { lang: 'Russisch', level: 'Muttersprache', percent: 100 },
  { lang: 'Deutsch', level: 'B2+', percent: 75 },
  { lang: 'Englisch', level: 'A2+', percent: 35 },
  { lang: 'Kasachisch', level: 'B1', percent: 55 },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function About() {
  /* --- Какой аккордеон открыт (индекс) --- */
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={styles.about}>

      {/* ===== БЛОК 1: HERO ===== */}
      <motion.div
        className={styles.hero}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {/* --- Фото с обёрткой для тени --- */}
        <div className={styles.photoWrap}>
          <div className={styles.photo}>
            <img src={avatar} alt="Vadim Antipov — Full Stack Developer" />
          </div>
        </div>

        {/* --- Инфо --- */}
        <div className={styles.info}>
          <h1 className={styles.name}>Vadim Antipov</h1>
          <p className={styles.role}>Full Stack Developer · Java + React · Microservices</p>

          <p className={styles.webLinks}>
            <a href="https://perunix-web.de" target="_blank" rel="noopener noreferrer">perunix-web.de</a>
            {' / '}
            <a href="https://perunix-web.com" target="_blank" rel="noopener noreferrer">perunix-web.com</a>
          </p>

          <ul className={styles.bioList}>
            <li>Geboren am 29.08.1980 in Almaty, Kasachstan</li>
            <li>2003 als Spätaussiedler nach Deutschland</li>
            <li>Seit 2006 in Regensburg, Bayern</li>
          </ul>
        </div>
      </motion.div>

      {/* ===== БЛОК 2: PROFIL ===== */}
      <motion.section
        className={styles.card}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <h2 className={styles.cardTitle}>Profil</h2>
        <p>
          Full Stack Developer mit einem Hochschulabschluss als Ingenieur-Programmierer
          (Al-Farabi Universität Almaty, 1999–2003) sowie abgeschlossenen Kursen in
          Java (Spring Boot), HTML, CSS und JavaScript. React habe ich eigenständig erlernt.
          Ich spezialisiere mich auf Full Stack Entwicklung — vom Microservice-Backend
          bis zum modernen Frontend.
        </p>
        <p>
          Seit März 2026 entwickle ich aktiv <a href="https://lifeqr.kz" target="_blank" rel="noopener noreferrer">LifeQR.kz</a> —
          eine produktive SaaS-Plattform mit Microservice-Architektur,
          JWT-Authentifizierung, CI/CD und Docker-Deployment auf eigenem VPS.
        </p>
        <p>
          Ich suche eine Junior-Stelle als Full Stack Developer,
          um in einem erfahrenen Team zu wachsen und echten Mehrwert zu liefern.
        </p>
      </motion.section>

      {/* ===== БЛОК: STATS ===== */}
      <motion.div
        className={styles.stats}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={1.5}
      >
        <div className={styles.statItem}>
          <span className={styles.statNumber}>2+</span>
          <span className={styles.statLabel}>Jahre Erfahrung</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>6</span>
          <span className={styles.statLabel}>Projekte</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>560h</span>
          <span className={styles.statLabel}>Ausbildung</span>
        </div>
      </motion.div>

      {/* ===== БЛОК 3: BERUFSERFAHRUNG ===== */}
      <motion.section
        className={styles.card}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <h2 className={styles.cardTitle}>Berufserfahrung</h2>
        <div className={styles.timeline}>
          {experience.map(({ period, role, company, items }) => (
            <div key={role} className={styles.timelineItem}>
              <p className={styles.period}>{period}</p>
              <p className={styles.expRole}>{role}</p>
              <p className={styles.company}>{company}</p>
              <ul className={styles.expList}>
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== БЛОК 4: TECHNOLOGIEN ===== */}
      <motion.section
        className={styles.card}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h2 className={styles.cardTitle}>Technologien</h2>
        <div className={styles.accordionList}>
          {techStack.map(({ title, items }, index) => (
            <Accordion
              key={title}
              title={title}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(prev => prev === index ? null : index)}
            >
              <div className={styles.tags}>
                {items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </motion.section>

      {/* ===== БЛОК 5: SPRACHEN ===== */}
      <motion.section
        className={styles.card}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <h2 className={styles.cardTitle}>Sprachen</h2>
        <div className={styles.languages}>
          {languages.map(({ lang, level, percent }) => (
            <div key={lang} className={styles.langItem}>
              <div className={styles.langHeader}>
                <span className={styles.langName}>{lang}</span>
                <span className={styles.langLevel}>{level}</span>
              </div>
              {/* --- Прогресс бар --- */}
              <div className={styles.bar}>
                <motion.div
                  className={styles.barFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  )
}