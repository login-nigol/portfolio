// src/App.jsx

/* ===================== ИМПОРТЫ ===================== */
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { LangProvider } from './i18n/LangContext'

/* --- Лейаут --- */
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

/* --- Страницы --- */
import Profile from './pages/Profile/Profile'
import Projects from './pages/Projects/Projects'
import Career from './pages/Career/Career'
import Contact from './pages/Contact/Contact'
import CvPrint from './pages/CvPrint/CvPrint'

/* --- Стили --- */
import '@fontsource-variable/inter'
import './styles/global.css'
import styles from './App.module.css'

/* ===================== ЛЕЙАУТ ===================== */
/* --- Шапка сверху, подвал прижат вниз --- */
function Layout() {
  return (
    <div className={styles.layout}>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

/* ===================== РОУТЫ ===================== */
export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>

          {/* --- Печатное резюме: без шапки и подвала --- */}
          <Route path="/cv/:lang" element={<CvPrint />} />

          {/* --- Сайт --- */}
          <Route element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="/projekte" element={<Projects />} />
            <Route path="/werdegang" element={<Career />} />
            <Route path="/kontakt" element={<Contact />} />

            {/* --- Старые адреса → новые (ссылки из старых откликов не ломаем) --- */}
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/education" element={<Navigate to="/werdegang" replace />} />
            <Route path="/projects" element={<Navigate to="/projekte" replace />} />
            <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
            <Route path="/print" element={<Navigate to="/cv/de" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
