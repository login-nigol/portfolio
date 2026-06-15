// src/components/shared/Modal/Modal.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.css'

/* ===================== ОПРЕДЕЛЯЕМ ТИП ФАЙЛА ===================== */
function isPdf(src) {
    return src?.toLowerCase().endsWith('.pdf')
}

/* ===================== АНИМАЦИЯ ===================== */
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
}

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

/* ===================== КОМПОНЕНТ ===================== */
/* --- files: массив { src, title } для листания --- */
/* --- src/title: одиночный файл (обратная совместимость) --- */
export default function Modal({ isOpen, onClose, src, title, files }) {

    /* --- Текущий индекс при листании --- */
    const [index, setIndex] = useState(0)

    /* --- Сбрасываем индекс при открытии --- */
    useEffect(() => { if (isOpen) setIndex(0) }, [isOpen])

    /* --- Определяем режим: галерея или одиночный файл --- */
    const isGallery = files && files.length > 1
    const current = isGallery ? files[index] : { src, title }
    const total = isGallery ? files.length : 1

    /* --- Навигация --- */
    const prev = () => setIndex(i => (i - 1 + total) % total)
    const next = () => setIndex(i => (i + 1) % total)

    /* --- Закрытие по Escape, стрелки клавиатуры --- */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, index])

    /* --- Блокируем скролл --- */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.modal}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* --- Шапка --- */}
                        <div className={styles.header}>
                            <h3 className={styles.title}>{current.title}</h3>
                            {/* --- Счётчик страниц --- */}
                            {isGallery && (
                                <span className={styles.counter}>{index + 1} / {total}</span>
                            )}
                            <button className={styles.close} onClick={onClose} aria-label="Schließen">✕</button>
                        </div>

                        {/* --- Контент --- */}
                        {isPdf(current.src)
                            ? <iframe className={styles.iframe} src={current.src} title={current.title} />
                            : <div className={styles.imgWrap}>
                                <img src={current.src} alt={current.title} className={styles.img} />
                            </div>
                        }

                        {/* --- Навигация листания --- */}
                        {isGallery && (
                            <div className={styles.nav}>
                                <button className={styles.navBtn} onClick={prev} aria-label="Zurück">‹</button>
                                <button className={styles.navBtn} onClick={next} aria-label="Weiter">›</button>
                            </div>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}