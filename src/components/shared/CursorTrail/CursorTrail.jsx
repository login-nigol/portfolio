// src/components/shared/CursorTrail/CursorTrail.jsx

import { useEffect, useRef } from 'react'

/* --- Символы которые летят за курсором --- */
const SYMBOLS = ['<', '>', '{', '}', '(', ')', ';', '=', '=>', '//', 'const', 'let']

export default function CursorTrail() {

    const containerRef = useRef(null)
    
    const lastPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const container = containerRef.current


        const handleMouseMove = (e) => {
            /* --- Спавним символ только если мышь сдвинулась на 40px --- */
            const dx = e.clientX - lastPos.current.x
            const dy = e.clientY - lastPos.current.y
            if (Math.sqrt(dx * dx + dy * dy) < 40) return
            lastPos.current = { x: e.clientX, y: e.clientY }
            /* --- Создаём символ в позиции курсора --- */
            const span = document.createElement('span')
            span.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]

            /* --- Стили символа --- */
            span.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-family: 'Fira Code', monospace;
        font-size: ${0.6 + Math.random() * 0.4}em;
        color: var(--color-accent);
        opacity: 0.8;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.6s ease, transform 0.6s ease;
      `

            container.appendChild(span)

            /* --- Анимация исчезновения --- */
            requestAnimationFrame(() => {
                span.style.opacity = '0'
                span.style.transform = `translate(-50%, -${1 + Math.random() * 2}em)`
            })

            /* --- Удаляем из DOM после анимации --- */
            setTimeout(() => span.remove(), 600)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return <div ref={containerRef} />
}