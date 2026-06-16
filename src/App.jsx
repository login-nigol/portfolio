// src/App.jsx

/* ===================== ИМПОРТЫ ===================== */
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

/* --- Лейаут --- */
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

/* --- Страницы --- */
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Print from './pages/Print/Print'

/* --- Стили --- */
import './styles/global.css'
import styles from './styles/App.module.css'

/* ===================== АНИМИРОВАННЫЙ OUTLET ===================== */
/* --- Outlet — место куда подставляется текущая страница --- */
function AnimatedOutlet() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  )
}

/* ===================== ЛЕЙАУТ ===================== */
function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.layout}>
        <main className={styles.content}>
          <AnimatedOutlet />
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
          <Route path="/"     element={<About />}     />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}