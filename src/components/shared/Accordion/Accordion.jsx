// src/components/shared/Accordion/Accordion.jsx

/* ===================== ИМПОРТЫ ===================== */
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Accordion.module.css'

/* ===================== АНИМАЦИЯ ===================== */
const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

/* ===================== КОМПОНЕНТ ===================== */
/* --- isOpen и onToggle управляются снаружи --- */
export default function Accordion({ title, children, isOpen, onToggle }) {
    return (
        <div className={styles.accordion}>

            <button
                className={styles.trigger}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className={styles.title}>{title}</span>
                <motion.span
                    className={styles.arrow}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ▾
                </motion.span>
            </button>

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