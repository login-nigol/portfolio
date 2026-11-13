// src/components/Header/Header.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang, LANGS } from '../../i18n/LangContext'
import { contacts, cvFiles } from '../../data/cv'
import styles from './Header.module.css'

/* ===================== НАВИГАЦИЯ ===================== */
/* --- Ключи подписей берутся из t.nav --- */
const NAV_ITEMS = [
  { to: '/', key: 'profile' },
  { to: '/projekte', key: 'projects' },
  { to: '/werdegang', key: 'career' },
  { to: '/kontakt', key: 'contact' },
]

/* ===================== КОМПОНЕНТ ===================== */
export default function Header() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  /* --- Закрыть мобильное меню (после клика по ссылке или вне меню) --- */
  const closeMenu = () => setMenuOpen(false)

  /* --- Класс активной ссылки --- */
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* ===== ЛОГОТИП-ИМЯ ===== */}
        <Link
          to="/"
          className={styles.brand}
          onClick={closeMenu}
        >
          {contacts.name}
        </Link>

        {/* ===== НАВИГАЦИЯ (десктоп — в строку, мобила — выпадашка) ===== */}
        <nav
          id="main-nav"
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
          aria-label="Hauptnavigation"
        >
          {NAV_ITEMS.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={linkClass}
              onClick={closeMenu}
            >
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>

        {/* ===== ДЕЙСТВИЯ: язык + PDF + бургер ===== */}
        <div className={styles.actions}>

          {/* --- Переключатель языка --- */}
          <div
            className={styles.langSwitch}
            role="group"
            aria-label="Sprache / Language"
          >
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                className={code === lang ? `${styles.langBtn} ${styles.langActive}` : styles.langBtn}
                aria-pressed={code === lang}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* --- Скачать резюме на текущем языке --- */}
          <a
            className={styles.cvBtn}
            href={cvFiles[lang]}
            download
            aria-label={t.downloadCv}
          >
            {/* --- На мобиле — короткая подпись, чтобы шапка влезла --- */}
            <span className={styles.cvFull}>{t.downloadCv}</span>
            <span className={styles.cvShort}>PDF</span>
          </a>

          {/* --- Бургер (только мобила) --- */}
          <button
            type="button"
            className={styles.burger}
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={menuOpen ? `${styles.burgerIcon} ${styles.burgerIconOpen}` : styles.burgerIcon} />
          </button>
        </div>
      </div>

      {/* ===== ОВЕРЛЕЙ: закрытие меню по клику вне (наш стандарт) ===== */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
