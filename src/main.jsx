// src/main.jsx

/* ===================== ИМПОРТЫ ===================== */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

/* ===================== РЕНДЕР ===================== */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)