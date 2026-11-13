// src/data/cv.js

/* =====================================================================
   ЕДИНЫЙ ИСТОЧНИК ПРАВДЫ: все данные резюме (DE + EN).
   Из этого файла рендерятся и страницы сайта, и печатное резюме
   (/cv/de, /cv/en → PDF в public/cv). Правим только здесь.
   ===================================================================== */

/* ===================== КОНТАКТЫ (общие для всех языков) ===================== */
export const contacts = {
  name: 'Vadim Antipov',
  email: 'vadim.antipov@gmx.de',
  phone: '+49 174 48 43 902',
  phoneHref: 'tel:+491744843902',
  city: 'Regensburg',
  linkedin: 'https://www.linkedin.com/in/vadimantipov',
  linkedinLabel: 'linkedin.com/in/vadimantipov',
  github: 'https://github.com/login-nigol',
  githubLabel: 'github.com/login-nigol',
  website: 'https://vadim-antipov.vercel.app',
  websiteLabel: 'vadim-antipov.vercel.app',
}

/* ===================== ФАЙЛЫ PDF-РЕЗЮМЕ ===================== */
/* --- Генерируются скриптом scripts/build-cv-pdf.sh --- */
export const cvFiles = {
  de: '/cv/Lebenslauf_Vadim_Antipov_DE.pdf',
  en: '/cv/CV_Vadim_Antipov_EN.pdf',
}

/* ===================== СТЕК (одинаковый для DE и EN) ===================== */
export const skills = [
  {
    group: 'Backend',
    items: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'REST', 'JPA / Hibernate', 'JUnit 5', 'Mockito'],
  },
  {
    group: 'Frontend',
    items: ['React 19', 'TypeScript', 'JavaScript (ES2023)', 'Vite', 'TanStack Query', 'React Router', 'HTML5 / CSS3', 'Vitest'],
  },
  {
    group: 'Daten',
    groupEn: 'Data',
    items: ['PostgreSQL', 'Liquibase', 'MinIO (S3)'],
  },
  {
    group: 'DevOps',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'nginx', "Let's Encrypt"],
  },
  {
    group: 'Architektur',
    groupEn: 'Architecture',
    items: ['Microservices', 'Transactional Outbox', 'Clean Code', 'SOLID'],
  },
]

