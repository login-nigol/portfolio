// src/components/shared/CodeCanvas.jsx

/* ===================== ИМПОРТЫ ===================== */
import { useEffect, useRef } from 'react'
import { snippets } from './codeSnippets'

/* ===================== ЦВЕТА ТОКЕНОВ (как в VS Code) ===================== */
const TOKEN_COLORS = {
    keyword: '#c678dd',
    string: '#98c379',
    function: '#61afef',
    number: '#d19a66',
    comment: '#5c6370',
    tag: '#e06c75',
    default: '#abb2bf',
}

/* ===================== ОПРЕДЕЛЯЕМ ЦВЕТ ТОКЕНА ===================== */
function tokenColor(word) {
    if (/^(import|export|default|const|let|var|return|function|class|new|from|if|else|async|await|void|private|public)$/.test(word))
        return TOKEN_COLORS.keyword
    if (/^['\"`].*['\"`]$/.test(word) || word.startsWith("'") || word.startsWith('"'))
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

/* ===================== ПРОПСЫ ПО УМОЛЧАНИЮ ===================== */
/* --- opacity: базовое значение + случайный диапазон поверх --- */
const defaultProps = {
    fontSize: 15,
    lineGap: 120,
    baseOpacity: 0.25,   /* минимальная прозрачность колонки */
    opacityRange: 0.15,   /* сколько добавляется случайно сверху */
    minSpeed: 0.3,
    maxSpeed: 0.8,
}

/* ===================== КОМПОНЕНТ ===================== */
export default function CodeCanvas({
    fontSize = defaultProps.fontSize,
    lineGap = defaultProps.lineGap,
    baseOpacity = defaultProps.baseOpacity,
    opacityRange = defaultProps.opacityRange,
    minSpeed = defaultProps.minSpeed,
    maxSpeed = defaultProps.maxSpeed,
}) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        /* --- Подгоняем размер канваса под родителя --- */
        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const FONT = `${fontSize}px 'Fira Code', monospace`

        /* --- Создаём колонки равномерно по ширине --- */
        const columns = Array.from(
            { length: Math.floor(canvas.width / lineGap) },
            (_, i) => ({
                x: i * lineGap + Math.random() * 20,
                y: Math.random() * -500,
                speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
                snippet: snippets[Math.floor(Math.random() * snippets.length)],
                opacity: baseOpacity + Math.random() * opacityRange,
            })
        )

        /* ===================== АНИМАЦИОННЫЙ LOOP ===================== */
        let animId
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = FONT

            columns.forEach(col => {
                col.y += col.speed

                /* --- Сброс колонки наверх --- */
                if (col.y > canvas.height + 20) {
                    col.y = Math.random() * -200
                    col.snippet = snippets[Math.floor(Math.random() * snippets.length)]
                    col.speed = minSpeed + Math.random() * (maxSpeed - minSpeed)
                }

                /* --- Рисуем слова с подсветкой синтаксиса --- */
                const words = col.snippet.split(' ')
                let offsetX = col.x

                words.forEach(word => {
                    ctx.globalAlpha = col.opacity
                    ctx.fillStyle = tokenColor(word)
                    ctx.fillText(word + ' ', offsetX, col.y)
                    offsetX += ctx.measureText(word + ' ').width
                })
            })

            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [fontSize, lineGap, baseOpacity, opacityRange, minSpeed, maxSpeed])

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            aria-hidden="true"
        />
    )
}