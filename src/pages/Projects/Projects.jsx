// src/pages/Projects/Projects.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

import imgLifeQR from '../../assets/images/projects/lifeqr_kz.jpg'
import imgRodnik from '../../assets/images/projects/rodnik_de.jpg'
import imgPixora from '../../assets/images/projects/Pixora_A__Studio_de.jpg'
import imgClock from '../../assets/images/projects/svg_clock.jpg'
import imgTennis from '../../assets/images/projects/tennis_dom.jpg'
import imgForm from '../../assets/images/projects/dynamic_form.jpg'

import SvgClock from '../../components/shared/SvgClock/SvgClock'

/* ===================== ДАННЫЕ ===================== */
const projects = [
  {
    title: 'LifeQR.kz',
    url: 'https://lifeqr.kz',
    period: 'März 2026 — Heute',
    status: '🟢 In Produktion',
    description: 'SaaS-Plattform für digitales Familiengedächtnis. QR-Codes auf Grabsteinen verlinken auf persönliche Gedenkseiten mit Fotos, Biographien und Familienbäumen.',
    stack: ['Java 21', 'Spring Boot 3', 'React 19', 'PostgreSQL', 'Docker', 'JWT', 'MinIO', 'GitHub Actions'],
    image: imgLifeQR,
  },
  {
    title: 'РОДНИКЪ',
    url: 'https://login-nigol.github.io/RODNIK/#home',
    period: '2025 — Heute',
    status: '🟡 In Entwicklung',
    description: 'Russischsprachiger Bauernmarkt-Marktplatz. Verbindet Landwirte direkt mit Verbrauchern — ohne Zwischenhändler.',
    stack: ['Java 21', 'Spring Boot 3', 'React 19', 'PostgreSQL', 'Docker', 'MinIO'],
    image: imgRodnik,
  },
  {
    title: 'Pixora A. Studio',
    url: 'https://login-nigol.github.io/HOMEWORK/pixora-a-studio/src/',
    period: 'Okt 2025 — Heute',
    status: '🟢 Online',
    description: 'Canvas-basierter Grafikeditor im Browser. Ebenensystem, Zeichenwerkzeuge, Undo/Redo, PNG-Export.',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Canvas API'],
    image: imgPixora,
  },
  {
    title: 'SVG Clock',
    url: 'https://login-nigol.github.io/HOMEWORK/37-CLOCK_SVG/',
    period: '2025',
    status: '🟢 Online',
    description: 'Analoge SVG-Uhr mit JavaScript. Zeigt die aktuelle Uhrzeit mit animierten Zeigern und digitalem Display.',
    stack: ['HTML5', 'SVG', 'JavaScript ES6+'],
    // image: imgClock,
    // iframe: 'https://login-nigol.github.io/HOMEWORK/37-CLOCK_SVG/',

  },
  {
    title: 'Tennis Canvas',
    url: 'https://login-nigol.github.io/HOMEWORK/50-TENNIS_CANVAS/',
    period: '2025',
    status: '🟢 Online',
    description: 'Pong-Spiel im Browser. Canvas-Animation, Kollisionserkennung und Punktestand.',
    stack: ['HTML5', 'Canvas API', 'JavaScript ES6+'],
    image: imgTennis,
  },
  {
    title: 'Dynamic Form',
    url: 'https://login-nigol.github.io/HOMEWORK/27-VALID_DYN_FORM/',
    period: '2025',
    status: '🟢 Online',
    description: 'Dynamisches Formular mit Echtzeit-Validierung. Pflichtfelder, Fehlermeldungen und UX-Feedback.',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    image: imgForm,
  },
]

/* ===================== АНИМАЦИЯ ===================== */
const blockVariants = {
  hidden: { opacity: 0, y: '2em' },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
  })
}

/* ===================== КОМПОНЕНТ ===================== */
export default function Projects() {
  return (
    <div className={styles.projects}>
      {projects.map(({ title, url, period, status, description, stack, image, iframe }, index) => (
        <motion.article
          key={title}
          className={styles.card}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {/* --- Картинка слева --- */}

          {/* <a href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imgWrap}
          >
            <img src={image} alt={title} />
            <div className={styles.overlay}>
              <span>🔗 Projekt öffnen</span>
            </div>
          </a> */}

          <a href={url} target="_blank" rel="noopener noreferrer" className={styles.imgWrap}>
            {title === 'SVG Clock'
              ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <SvgClock diameter={200} />
              </div>
              : <>
                <img src={image} alt={title} />
                <div className={styles.overlay}><span>🔗 Projekt öffnen</span></div>
              </>
            }
          </a>

          {/* --- Инфо справа --- */}
          <div className={styles.info}>
            <div className={styles.titleRow}>
              <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
              <span className={styles.status}>{status}</span>
            </div>
            <p className={styles.period}>{period}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
              {stack.map(item => (
                <span key={item} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>

        </motion.article>
      ))}
    </div>
  )
}