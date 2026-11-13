// src/pages/Projects/Projects.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useLang } from '../../i18n/LangContext'
import Page from '../../components/ui/Page'
import Section from '../../components/ui/Section'
import Tags from '../../components/ui/Tags'
import imgLifeQR from '../../assets/images/projects/lifeqr_kz.jpg'
import imgPixora from '../../assets/images/projects/Pixora_A__Studio_de.jpg'
import styles from './Projects.module.css'

/* ===================== КАРТИНКИ ПРОЕКТОВ ===================== */
/* --- Ключ image из data/cv.js → импортированный файл --- */
const IMAGES = {
  lifeqr: imgLifeQR,
  pixora: imgPixora,
}

/* ===================== КАРТОЧКА ПРОЕКТА ===================== */
function ProjectCard({ project }) {
  const image = project.image ? IMAGES[project.image] : null

  return (
    <article className={styles.card}>

      {/* --- Скриншот (если есть) --- */}
      {image && (
        <img
          className={styles.image}
          src={image}
          alt={project.title}
          loading="lazy"
        />
      )}

      <div className={styles.body}>
        {/* --- Шапка: название + сроки/статус --- */}
        <div className={styles.head}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.meta}>{project.period} · {project.status}</span>
        </div>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.summary}>{project.summary}</p>

        {/* --- Подробности (только у крупных проектов) --- */}
        {project.bullets.length > 0 && (
          <ul className={styles.bullets}>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        <Tags items={project.stack} />

        {/* --- Ссылка: только если проект доступен --- */}
        {project.url && (
          <a
            className={styles.link}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.urlLabel} ↗
          </a>
        )}
      </div>
    </article>
  )
}

/* ===================== СТРАНИЦА ===================== */
export default function Projects() {
  const { t, data } = useLang()

  return (
    <Page>
      <Section title={t.projects}>
        <div className={styles.list}>
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Section>
    </Page>
  )
}
