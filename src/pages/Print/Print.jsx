// src/pages/Print/Print.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect } from 'react'
import styles from './Print.module.css'

/* --- Импортируем контент всех страниц --- */
import AboutContent from '../About/About'
import EducationContent from '../Education/Education'
import ProjectsContent from '../Projects/Projects'

/* ===================== КОМПОНЕНТ ===================== */
export default function Print() {

    /* --- Автоматически открываем диалог печати --- */
    useEffect(() => {
        setTimeout(() => window.print(), 500)
    }, [])

    return (
        <div className={styles.print}>

            {/* --- Заголовок документа --- */}
            <div className={styles.docHeader}>
                <h1>Vadim Antipov</h1>
                <p>Full Stack Developer · Java + React · Microservices</p>
                <p>vadim.antipov@gmx.de · +49 174 48 43 902 · Regensburg, Bayern</p>
            </div>

            {/* --- Страницы --- */}
            <section className={styles.section}>
                <AboutContent />
            </section>

            <div className={styles.pageBreak} />

            <section className={styles.section}>
                <EducationContent />
            </section>

            <div className={styles.pageBreak} />

            <section className={styles.section}>
                <ProjectsContent />
            </section>

        </div>
    )
}