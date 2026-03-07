# mas-garden-village (LA FINCA.)

A multi-page React web application for a Mediterranean summer destination on the Costa Brava (Blanes). Serves as a promotional and informational site for an estate hosting a "Garden / Market" experience during the day and a "Festival" arena at night.

## Tech Stack

- **Frontend:** React 18 + React Router DOM v6
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS + PostCSS
- **Internationalization:** Custom React Context (English + Spanish)
- **Package Manager:** npm

## Project Structure

```
/
├── index.html          # Entry point
├── vite.config.js      # Vite config (host: 0.0.0.0, port: 5000)
├── tailwind.config.cjs # Custom theme (sand, terracotta, olive, night-blue)
├── postcss.config.cjs
├── public/             # Static assets
└── src/
    ├── main.jsx        # App entry with BrowserRouter + LanguageProvider
    ├── App.jsx         # Route definitions
    ├── index.css       # Global styles + Tailwind directives
    ├── components/     # Reusable UI (Navbar, Footer, EventCard, etc.)
    ├── contexts/       # LanguageContext for i18n
    ├── data/           # siteData.js - all content (EN + ES)
    └── pages/          # Route-level views (Home, Agenda, EventDetail, etc.)
```

## Development

```bash
npm install
npm run dev   # Runs on http://0.0.0.0:5000
```

## Deployment

Configured as a **static** deployment:
- Build: `npm run build`
- Public dir: `dist`
