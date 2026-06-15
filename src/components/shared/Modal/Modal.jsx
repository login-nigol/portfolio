// src/components/shared/Modal/Modal.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.css'

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
export default function Modal({ isOpen, onClose, src, title }) {

    /* --- Закрытие по Escape --- */
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    /* --- Блокируем скролл страницы когда модал открыт --- */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                /* --- Затемнённый фон --- */
                <motion.div
                    className={styles.overlay}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    {/* --- Контент модала --- */}
                    <motion.div
                        className={styles.modal}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        /* --- Клик внутри не закрывает --- */
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* --- Шапка модала --- */}
                        <div className={styles.header}>
                            <h3 className={styles.title}>{title}</h3>
                            <button
                                className={styles.close}
                                onClick={onClose}
                                aria-label="Schließen"
                            >
                                ✕
                            </button>
                        </div>

                        {/* --- PDF превью --- */}
                        <iframe
                            className={styles.iframe}
                            src={src}
                            title={title}
                        />

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}