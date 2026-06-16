// src/App.jsx

/* ===================== ИМПОРТЫ ===================== */
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

/* --- Лейаут --- */
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/shared/ScrollToTop'

/* --- Страницы --- */
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Print from './pages/Print/Print'

/* --- Стили --- */
import './styles/global.css'
import styles from './styles/App.module.css'

/* ===================== ЛЕЙАУТ ===================== */
function Layout() {
  const location = useLocation()
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Header />
      <div className={styles.layout}>
        <main className={styles.content}>
          {/* --- AnimatePresence для анимации между роутами --- */}
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

/* ===================== РОУТЫ ===================== */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* --- /print без лейаута --- */}
        <Route path="/print" element={<Print />} />

        {/* --- Все остальные через Layout --- */}
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}