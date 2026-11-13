// src/pages/Contact/Contact.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useLang } from '../../i18n/LangContext'
import { contacts, cvFiles } from '../../data/cv'
import Page from '../../components/ui/Page'
import Section from '../../components/ui/Section'
import styles from './Contact.module.css'

/* ===================== СТРАНИЦА ===================== */
export default function Contact() {
  const { lang, t } = useLang()

  /* --- Список каналов связи: подпись, текст, ссылка --- */
  const rows = [
    { label: t.email, value: contacts.email, href: `mailto:${contacts.email}` },
    { label: t.phone, value: contacts.phone, href: contacts.phoneHref },
    { label: 'LinkedIn', value: contacts.linkedinLabel, href: contacts.linkedin },
    { label: 'GitHub', value: contacts.githubLabel, href: contacts.github },
  ]

  return (
    <Page>
      <Section title={t.contact}>
        <p className={styles.lead}>{t.contactLead}</p>

        <dl className={styles.list}>
          {rows.map(({ label, value, href }) => (
            <div
              key={label}
              className={styles.row}
            >
              <dt className={styles.label}>{label}</dt>
              <dd>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {value}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        {/* --- Повтор кнопки PDF: кто дочитал до контактов — скачает --- */}
        <a
          className={styles.cvBtn}
          href={cvFiles[lang]}
          download
        >
          {t.downloadCv}
        </a>
      </Section>
    </Page>
  )
}
