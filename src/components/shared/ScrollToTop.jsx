// src/components/shared/ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        /* --- При смене роута скроллим контент вверх --- */
        document.querySelector('main')?.scrollTo(0, 0)
    }, [pathname])

    return null
}