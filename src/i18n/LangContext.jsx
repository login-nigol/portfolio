// src/i18n/LangContext.jsx
/* eslint-disable react-refresh/only-export-components */

/* ===================== ИМПОРТЫ ===================== */
import { createContext, useContext, useState, useCallback } from 'react'
import { cv } from '../data/cv'

/* ===================== КОНСТАНТЫ ===================== */
/* --- Ключ в localStorage: запоминаем выбранный язык посетителя --- */
const STORAGE_KEY = 'portfolio.lang'
const DEFAULT_LANG = 'de'
export const LANGS = ['de', 'en']

/* ===================== ТЕКСТЫ ИНТЕРФЕЙСА ===================== */
/* --- Только подписи UI; содержимое резюме живёт в data/cv.js --- */
export const ui = {
  de: {
    nav: { profile: 'Profil', projects: 'Projekte', career: 'Werdegang', contact: 'Kontakt' },
    downloadCv: 'Lebenslauf (PDF)',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    skills: 'Technologien',
    projects: 'Projekte',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    languages: 'Sprachen',
    contact: 'Kontakt',
    contactLead: 'Am schnellsten erreichen Sie mich per E-Mail oder Telefon.',
    allProjects: 'Alle Projekte',
    phone: 'Telefon',
    email: 'E-Mail',
  },
  en: {
    nav: { profile: 'Profile', projects: 'Projects', career: 'Experience', contact: 'Contact' },
    downloadCv: 'CV (PDF)',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    languages: 'Languages',
    contact: 'Contact',
    contactLead: 'The fastest way to reach me is by email or phone.',
    allProjects: 'All projects',
    phone: 'Phone',
    email: 'Email',
  },
}

/* ===================== ЧТЕНИЕ / ЗАПИСЬ ЯЗЫКА ===================== */
/* --- localStorage может быть недоступен (приватный режим) → try/catch --- */
function readLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGS.includes(saved) ? saved : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* не критично: язык просто не запомнится */
  }
}

/* ===================== КОНТЕКСТ ===================== */
const LangContext = createContext(null)

/* --- Провайдер: держит язык и отдаёт тексты --- */
export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readLang)

  /* --- Смена языка + обновление <html lang> для скринридеров и SEO --- */
  const setLang = useCallback((next) => {
    setLangState(next)
    saveLang(next)
    document.documentElement.lang = next
  }, [])

  const value = {
    lang,
    setLang,
    t: ui[lang],
    data: cv[lang],
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

/* --- Хук доступа к языку --- */
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
