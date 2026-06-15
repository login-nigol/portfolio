// src/App.jsx

/* ===================== ИМПОРТЫ ===================== */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* --- Лейаут компоненты --- */
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

/* --- Страницы --- */
import CoverLetter from './pages/CoverLetter/CoverLetter'
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'

/* --- Глобальные стили --- */
import './styles/global.css'

/* ===================== КОМПОНЕНТ ===================== */
export default function App() {
  return (
    /* --- Роутер --- */
    <BrowserRouter>

      {/* --- Шапка --- */}
      <Header />

      {/* --- Основной лейаут --- */}
      <div className="layout">

        {/* --- Сайдбар с навигацией --- */}
        <Sidebar />

        {/* --- Контентная область --- */}
        <main className="content">
          <Routes>
            <Route path="/" element={<CoverLetter />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

      </div>

      {/* --- Подвал --- */}
      <Footer />

    </BrowserRouter>
  )
}