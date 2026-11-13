// src/pages/CvPrint/CvPrint.jsx

/* =====================================================================
   ПЕЧАТНОЕ РЕЗЮМЕ (A4). Маршрут /cv/:lang (de | en).
   Из этой страницы скрипт scripts/build-cv-pdf.sh печатает PDF
   в public/cv/. Данные — те же, что на сайте (data/cv.js).
   ===================================================================== */

/* ===================== ИМПОРТЫ ===================== */
import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { cv, contacts, skills } from '../../data/cv'
import { ui, LANGS } from '../../i18n/LangContext'
import avatar from '../../assets/images/avatar.jpg'
import styles from './CvPrint.module.css'

/* ===================== КОМПОНЕНТ ===================== */
export default function CvPrint() {
  const { lang } = useParams()
  const isKnownLang = LANGS.includes(lang)

  /* --- Язык документа + заголовок вкладки = имя PDF по умолчанию --- */
  useEffect(() => {
    if (!isKnownLang) return
    document.documentElement.lang = lang
    document.title = lang === 'de' ? 'Lebenslauf – Vadim Antipov' : 'CV – Vadim Antipov'
  }, [lang, isKnownLang])

  /* --- Неизвестный язык → на немецкую версию --- */
  if (!isKnownLang) return <Navigate to="/cv/de" replace />

  const data = cv[lang]
  const t = ui[lang]
  const [mainProject, ...otherProjects] = data.projects

  return (
    <article className={styles.sheet}>

      {/* ===== ШАПКА: имя, роль, контакты, фото ===== */}
      <header className={styles.head}>
        <div>
          <h1 className={styles.name}>{contacts.name}</h1>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.contacts}>
            {data.location}
            <br />
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            {' · '}
            <a href={contacts.phoneHref}>{contacts.phone}</a>
            <br />
            <a href={contacts.website}>{contacts.websiteLabel}</a>
            {' · '}
            <a href={contacts.linkedin}>{contacts.linkedinLabel}</a>
            {' · '}
            <a href={contacts.github}>{contacts.githubLabel}</a>
          </p>
        </div>
        <img
          className={styles.photo}
          src={avatar}
          alt=""
        />
      </header>

      {/* ===== ПРОФИЛЬ ===== */}
      <section className={styles.block}>
        <p>{data.profile.join(' ')}</p>
        <p className={styles.seeking}>{data.seeking}</p>
      </section>

      {/* ===== СТЕК ===== */}
      <section className={styles.block}>
        <h2 className={styles.h2}>{t.skills}</h2>
        <dl className={styles.skills}>
          {skills.map(({ group, groupEn, items }) => (
            <div
              key={group}
              className={styles.skillRow}
            >
              <dt>{lang === 'en' && groupEn ? groupEn : group}</dt>
              <dd>{items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ===== ПРОЕКТЫ: главный подробно, остальные строкой ===== */}
      <section className={styles.block}>
        <h2 className={styles.h2}>{t.projects}</h2>

        <div className={styles.entry}>
          <div className={styles.entryHead}>
            <strong>
              {mainProject.title} – {mainProject.subtitle}
            </strong>
            <span className={styles.period}>{mainProject.period}</span>
          </div>
          <p className={styles.muted}>
            {mainProject.status} · <a href={mainProject.url}>{mainProject.urlLabel}</a>
          </p>
          <ul className={styles.bullets}>
            {mainProject.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        {otherProjects.map((project) => (
          <div
            key={project.id}
            className={styles.entry}
          >
            <div className={styles.entryHead}>
              <strong>
                {project.title} – {project.subtitle}
              </strong>
              <span className={styles.period}>{project.period}</span>
            </div>
            <p>
              {project.summary}{' '}
              <span className={styles.muted}>({project.stack.join(', ')})</span>
            </p>
          </div>
        ))}
      </section>

      {/* ===== ОПЫТ ===== */}
      <section className={styles.block}>
        <h2 className={styles.h2}>{t.experience}</h2>
        {data.experience.map(({ period, role, company, bullets }) => (
          <div
            key={period}
            className={styles.entry}
          >
            <div className={styles.entryHead}>
              <strong>
                {role}
                {company && ` – ${company}`}
              </strong>
              <span className={styles.period}>{period}</span>
            </div>
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ===== ОБРАЗОВАНИЕ ===== */}
      <section className={styles.block}>
        <h2 className={styles.h2}>{t.education}</h2>
        {data.education.map(({ period, title, school }) => (
          <div
            key={title}
            className={styles.entry}
          >
            <div className={styles.entryHead}>
              <strong>{title}</strong>
              <span className={styles.period}>{period}</span>
            </div>
            <p className={styles.muted}>{school}</p>
          </div>
        ))}
      </section>

      {/* ===== ЯЗЫКИ ===== */}
      <section className={styles.block}>
        <h2 className={styles.h2}>{t.languages}</h2>
        <p>
          {data.languages.map(({ name, level }) => `${name} (${level})`).join(' · ')}
        </p>
      </section>

    </article>
  )
}
