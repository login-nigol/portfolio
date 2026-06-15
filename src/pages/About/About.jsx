// src/pages/About/About.jsx

/* ===================== ИМПОРТЫ ===================== */

import styles from './About.module.css'

import avatar from '../../assets/images/avatar.png'

/* ===================== КОМПОНЕНТ ===================== */
export default function About() {

  return (
    <div className={styles.about}>

      {/* --- Блок ФИО + фото --- */}
      <div className={styles.hero}>

        {/* --- Текст слева --- */}
        <div className={styles.info}>
          <h1>Vadim Antipov</h1>
          <p><strong>Geboren:</strong> 29.08.1980, Almaty, Kasachstan</p>
          <p><strong>Nationalität:</strong> Deutsch</p>
          <p><strong>Wohnort:</strong> Regensburg, Bayern, Germany</p>
          <p><strong>2003:</strong> als Spätaussiedler nach Deutschland</p>
        </div>

        {/* --- Фото справа --- */}
        <div className={styles.photo}>
          <img src={avatar} alt="Vadim Antipov" />
        </div>

      </div>

      {/* --- Weitere Infos --- */}
      <section className={styles.bio}>
        <h2>Über mich</h2>
        <p>
          1999–2003 Studium an der Al-Farabi Universität Almaty, Abschluss als Ingenieur-Programmierer.
          Mit 25 Jahren begann ich meine Reise in die Softwareentwicklung — zuerst Backend mit Java,
          dann Frontend mit React. Heute bin ich Full Stack Developer mit eigenen Pet-Projekten.
        </p>
      </section>

      {/* --- Блок курсов --- */}
      <section className={styles.courses}>
        <h2>Weiterbildung</h2>
        <ul>
          <li>Backend Web Development — Java, Spring Boot, DevOps | Tel-Ran.de GmbH, Berlin | Feb 2024 – Feb 2025 | 560 Stunden</li>
          <li>Web Application Development with JavaScript | IT-Academy | 2025 – 2026 | 116 Stunden</li>
          <li>Website Development with HTML, CSS &amp; JavaScript | IT-Academy | 2025 – 2026 | 108 Stunden</li>
        </ul>
      </section>

    </div>
  )
}