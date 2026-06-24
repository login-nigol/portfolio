// src/pages/Education/Education.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Education.module.css'
import Modal from '../../components/shared/Modal/Modal'

/* --- Сертификаты PDF --- */
import certTelRan from '../../assets/certificates/cert-telran.pdf'
import certJS from '../../assets/certificates/cert-js.pdf'
import certHTML from '../../assets/certificates/cert-html.pdf'
import IconFilePdf from '../../assets/icons/IconFilePdf'

/* --- Импорты изображений диплома --- */
import diplomAlfarabi from '../../assets/certificates/diplom-alfarabi.jpg'
import diplomTranslation from '../../assets/certificates/diplom-translation.jpg'
import diplomTranscript1 from '../../assets/certificates/diplom-transcript-1.jpg'
import diplomTranscript2 from '../../assets/certificates/diplom-transcript-2.jpg'

/* --- Документы университета --- */
const univDocs = [
  { src: diplomAlfarabi, title: '📄 IHK Bescheid' },
  { src: diplomTranslation, title: '📄 Diplom Übersetzung' },
  { src: diplomTranscript1, title: '📄 Transcript Seite 1' },
  { src: diplomTranscript2, title: '📄 Transcript Seite 2' },
]

/* ===================== АНИМАЦИЯ ===================== */
const blockVariants = {
  hidden: { opacity: 0, y: '2em' },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
  })
}

/* ===================== ДАННЫЕ ===================== */
const university = {
  title: 'Al-Farabi Kasachische Nationaluniversität',
  degree: 'Bachelor — Ingenieur-Programmierer',
  period: '1999 – 2003',
  location: 'Almaty, Kasachstan',
  items: [
    'Studium der Informationssysteme in innovativen Technologien',
    'Abschluss als Ingenieur-Programmierer',
  ]
}

const courses = [
  {
    title: 'Backend Web Development',
    school: 'Tel-Ran.de GmbH, Berlin',
    period: 'Feb 2024 – Feb 2025',
    hours: '560 Stunden',
    cert: certTelRan,
    certName: 'Zertifikat — Tel-Ran',
    items: [
      'Java 21, Spring Boot 3, Spring Security, REST API',
      'DevOps: Docker, GitHub Actions, Linux VPS',
      'Datenbanken: PostgreSQL, JPA, Liquibase',
      'Frontend-Grundlagen: HTML, CSS',
      'Projektarbeit, Algorithmen, IT-Management',
    ]
  },
  {
    title: 'Website Development with HTML, CSS & JavaScript',
    school: 'IT-Academy',
    period: '2025 – 2026',
    hours: '108 Stunden',
    cert: certHTML,
    certName: 'Zertifikat — HTML & CSS',
    items: [
      'HTML5, CSS3, Responsive Design',
      'Flexbox, Grid, CSS Animationen',
      'JavaScript Grundlagen',
    ]
  },
  {
    title: 'Web Application Development with JavaScript',
    school: 'IT-Academy',
    period: '2025 – 2026',
    hours: '116 Stunden',
    cert: certJS,
    certName: 'Zertifikat — JavaScript',
    items: [
      'JavaScript ES6+, DOM, Async/Await',
      'Fetch API, Event Handling',
      'Modulares JavaScript',
    ]
  },  
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Education() {
  /* --- Модал: какой сертификат открыт --- */
  const [modal, setModal] = useState({ isOpen: false, src: '', title: '', files: null })

  const openModal = (src, title, files = null) =>
    setModal({ isOpen: true, src, title, files })

  const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }))

  return (
    <div className={styles.education}>

      {/* ===== БЛОК 1: УНИВЕРСИТЕТ ===== */}
      <motion.section
        className={styles.card}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {/* --- Шапка блока --- */}
        <div className={styles.cardHeader}>
          <div>
            <h2 className={styles.cardTitle}>{university.title}</h2>
            <p className={styles.degree}>{university.degree}</p>
          </div>
          <div className={styles.meta}>
            <span className={styles.period}>{university.period}</span>
            <span className={styles.location}>{university.location}</span>
          </div>
        </div>

        {/* --- Описание --- */}
        <ul className={styles.list}>
          {university.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* --- Одна кнопка для всех документов диплома --- */}
        <button
          className={styles.certBtn}
          onClick={() => openModal(null, null, univDocs)}
        >
          <IconFilePdf /> Diplom & Dokumente ansehen
        </button>
      </motion.section >

      {/* ===== БЛОКИ 2-3: КУРСЫ ===== */}
      {
        courses.map(({ title, school, period, hours, cert, certName, items }, index) => (
          <motion.section
            key={title}
            className={styles.card}
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            {/* --- Шапка блока --- */}
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.school}>{school}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{period}</span>
                <span className={styles.hours}>{hours}</span>
              </div>
            </div>

            {/* --- Описание --- */}
            <ul className={styles.list}>
              {items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* --- Кнопка сертификата --- */}
            <button
              className={styles.certBtn}
              onClick={() => openModal(cert, certName)}
            >
              <IconFilePdf /> {certName}
            </button>

          </motion.section>
        ))
      }

      {/* ===== МОДАЛ С PDF ===== */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        src={modal.src}
        title={modal.title}
        files={modal.files}
      />

    </div >
  )
}