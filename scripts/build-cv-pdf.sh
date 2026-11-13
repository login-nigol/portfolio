#!/usr/bin/env bash
# =====================================================================
# Сборка PDF-резюме из страниц /cv/de и /cv/en.
# Запуск из корня репо (Ubuntu):  bash scripts/build-cv-pdf.sh
# Нужны: node/npm и Google Chrome (или Chromium) в PATH.
# =====================================================================
set -euo pipefail

# --- Порт локального превью и папка для PDF ---
PORT=4199
OUT_DIR="public/cv"
CHROME="${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser)}"

# --- Собираем сайт и поднимаем превью в фоне ---
npm run build
npx vite preview --port "$PORT" --strictPort > /dev/null 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID"' EXIT
sleep 3

mkdir -p "$OUT_DIR"

# --- Печать одной языковой версии в PDF ---
print_cv() {
  local lang="$1"
  local file="$2"
  "$CHROME" --headless=new --no-sandbox --disable-gpu \
    --no-pdf-header-footer --virtual-time-budget=5000 \
    --print-to-pdf="$OUT_DIR/$file" \
    "http://localhost:$PORT/cv/$lang"
}

print_cv de "Lebenslauf_Vadim_Antipov_DE.pdf"
print_cv en "CV_Vadim_Antipov_EN.pdf"

echo "Готово: $OUT_DIR"
