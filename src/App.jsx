// src/App.jsx

/* ===================== ИМПОРТЫ ===================== */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

/* --- Лейаут компоненты --- */
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

/* --- Страницы --- */
import CoverLetter from './pages/CoverLetter/CoverLetter'
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'

/* --- Стили --- */
import './styles/global.css'
import styles from './styles/App.module.css'

/* ===================== АНИМИРОВАННЫЕ РОУТЫ ===================== */
/* AnimatePresence должен видеть location — выносим в отдельный компонент */
function AnimatedRoutes() {
  const location = useLocation()

  return (
    /* --- key={location.pathname} — триггер для анимации при смене роута --- */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CoverLetter />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  )
}

/* ===================== ГЛАВНЫЙ КОМПОНЕНТ ===================== */
export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>

        {/* --- Шапка --- */}
        <Header />

        <div className={styles.layout}>

          {/* --- Контент со сменой роутов --- */}
          <main className={styles.content}>
            <AnimatedRoutes />
          </main>

          {/* --- Боковая навигация --- */}
          <Sidebar />

        </div>

        {/* --- Подвал --- */}
        <Footer />

      </div>
    </BrowserRouter>
  )
}