/* ===================== ТЕКСТЫ ПО ЯЗЫКАМ ===================== */
export const cv = {

  /* ---------------------------- DEUTSCH ---------------------------- */
  de: {
    title: 'Full-Stack-Entwickler · Java / Spring Boot · React / TypeScript',
    location: 'Regensburg · offen für Remote',

    /* --- Профиль: 3 предложения, без «воды» --- */
    profile: [
      'Full-Stack-Entwickler mit Schwerpunkt Java/Spring Boot und React.',
      'Seit 2026 entwickle ich eigenständig LifeQR – eine SaaS-Plattform aus 7 Microservices mit eigener CI/CD-Pipeline und Betrieb auf einem Linux-Server.',
      'Studium als Ingenieur-Programmierer, von der IHK als gleichwertig mit Fachinformatiker/Anwendungsentwicklung anerkannt.',
    ],
    seeking: 'Gesucht: Stelle als Java- oder Full-Stack-Entwickler (Junior/Mid) – remote oder in Regensburg.',

    /* --- Проекты --- */
    projects: [
      {
        id: 'lifeqr',
        title: 'LifeQR',
        subtitle: 'SaaS-Plattform für digitales Familiengedächtnis',
        period: '01/2026 – heute',
        status: 'In Entwicklung · Testbetrieb',
        url: 'https://lifeqr.kz',
        urlLabel: 'lifeqr.kz',
        summary: 'Stammbaum, Gedenkseiten mit Fotos und Biografien, QR-Tafeln und private Familien-Chats.',
        bullets: [
          '7 Spring-Boot-Microservices (auth, family, memorial, media, chat, notify, billing), je eigene PostgreSQL-Datenbank mit Liquibase-Migrationen',
          'Sicherheit: Spring Security (deny by default), JWT mit Refresh-Token-Rotation, Rate Limiting, interne Endpunkte nur per Shared Secret',
          'Zuverlässige Events zwischen Services über das Transactional-Outbox-Pattern (PostgreSQL, Retries)',
          'Frontend: React 19, Vite, TanStack Query, PWA, 5 Sprachen (i18n), schrittweise Migration auf TypeScript',
          'Betrieb: Docker Compose auf Linux-VPS, nginx mit TLS, Medien in MinIO; CI/CD mit GitHub Actions pro Service inkl. Healthchecks',
          'Unit-Tests mit JUnit 5, Mockito und Vitest',
        ],
        stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'React 19', 'TypeScript', 'Docker', 'GitHub Actions'],
        image: 'lifeqr',
      },
      {
        id: 'pixora',
        title: 'Pixora A. Studio',
        subtitle: 'Grafikeditor im Browser',
        period: '10/2025 – heute',
        status: 'Online',
        url: 'https://login-nigol.github.io/HOMEWORK/pixora-a-studio/src/',
        urlLabel: 'Demo öffnen',
        summary: 'Ebenen, Zeichenwerkzeuge, Undo/Redo, Transformationen und PNG-Export – ohne Frameworks.',
        bullets: [],
        stack: ['JavaScript', 'Canvas API', 'HTML5', 'CSS3'],
        image: 'pixora',
      },
      {
        id: 'rodnik',
        title: 'РОДНИКЪ',
        subtitle: 'Marktplatz für Landwirte',
        period: '2025',
        status: 'Wird überarbeitet',
        url: null,
        summary: 'Marktplatz, der Höfe direkt mit Kunden verbindet: Rollen, Höfe- und Produktverwaltung, Bestellungen, Datei-Service.',
        bullets: [],
        stack: ['Java 21', 'Spring Boot 3', 'React', 'MinIO'],
        image: null,
      },
      {
        id: 'homework',
        title: 'Lernprojekte',
        subtitle: 'JavaScript, DOM, SVG, Canvas',
        period: '2025 – 2026',
        status: 'Online',
        url: 'https://github.com/login-nigol/HOMEWORK',
        urlLabel: 'GitHub',
        summary: 'Formulare mit Validierung, SVG-Uhr, Canvas-Spiele, Drag & Drop, AJAX – Übungen aus den IT-Academy-Kursen.',
        bullets: [],
        stack: ['JavaScript', 'SVG', 'Canvas API'],
        image: null,
      },
    ],

    /* --- Опыт работы (новое сверху) --- */
    experience: [
      {
        period: '02/2025 – heute',
        role: 'Selbstständiger Softwareentwickler',
        company: 'PERUNIX, Regensburg',
        bullets: [
          'Konzeption, Entwicklung und Betrieb der eigenen SaaS-Plattform LifeQR (Backend, Frontend, DevOps)',
          'Eigene Website perunix-web.de für Webdienstleistungen',
        ],
      },
      {
        /* TODO(Вадим): уточнить точные даты PDR */
        period: '2012 – 2020',
        role: 'Ausbeultechniker (PDR, Hagelschadenreparatur)',
        company: null,
        bullets: [
          'Lackschadenfreies Ausbeulen von Hagel- und Dellenschäden – präzise Handarbeit unter Zeitdruck',
        ],
      },
      {
        period: '05/2006 – 04/2012',
        role: 'SMT-Spezialist',
        company: 'Zollner Elektronik AG',
        bullets: [
          'Programmierung, Inbetriebnahme und Wartung automatisierter Fertigungsanlagen (Siplace, AOI)',
        ],
      },
      {
        period: '02/1999 – 08/2003',
        role: 'Geschäftsführer',
        company: 'EVA Plus GmbH, Almaty',
        bullets: [
          'Vertrieb und Service von Computertechnik, Aufbau von Netzwerken, Führung eines kleinen Teams',
        ],
      },
    ],

    /* --- Образование (новое сверху) --- */
    education: [
      {
        period: '2025 – 2026',
        title: 'Webentwicklung mit HTML, CSS und JavaScript (2 Kurse, 224 Std.)',
        school: 'IT-Academy · online',
      },
      {
        period: '02/2024 – 02/2025',
        title: 'Backend Web Development – Java, Spring Boot, DevOps (560 Std.)',
        school: 'Tel-Ran.de GmbH, Berlin · online',
      },
      {
        period: '02/2006',
        title: 'Anerkennung als gleichwertig mit Fachinformatiker / Anwendungsentwicklung',
        school: 'IHK Regensburg',
      },
      {
        period: '1999 – 2003',
        title: 'Studium Informationssysteme in innovativen Technologien – Abschluss Ingenieur-Programmierer',
        school: 'Kasachische Nationale Al-Farabi-Universität, Almaty',
      },
    ],

    languages: [
      { name: 'Deutsch', level: 'B2+ – fließend im Arbeitsalltag' },
      { name: 'Russisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'A2+ – Fachdokumentation lesen' },
      { name: 'Kasachisch', level: 'B1' },
    ],
  },

  /* ---------------------------- ENGLISH ---------------------------- */
  en: {
    title: 'Full-Stack Developer · Java / Spring Boot · React / TypeScript',
    location: 'Regensburg, Germany · open to remote',

    profile: [
      'Full-stack developer focused on Java/Spring Boot and React.',
      'Since 2026 I have been building LifeQR on my own – a SaaS platform of 7 microservices with its own CI/CD pipeline, running on a Linux server.',
      'Degree in software engineering, recognised by the German Chamber of Commerce (IHK) as equivalent to Fachinformatiker / Application Development.',
    ],
    seeking: 'Looking for: Java or full-stack developer role (junior/mid) – remote or in Regensburg.',

    projects: [
      {
        id: 'lifeqr',
        title: 'LifeQR',
        subtitle: 'SaaS platform for digital family memory',
        period: '01/2026 – present',
        status: 'In development · test environment',
        url: 'https://lifeqr.kz',
        urlLabel: 'lifeqr.kz',
        summary: 'Family tree, memorial pages with photos and biographies, QR plaques and private family chats.',
        bullets: [
          '7 Spring Boot microservices (auth, family, memorial, media, chat, notify, billing), each with its own PostgreSQL database and Liquibase migrations',
          'Security: Spring Security (deny by default), JWT with refresh-token rotation, rate limiting, internal endpoints protected by a shared secret',
          'Reliable events between services using the transactional outbox pattern (PostgreSQL, retries)',
          'Frontend: React 19, Vite, TanStack Query, PWA, 5 languages (i18n), gradual migration to TypeScript',
          'Operations: Docker Compose on a Linux VPS, nginx with TLS, media in MinIO; CI/CD with GitHub Actions per service incl. health checks',
          'Unit tests with JUnit 5, Mockito and Vitest',
        ],
        stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'React 19', 'TypeScript', 'Docker', 'GitHub Actions'],
        image: 'lifeqr',
      },
      {
        id: 'pixora',
        title: 'Pixora A. Studio',
        subtitle: 'In-browser graphics editor',
        period: '10/2025 – present',
        status: 'Online',
        url: 'https://login-nigol.github.io/HOMEWORK/pixora-a-studio/src/',
        urlLabel: 'Open demo',
        summary: 'Layers, drawing tools, undo/redo, transformations and PNG export – no frameworks.',
        bullets: [],
        stack: ['JavaScript', 'Canvas API', 'HTML5', 'CSS3'],
        image: 'pixora',
      },
      {
        id: 'rodnik',
        title: 'RODNIK',
        subtitle: 'Marketplace for farmers',
        period: '2025',
        status: 'Being reworked',
        url: null,
        summary: 'Marketplace connecting farms directly with customers: roles, farm and product management, orders, file service.',
        bullets: [],
        stack: ['Java 21', 'Spring Boot 3', 'React', 'MinIO'],
        image: null,
      },
      {
        id: 'homework',
        title: 'Learning projects',
        subtitle: 'JavaScript, DOM, SVG, Canvas',
        period: '2025 – 2026',
        status: 'Online',
        url: 'https://github.com/login-nigol/HOMEWORK',
        urlLabel: 'GitHub',
        summary: 'Forms with validation, SVG clock, canvas games, drag & drop, AJAX – exercises from the IT-Academy courses.',
        bullets: [],
        stack: ['JavaScript', 'SVG', 'Canvas API'],
        image: null,
      },
    ],

    experience: [
      {
        period: '02/2025 – present',
        role: 'Self-employed software developer',
        company: 'PERUNIX, Regensburg',
        bullets: [
          'Design, development and operation of my own SaaS platform LifeQR (backend, frontend, DevOps)',
          'Company website perunix-web.de for web services',
        ],
      },
      {
        /* TODO(Вадим): уточнить точные даты PDR */
        period: '2012 – 2020',
        role: 'Paintless dent repair technician (hail damage)',
        company: null,
        bullets: [
          'Paintless repair of hail and dent damage – precise manual work under time pressure',
        ],
      },
      {
        period: '05/2006 – 04/2012',
        role: 'SMT specialist',
        company: 'Zollner Elektronik AG',
        bullets: [
          'Programming, commissioning and maintenance of automated production lines (Siplace, AOI)',
        ],
      },
      {
        period: '02/1999 – 08/2003',
        role: 'Managing director',
        company: 'EVA Plus GmbH, Almaty',
        bullets: [
          'Sales and service of computer hardware, network installation, leading a small team',
        ],
      },
    ],

    education: [
      {
        period: '2025 – 2026',
        title: 'Web development with HTML, CSS and JavaScript (2 courses, 224 h)',
        school: 'IT-Academy · online',
      },
      {
        period: '02/2024 – 02/2025',
        title: 'Backend Web Development – Java, Spring Boot, DevOps (560 h)',
        school: 'Tel-Ran.de GmbH, Berlin · online',
      },
      {
        period: '02/2006',
        title: 'Recognised as equivalent to Fachinformatiker / Application Development',
        school: 'IHK Regensburg (Chamber of Commerce)',
      },
      {
        period: '1999 – 2003',
        title: 'Information Systems in Innovative Technologies – degree: Software Engineer',
        school: 'Al-Farabi Kazakh National University, Almaty',
      },
    ],

    languages: [
      { name: 'German', level: 'B2+ – fluent at work' },
      { name: 'Russian', level: 'native' },
      { name: 'English', level: 'A2+ – reading technical docs' },
      { name: 'Kazakh', level: 'B1' },
    ],
  },
}
