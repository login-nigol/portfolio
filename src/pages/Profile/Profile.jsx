// src/pages/Profile/Profile.jsx

/* ===================== ИМПОРТЫ ===================== */
import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/LangContext'
import { contacts, skills } from '../../data/cv'
import Page from '../../components/ui/Page'
import Section from '../../components/ui/Section'
import Tags from '../../components/ui/Tags'
import avatar from '../../assets/images/avatar.jpg'
import styles from './Profile.module.css'

/* ===================== КОМПОНЕНТ ===================== */
export default function Profile() {
  const { lang, t, data } = useLang()

  /* --- Главный проект — первый в списке (LifeQR) --- */
  const featured = data.projects[0]

  return (
    <Page>

      {/* ===== HERO: фото + имя + профиль ===== */}
      <section className={styles.hero}>
        <img
          className={styles.photo}
          src={avatar}
          alt={contacts.name}
          width="160"
          height="166"
        />

        <div>
          <h1 className={styles.name}>{contacts.name}</h1>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.location}>{data.location}</p>
        </div>
      </section>

      {/* ===== ПРОФИЛЬ ===== */}
      <div className={styles.profile}>
        <p>{data.profile.join(' ')}</p>
        <p className={styles.seeking}>{data.seeking}</p>
      </div>

      {/* ===== СТЕК ===== */}
      <Section title={t.skills}>
        <dl className={styles.skills}>
          {skills.map(({ group, groupEn, items }) => (
            <div
              key={group}
              className={styles.skillRow}
            >
              <dt className={styles.skillGroup}>{lang === 'en' && groupEn ? groupEn : group}</dt>
              <dd>
                <Tags items={items} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ===== ГЛАВНЫЙ ПРОЕКТ ===== */}
      <Section title={t.projects}>
        <article className={styles.featured}>
          <div className={styles.featuredHead}>
            <h3>{featured.title}</h3>
            <span className={styles.meta}>{featured.period} · {featured.status}</span>
          </div>
          <p className={styles.featuredSub}>{featured.subtitle}</p>
          <ul className={styles.bullets}>
            {featured.bullets.slice(0, 4).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <Link
            to="/projekte"
            className={styles.more}
          >
            {t.allProjects} →
          </Link>
        </article>
      </Section>

    </Page>
  )
}
