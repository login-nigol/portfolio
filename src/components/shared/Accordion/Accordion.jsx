// src/components/shared/Accordion/Accordion.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Accordion.module.css'

/* ===================== АНИМАЦИЯ КОНТЕНТА ===================== */
const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

/* ===================== КОМПОНЕНТ ===================== */
export default function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className={styles.accordion}>

            {/* --- Заголовок — кнопка открытия --- */}
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(prev => !prev)}
                aria-expanded={isOpen}
            >
                <span className={styles.title}>{title}</span>

                {/* --- Стрелка анимируется при открытии --- */}
                <motion.span
                    className={styles.arrow}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ▾
                </motion.span>
            </button>

            {/* --- Контент с анимацией --- */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className={styles.content}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className={styles.inner}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}