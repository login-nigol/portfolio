# Portfolio – Vadim Antipov

Persönliche Website und Lebenslauf: **vadim-antipov.vercel.app**

## Aufbau

- `src/data/cv.js` – **einzige Datenquelle** (DE + EN) für Website und PDF-Lebenslauf
- Seiten: Profil · Projekte · Werdegang · Kontakt, Sprache DE/EN umschaltbar
- `/cv/de`, `/cv/en` – Druckversion (A4) → `public/cv/*.pdf`

## PDF neu erzeugen

```bash
bash scripts/build-cv-pdf.sh
```

## Stack

React 19 · Vite · React Router · Framer Motion · CSS Modules · Inter (self-hosted) · Vercel
