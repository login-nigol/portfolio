// src/components/Header/CodeCanvas.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect, useRef } from 'react'
import { snippets } from './codeSnippets'

/* ===================== ЦВЕТА ТОКЕНОВ (как в VS Code) ===================== */
const TOKEN_COLORS = {
    keyword: '#c678dd', /* --- фиолетовый: import, const, return --- */
    string: '#98c379', /* --- зелёный: строки в кавычках --- */
    function: '#61afef', /* --- голубой: названия функций --- */
    number: '#d19a66', /* --- оранжевый: числа --- */
    comment: '#5c6370', /* --- серый: комментарии --- */
    tag: '#e06c75', /* --- красный: JSX теги --- */
    default: '#abb2bf', /* --- светло-серый: всё остальное --- */
}

/* ===================== ОПРЕДЕЛЯЕМ ЦВЕТ ТОКЕНА ===================== */
function tokenColor(word) {
    if (/^(import|export|default|const|let|var|return|function|class|new|from|if|else|async|await|void|private|public)$/.test(word))
        return TOKEN_COLORS.keyword
    if (/^['"`].*['"`]$/.test(word) || word.startsWith("'") || word.startsWith('"'))
        return TOKEN_COLORS.string
    if (/^\d+$/.test(word))
        return TOKEN_COLORS.number
    if (/^\/\//.test(word))
        return TOKEN_COLORS.comment
    if (/^<\/?[A-Z]/.test(word))
        return TOKEN_COLORS.tag
    if (/^[a-z]+\(/.test(word))
        return TOKEN_COLORS.function
    return TOKEN_COLORS.default
}

/* ===================== КОМПОНЕНТ КАНВАСА ===================== */
export default function CodeCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        /* --- Подгоняем размер канваса под хедер --- */
        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        /* --- Настройки колонок --- */
        const FONT_SIZE = 15
        const FONT = `${FONT_SIZE}px 'Fira Code', monospace`
        const LINE_GAP = 120  /* --- расстояние между колонками --- */

        /* --- Создаём колонки равномерно по ширине --- */
        const columns = Array.from(
            { length: Math.floor(canvas.width / LINE_GAP) },
            (_, i) => ({
                x: i * LINE_GAP + Math.random() * 20,
                y: Math.random() * -500,           /* --- стартуем выше экрана --- */
                speed: 0.3 + Math.random() * 0.8,      /* --- разная скорость --- */
                snippet: snippets[Math.floor(Math.random() * snippets.length)],
                opacity: 0.35 + Math.random() * 0.3,    /* --- полупрозрачность --- */
            })
        )

        /* ===================== АНИМАЦИОННЫЙ LOOP ===================== */
        let animId
        const draw = () => {
            /* --- Очищаем канвас --- */
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.font = FONT

            columns.forEach(col => {
                /* --- Двигаем колонку вниз --- */
                col.y += col.speed

                /* --- Когда вышла за низ — сбрасываем наверх --- */
                if (col.y > canvas.height + 20) {
                    col.y = Math.random() * -200
                    col.snippet = snippets[Math.floor(Math.random() * snippets.length)]
                    col.speed = 0.4 + Math.random() * 0.8
                }

                /* --- Рисуем слова сниппета с цветом --- */
                const words = col.snippet.split(' ')
                let offsetX = col.x

                words.forEach(word => {
                    const color = tokenColor(word)
                    ctx.globalAlpha = col.opacity
                    ctx.fillStyle = color
                    ctx.fillText(word + ' ', offsetX, col.y)
                    offsetX += ctx.measureText(word + ' ').width
                })
            })

            animId = requestAnimationFrame(draw)
        }

        draw()

        /* --- Чистим при размонтировании --- */
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true" />
}