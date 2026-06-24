// src/components/shared/OrbitCanvas/OrbitCanvas.jsx

import { useEffect, useRef } from 'react'

/* --- Символы на орбитах --- */
const SYMBOLS = ['<', '>', '{', '}', '()', '=>', ';;', '[]', '/*', '*/']

/* --- Орбиты: радиус, скорость, наклон --- */
const ORBITS = [
    { radius: 1.15, speed: 0.004, tilt: 15, symbolCount: 3 },
    { radius: 1.35, speed: -0.003, tilt: 60, symbolCount: 4 },
    { radius: 1.55, speed: 0.002, tilt: 135, symbolCount: 3 },
]

export default function OrbitCanvas({ size = 240 }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const cx = size / 2
        const cy = size / 2

        /* --- Инициализируем частицы для каждой орбиты --- */
        const particles = ORBITS.flatMap(({ radius, speed, tilt, symbolCount }) =>
            Array.from({ length: symbolCount }, (_, i) => ({
                angle: (i / symbolCount) * Math.PI * 2,
                radius: (size / 2) * radius,
                speed,
                tilt: (tilt * Math.PI) / 180,
                symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            }))
        )

        let animId

        const draw = () => {
            ctx.clearRect(0, 0, size, size)

            particles.forEach(p => {
                p.angle += p.speed

                /* --- Позиция с наклоном орбиты --- */
                const x = cx + p.radius * Math.cos(p.angle)
                const y = cy + p.radius * Math.sin(p.angle) * Math.sin(p.tilt)

                /* --- Рисуем символ --- */
                ctx.font = '0.75em Fira Code, monospace'
                ctx.fillStyle = 'rgba(74, 144, 184, 0.7)'
                ctx.fillText(p.symbol, x, y)
            })

            animId = requestAnimationFrame(draw)
        }

        draw()
        return () => cancelAnimationFrame(animId)
    }, [size])

    return (
        <canvas
            ref={canvasRef}
            width={size}
            height={size}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            aria-hidden="true"
        />
    )
}