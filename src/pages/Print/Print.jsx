// src/pages/Print/Print.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect } from 'react'
import styles from './Print.module.css'
import avatar from '../../assets/images/avatar.png'

/* ===================== КОМПОНЕНТ ===================== */
export default function Print() {

    /* --- Открываем диалог печати после загрузки --- */
    useEffect(() => {
        const timer = setTimeout(() => window.print(), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.print}>

            {/* ===== ШАПКА ===== */}
            <div className={styles.header}>
                <img src={avatar} alt="Vadim Antipov" className={styles.avatar} />
                <div className={styles.headerInfo}>
                    <h1>Vadim Antipov</h1>
                    <p className={styles.role}>Full Stack Developer · Java + React · Microservices</p>
                    <div className={styles.contacts}>
                        <span>📍 Regensburg, Bayern</span>
                        <span>📞 +49 174 48 43 902</span>
                        <span>✉️ vadim.antipov@gmx.de</span>
                        <span>🌐 linkedin.com/in/vadimantipov</span>
                    </div>
                </div>
            </div>

            {/* ===== PROFIL ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Profil</h2>
                <p>Full Stack Developer mit einem Hochschulabschluss als Ingenieur-Programmierer (Al-Farabi Universität Almaty, 1999–2003) sowie abgeschlossenen Kursen in Java (Spring Boot), HTML, CSS und JavaScript. React habe ich eigenständig erlernt. Ich spezialisiere mich auf Full Stack Entwicklung — vom Microservice-Backend bis zum modernen Frontend.</p>
                <p>Seit März 2026 entwickle ich aktiv LifeQR.kz — eine produktive SaaS-Plattform mit Microservice-Architektur, JWT-Authentifizierung, CI/CD und Docker-Deployment auf eigenem VPS.</p>
                <p>Ich suche eine Junior-Stelle als Full Stack Developer, um in einem erfahrenen Team zu wachsen und echten Mehrwert zu liefern.</p>
            </div>

            {/* ===== TECHNOLOGIEN ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Technologien</h2>
                <div className={styles.techGrid}>
                    <div><strong>Frontend:</strong> React 19, Vite, React Router, Axios, Framer Motion, CSS Modules, HTML5, JavaScript ES6+</div>
                    <div><strong>Backend:</strong> Java 21, Spring Boot 3, Spring Security, JWT, REST API</div>
                    <div><strong>Datenbank:</strong> PostgreSQL, Liquibase, JPA, MinIO</div>
                    <div><strong>DevOps:</strong> Docker, Docker Compose, GitHub Actions, Linux VPS</div>
                    <div><strong>Tools:</strong> Git, Swagger, Maven, IntelliJ IDEA</div>
                    <div><strong>Konzepte:</strong> Microservices, CI/CD, Clean Code, OOP, SOLID</div>
                </div>
            </div>

            {/* ===== PROJEKTE ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Projekte</h2>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>LifeQR.kz</strong>
                        <span>März 2026 — Heute</span>
                    </div>
                    <p>SaaS-Plattform für digitales Familiengedächtnis. Microservice-Architektur, JWT, CI/CD, Docker.</p>
                    <p className={styles.link}>https://lifeqr.kz</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>РОДНИКЪ</strong>
                        <span>2025 — Heute</span>
                    </div>
                    <p>Russischsprachiger Bauernmarkt-Marktplatz. Java, Spring Boot, React, PostgreSQL.</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Pixora A. Studio</strong>
                        <span>Okt 2025 — Heute</span>
                    </div>
                    <p>Canvas-basierter Grafikeditor. HTML5, CSS3, JavaScript, Canvas API.</p>
                    <p className={styles.link}>https://login-nigol.github.io/pixora</p>
                </div>
            </div>

            {/* ===== BERUFSERFAHRUNG ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Berufserfahrung</h2>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Junior Full Stack Developer · Self-Employed</strong>
                        <span>Feb 2025 — Heute</span>
                    </div>
                    <ul>
                        <li>Freelance-Webentwicklung: Landing Pages, SPAs, responsive Formulare</li>
                        <li>Integration von REST APIs und clientseitiger Logik</li>
                    </ul>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>SMT-Spezialist · Zollner Elektronik AG</strong>
                        <span>Mai 2006 — Apr 2012</span>
                    </div>
                    <ul>
                        <li>Programmierung und Wartung von automatisierten Fertigungsanlagen</li>
                        <li>Inbetriebnahme von AOI-Systemen</li>
                    </ul>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Geschäftsführer · EVA Plus GmbH, Almaty</strong>
                        <span>Feb 1999 — Aug 2003</span>
                    </div>
                    <ul>
                        <li>Verkauf, Reparatur und Wartung von Computertechnik</li>
                        <li>Teamführung und Kundenbetreuung</li>
                    </ul>
                </div>
            </div>

            {/* ===== AUSBILDUNG ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Ausbildung</h2>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Al-Farabi Kasachische Nationaluniversität</strong>
                        <span>1999 – 2003</span>
                    </div>
                    <p>Bachelor — Ingenieur-Programmierer · Almaty, Kasachstan</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Backend Web Development · Tel-Ran.de GmbH, Berlin</strong>
                        <span>Feb 2024 – Feb 2025</span>
                    </div>
                    <p>Java, Spring Boot, DevOps · 560 Stunden</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Web Application Development with JavaScript · IT-Academy</strong>
                        <span>2025 – 2026</span>
                    </div>
                    <p>116 Stunden</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <strong>Website Development with HTML, CSS & JavaScript · IT-Academy</strong>
                        <span>2025 – 2026</span>
                    </div>
                    <p>108 Stunden</p>
                </div>
            </div>

            {/* ===== SPRACHEN ===== */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Sprachen</h2>
                <div className={styles.techGrid}>
                    <div><strong>Russisch</strong> — Muttersprache</div>
                    <div><strong>Deutsch</strong> — B2+</div>
                    <div><strong>Englisch</strong> — A2+</div>
                    <div><strong>Kasachisch</strong> — B1</div>
                </div>
            </div>

        </div>
    )
}