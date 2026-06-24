// src/components/shared/SvgClock/SvgClock.jsx

import { useEffect, useRef } from 'react'

/* ===================== КОНСТАНТЫ ===================== */
const DEG_TO_RAD = Math.PI / 180
const HOUR_DEG = 360 / 12
const SECOND_DEG = 360 / 60
const MINUTE_DEG = 360 / 60
const SVG_NS = 'http://www.w3.org/2000/svg'

function createSvgEl(tag) {
    return document.createElementNS(SVG_NS, tag)
}

/* ===================== СБОРКА ЦИФЕРБЛАТА ===================== */
function buildClock(rootEl, diameter) {
    rootEl.innerHTML = ''

    const radius = diameter / 2
    const strokeW = radius * 0.03
    const svgSize = diameter + strokeW
    const cx = svgSize / 2
    const cy = svgSize / 2

    const svg = createSvgEl('svg')
    svg.setAttribute('width', svgSize)
    svg.setAttribute('height', svgSize)
    svg.setAttribute('viewBox', `0 0 ${svgSize} ${svgSize}`)
    rootEl.appendChild(svg)

    /* --- Циферблат --- */
    const face = createSvgEl('circle')
    face.setAttribute('class', 'clock-face')
    face.setAttribute('cx', cx)
    face.setAttribute('cy', cy)
    face.setAttribute('r', radius)
    face.setAttribute('stroke-width', strokeW)
    face.setAttribute('fill', 'transparent')
    face.setAttribute('stroke', '#4a90b8')

    /* --- Секундная стрелка --- */
    const secH = radius * 0.80
    const secTail = radius * 0.15
    const secW = radius * 0.015
    const secondHand = createSvgEl('line')
    secondHand.setAttribute('id', 'secondHand')
    secondHand.setAttribute('x1', cx)
    secondHand.setAttribute('y1', cy + secTail)
    secondHand.setAttribute('x2', cx)
    secondHand.setAttribute('y2', cy - secH)
    secondHand.setAttribute('stroke', '#f0c040')
    secondHand.setAttribute('stroke-width', secW)
    secondHand.setAttribute('stroke-linecap', 'round')

    /* --- Минутная стрелка --- */
    const minH = radius * 0.65
    const minTail = radius * 0.13
    const minW = radius * 0.05
    const minuteHand = createSvgEl('line')
    minuteHand.setAttribute('id', 'minuteHand')
    minuteHand.setAttribute('x1', cx)
    minuteHand.setAttribute('y1', cy + minTail)
    minuteHand.setAttribute('x2', cx)
    minuteHand.setAttribute('y2', cy - minH)
    minuteHand.setAttribute('stroke', '#4a90b8')
    minuteHand.setAttribute('stroke-width', minW)
    minuteHand.setAttribute('stroke-linecap', 'round')

    /* --- Часовая стрелка --- */
    const hourH = radius * 0.50
    const hourTail = radius * 0.10
    const hourW = radius * 0.05
    const hourHand = createSvgEl('rect')
    hourHand.setAttribute('id', 'hourHand')
    hourHand.setAttribute('x', cx - hourW / 2)
    hourHand.setAttribute('y', cy - hourH)
    hourHand.setAttribute('width', hourW)
    hourHand.setAttribute('height', hourH + hourTail)
    hourHand.setAttribute('rx', hourW * 0.6)
    hourHand.setAttribute('fill', '#4a90b8')

    /* --- Болтик --- */
    const bolt = createSvgEl('circle')
    bolt.setAttribute('cx', cx)
    bolt.setAttribute('cy', cy)
    bolt.setAttribute('r', radius * 0.06)
    bolt.setAttribute('fill', '#f0c040')

    /* --- Цифры 1–12 --- */
    const numbersR = radius * 0.80
    const numCircleR = radius * 0.13
    const fontSize = radius * 0.20

    for (let hour = 1; hour <= 12; hour++) {
        const angleRad = hour * HOUR_DEG * DEG_TO_RAD
        const x = cx + numbersR * Math.sin(angleRad)
        const y = cy - numbersR * Math.cos(angleRad)

        const ring = createSvgEl('circle')
        ring.setAttribute('cx', x)
        ring.setAttribute('cy', y)
        ring.setAttribute('r', numCircleR)
        ring.setAttribute('fill', 'transparent')
        ring.setAttribute('stroke', '#4a90b8')
        ring.setAttribute('stroke-width', strokeW * 0.5)
        svg.appendChild(ring)

        const text = createSvgEl('text')
        text.textContent = hour
        text.setAttribute('x', x)
        text.setAttribute('y', y + fontSize * 0.33)
        text.setAttribute('text-anchor', 'middle')
        text.setAttribute('font-size', fontSize)
        text.setAttribute('fill', '#4a90b8')
        svg.appendChild(text)
    }

    /* --- Цифровые часы --- */
    const boxW = radius * 0.58
    const boxH = radius * 0.14
    const boxX = cx - boxW / 2
    const boxY = cy + radius * 0.585 - boxH

    const digitalBox = createSvgEl('rect')
    digitalBox.setAttribute('x', boxX)
    digitalBox.setAttribute('y', boxY)
    digitalBox.setAttribute('width', boxW)
    digitalBox.setAttribute('height', boxH)
    digitalBox.setAttribute('rx', boxH * 0.2)
    digitalBox.setAttribute('fill', 'transparent')
    digitalBox.setAttribute('stroke', '#4a90b8')
    digitalBox.setAttribute('stroke-width', strokeW * 0.5)

    const digitalClock = createSvgEl('text')
    digitalClock.textContent = '00:00:00'
    digitalClock.setAttribute('x', cx)
    digitalClock.setAttribute('y', cy + radius * 0.55)
    digitalClock.setAttribute('font-size', radius * 0.11)
    digitalClock.setAttribute('text-anchor', 'middle')
    digitalClock.setAttribute('fill', '#2c3e50')

    svg.appendChild(face)
    svg.appendChild(digitalBox)
    svg.appendChild(digitalClock)
    svg.appendChild(hourHand)
    svg.appendChild(minuteHand)
    svg.appendChild(secondHand)
    svg.appendChild(bolt)

    return { cx, cy, secondHand, minuteHand, hourHand, digitalClock }
}

/* ===================== КОМПОНЕНТ ===================== */
export default function SvgClock({ diameter = 240 }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const root = containerRef.current
        const clockObj = buildClock(root, diameter)

        /* --- Обновляем стрелки каждую секунду --- */
        const tick = () => {
            const now = new Date()
            const sec = now.getSeconds()
            const min = now.getMinutes()
            const hour = now.getHours()

            const secAngle = sec * SECOND_DEG
            const minAngle = (min + sec / 60) * MINUTE_DEG
            const hourAngle = (hour % 12 + min / 60) * HOUR_DEG

            clockObj.secondHand.setAttribute('transform', `rotate(${secAngle} ${clockObj.cx} ${clockObj.cy})`)
            clockObj.minuteHand.setAttribute('transform', `rotate(${minAngle} ${clockObj.cx} ${clockObj.cy})`)
            clockObj.hourHand.setAttribute('transform', `rotate(${hourAngle} ${clockObj.cx} ${clockObj.cy})`)

            clockObj.digitalClock.textContent =
                String(hour).padStart(2, '0') + ':' +
                String(min).padStart(2, '0') + ':' +
                String(sec).padStart(2, '0')
        }

        tick()
        const timerId = setInterval(tick, 1000)
        return () => clearInterval(timerId)
    }, [diameter])

    return <div ref={containerRef} style={{ width: diameter, height: diameter }} />
}