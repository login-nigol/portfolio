// src/pages/Career/Career.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useLang } from '../../i18n/LangContext'
import Page from '../../components/ui/Page'
import Section from '../../components/ui/Section'
import styles from './Career.module.css'

/* ===================== СТРАНИЦА: ОПЫТ + ОБРАЗОВАНИЕ + ЯЗЫКИ ===================== */
export default function Career() {
  const { t, data } = useLang()

  return (
    <Page>

      {/* ===== ОПЫТ РАБОТЫ ===== */}
      <Section title={t.experience}>
        <ol className={styles.timeline}>
          {data.experience.map(({ period, role, company, bullets }) => (
            <li
              key={period}
              className={styles.item}
            >
              <span className={styles.period}>{period}</span>
              <div>
                <h3 className={styles.role}>{role}</h3>
                {company && <p className={styles.place}>{company}</p>}
                <ul className={styles.bullets}>
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===== ОБРАЗОВАНИЕ ===== */}
      <Section title={t.education}>
        <ol className={styles.timeline}>
          {data.education.map(({ period, title, school }) => (
            <li
              key={title}
              className={styles.item}
            >
              <span className={styles.period}>{period}</span>
              <div>
                <h3 className={styles.role}>{title}</h3>
                <p className={styles.place}>{school}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===== ЯЗЫКИ ===== */}
      <Section title={t.languages}>
        <dl className={styles.languages}>
          {data.languages.map(({ name, level }) => (
            <div key={name}>
              <dt className={styles.langName}>{name}</dt>
              <dd className={styles.place}>{level}</dd>
            </div>
          ))}
        </dl>
      </Section>

    </Page>
  )
}
