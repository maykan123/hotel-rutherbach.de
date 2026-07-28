# Hotel Rutherbach Website – Agent Guide

## Projektübersicht

Offizielle Website des **Hotel Rutherbach** in Essen-Kettwig, Deutschland. Eine responsive, DSGVO-konforme Single-Page-Application (One-Pager) mit React und Vite.

**Zielgruppe:** Deutschsprachige Hotelgäste, die eine Unterkunft im Raum Essen-Kettwig suchen.

**Sprache der Website:** Zweisprachig Deutsch/Englisch über i18next (siehe Abschnitt „Internationalisierung"). Default ist Deutsch (formelle „Sie"-Ansprache). Code-Kommentare sind teils deutsch, teils englisch.

**Architektur:** Die Startseite ist ein One-Pager mit Anker-Navigation (Smooth Scroll zu Sections wie `#zimmer`, `#kontakt`). React Router wird nur für die Unterseiten `/datenschutz`, `/impressum` und die 404-Seite genutzt.

---

## Technologie-Stack

| Kategorie | Technologie | Version |
|-----------|-------------|---------|
| Framework | React | ^18.2.0 |
| Build-Tool | Vite | ^5.0.0 |
| Router | React Router DOM | ^6.20.0 |
| Styling | Tailwind CSS | ^3.3.5 |
| Animationen | Framer Motion | ^10.16.5 |
| Icons | Lucide React | ^0.294.0 |
| Internationalisierung | react-i18next + i18next + i18next-browser-languagedetector | – |
| Formular-Backend | Web3Forms API (extern) | – |
| Buchungs-Engine | RoomRaccoon (extern, verlinkt) | – |
| Hosting | Netlify | – |

`package.json` hat `"type": "module"` – alle Config-Dateien und Quelldateien verwenden ES-Module.

---

## Projektstruktur

```
hotel-rutherbach/
├── public/
│   ├── images/               # Echte Bilder, nach Kategorien gruppiert:
│   │   ├── apartments/       # ap1–ap3.jpg
│   │   ├── doppelzimmer/     # dz1–dz4.jpg
│   │   ├── einzelzimmer/     # ez01.jpg
│   │   ├── komfort/          # kdz1–kdz2.jpg
│   │   ├── frühstück/        # fs*.jpeg (Ordnername enthält Umlaut!)
│   │   ├── hero.webp, uberuns.webp, logo.jpeg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           # Wiederverwendbare Komponenten
│   │   ├── Layout.jsx        # Wrapper: Header + <Outlet /> + Footer
│   │   ├── Header.jsx        # Fixierte Anker-Navigation + Sprach-Umschalter (DE/EN)
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx          # Hero-Section (#start)
│   │   ├── AboutSection.jsx  # Über-uns-Section (#ueber-uns)
│   │   ├── RoomsSection.jsx  # Zimmer-Übersicht mit Modal (#zimmer), nutzt data/rooms.js
│   │   ├── BreakfastSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── LocationSection.jsx  # Google-Maps-Embed (#lage)
│   │   ├── ContactForm.jsx   # Kontaktformular via Web3Forms (#kontakt)
│   │   ├── CookieBanner.jsx  # DSGVO-Consent-Banner
│   │   └── ImageSwiper.jsx   # Bild-Galerie-Komponente
│   ├── data/
│   │   └── rooms.js          # Kanonische Zimmerdaten (roomsData, BREAKFAST_PRICE), zweisprachig
│   ├── i18n/                 # Internationalisierung (DE/EN)
│   │   ├── index.js          # i18n-Init (fallbackLng 'de', localStorage-Detect)
│   │   ├── de.json           # Deutsche Übersetzungen (Quellsprache)
│   │   └── en.json           # Englische Übersetzungen
│   ├── pages/                # Seitenkomponenten (Routes)
│   │   ├── Home.jsx          # One-Pager: reiht alle Sections aneinander
│   │   ├── Privacy.jsx       # Datenschutzerklärung (/datenschutz), DE+EN
│   │   ├── Impressum.jsx     # Impressum (/impressum), DE+EN
│   │   └── NotFound.jsx      # 404-Seite
│   ├── styles/
│   │   └── index.css         # Tailwind-Direktiven + Custom Utility/Component Classes
│   ├── App.jsx               # Route-Definitionen + CookieBanner
│   └── main.jsx              # Entry Point (BrowserRouter, StrictMode)
├── index.html                # HTML-Template mit SEO-Meta, JSON-LD, Google Tag
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── README.md                 # Teils veraltet (beschreibt noch Bild-Platzhalter)
```

### Legacy-Dateien entfernt

Die früheren Dead-Code-Dateien (`pages/About.jsx`, `pages/Contact.jsx`, `pages/Rooms.jsx`, `components/RoomsList.jsx`, `components/RoomCard.jsx`) wurden im Juli 2026 gelöscht. Die aktuellen Zimmerdaten stehen ausschließlich in `src/data/rooms.js`.

---

## Build & Entwicklung

Voraussetzung: Node.js 18+ (in `netlify.toml` festgelegt), npm.

```bash
npm install        # Dependencies installieren
npm run dev        # Dev-Server auf http://localhost:5173
npm run build      # Production-Build nach /dist (inkl. Sourcemaps)
npm run preview    # Production-Build lokal testen
npm run lint       # ⚠ FUNKTIONIERT NICHT: es existiert keine ESLint-Konfigurationsdatei
```

Verifiziert (Stand: aktueller Workspace): `npm install` und `npm run build` laufen fehlerfrei durch. `npm run lint` schlägt fehl, weil zwar ESLint-Plugins in den devDependencies stehen, aber keine `.eslintrc*`/`eslint.config.*`-Datei im Repo existiert. Es gibt **keine automatisierten Tests** (kein Test-Runner, keine Test-Dateien) – Testing erfolgt manuell anhand der Checkliste weiter unten.

---

## Routing

| Pfad | Komponente | Beschreibung |
|------|------------|--------------|
| `/` | Home | One-Pager mit allen Sections |
| `/datenschutz` | Privacy | Datenschutzerklärung (DSGVO) |
| `/impressum` | Impressum | Impressum (deutsches Recht) |
| `*` | NotFound | 404-Seite |

Die Hauptnavigation in `Header.jsx` nutzt **keine Router-Links**, sondern scrollt per `getElementById` + `window.scrollTo` zu Section-IDs: `start`, `ueber-uns`, `zimmer`, `fruehstueck`, `lage`, `kontakt` (80px Offset für die fixierte Header-Höhe). Neue Sections müssen diese ID-Konvention einhalten, damit die Navigation und die Active-Section-Erkennung funktionieren.

---

## Zentrale Daten & Komponenten

### Zimmerdaten (`src/data/rooms.js`)

Kanonische Datenquelle: `roomsData` (10 Zimmer/Apartments) und `BREAKFAST_PRICE` (15 €/Nacht). Die übersetzbaren Felder sind zweisprachig als `{ de, en }` hinterlegt, `amenities` enthält i18n-Keys. Struktur pro Zimmer:

```javascript
{
  id: 'apartment-gross',
  name: { de: 'Apartment 8', en: 'Apartment 8' },
  roomNumber: 'A1',
  size: { de: 'ca. 60 m²', en: 'approx. 60 m²' },
  description: { de: '...', en: '...' },
  maxGuests: 4,
  beds: { de: '2x Doppelbett', en: '2x double bed' },
  price: 135,                        // € pro Nacht
  image: '/images/apartments/ap1.jpg',
  amenities: ['kitchen', 'showerWc', ...],  // Keys → t(`amenities.${key}`)
  bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#128059'
}
```

Preis-/Datenänderungen nur hier vornehmen – `RoomsSection.jsx` und `ContactForm.jsx` lesen beide aus dieser Datei. Amenity-Übersetzungen stehen zentral unter `amenities.*` in den i18n-Dateien (dedupliziert); bei neuen Amenities Key in beiden JSON-Dateien ergänzen.

### Kontaktformular (`src/components/ContactForm.jsx`)

- Sendet per `fetch` an die **Web3Forms API** (`https://api.web3forms.com/submit`) – **nicht** Netlify Forms.
- Der Access Key liegt hardcodiert als Konstante `WEB3FORMS_ACCESS_KEY` oben in der Datei (öffentlich sichtbarer Key, das ist bei Web3Forms vorgesehen).
- Clientseitige Validierung (Name, E-Mail, Zimmertyp, Nachricht, DSGVO-Checkbox) mit übersetzten Fehlermeldungen (`contact.errors.*`).
- Honeypot-Feld `botcheck` als Spam-Schutz.
- Unterstützt URL-Parameter `?zimmer=<id>` zur Vorauswahl des Zimmertyps (via `useSearchParams`). Matching erfolgt gegen `room.id`, rückwärtskompatibel auch gegen den deutschen Namen (`room.name.de`). Im Select ist der Wert die Zimmer-ID; beim Versand wird der deutsche Name in die E-Mail übernommen.

### Cookie-Banner (`src/components/CookieBanner.jsx`)

- Consent wird in `localStorage` unter dem Key `hotel-rutherbach-consent` als JSON gespeichert (`{essential, statistics, marketing}`).
- Kategorien: `essential` (erforderlich, nicht abwählbar), `statistics`, `marketing`.
- Feuert bei Änderung das Custom Event `cookieConsentChanged` (mit dem Consent-Objekt als `detail`).

### Google Analytics (`index.html`)

- Google Tag `G-KHS034GVZ1` wird **nur nach Consent** geladen: Ein Inline-Script in `index.html` prüft den localStorage-Consent beim Seitenstart und lauscht auf `cookieConsentChanged`. Statistik/Marketing-Consent → gtag wird dynamisch eingebunden.
- `index.html` enthält außerdem SEO-Meta-Tags, Open Graph, Canonical URL und JSON-LD Structured Data (`@type: Hotel`). Die Meta-Tags bleiben bewusst statisch deutsch; nur das `lang`-Attribut wird per JS gesetzt (siehe i18n).

### Internationalisierung (`src/i18n/`)

- **Bibliotheken:** `react-i18next`, `i18next`, `i18next-browser-languagedetector`. Init in `src/i18n/index.js`, importiert in `src/main.jsx`.
- **Sprachen:** `de` (Quellsprache, Default/fallback) und `en`. Übersetzungen in `src/i18n/de.json` / `src/i18n/en.json`, verschachtelt nach Komponenten (`nav`, `hero`, `about`, `features`, `rooms`, `amenities`, `breakfast`, `location`, `contact`, `footer`, `cookies`, `notFound`, `privacy`, `impressum`, `common`, `langSwitcher`). Beide Dateien müssen schlüsselgleich bleiben.
- **Detection:** Nur `localStorage` (Key `hotel-rutherbach-lang`), kein `navigator`-Detect – Erstsprache ist garantiert Deutsch. `fallbackLng: 'de'`.
- **Umschalter:** In `Header.jsx` (Komponente `LanguageSwitcher`) – Desktop neben der Navigation und im mobilen Hamburger-Menü, Flaggen 🇩🇪/🇬🇧, aktive Sprache in accent-Farbe.
- **`lang`-Attribut:** `document.documentElement.lang` wird initial und bei jedem `languageChanged`-Event gesetzt.
- **Zimmertexte:** Stehen als `{ de, en }` direkt in `src/data/rooms.js`; Komponenten wählen per `i18n.language` das Feld. Amenities werden per `t(\`amenities.${key}\`)` aufgelöst.
- **Rechtsseiten:** Auf Englisch zeigen Privacy/Impressum oben einen Hinweis, dass die deutsche Version rechtlich bindend ist.
- Neue UI-Texte immer in beide JSON-Dateien aufnehmen, nie hardcodieren. Listen (z. B. Features) via `t('...', { returnObjects: true })`.

---

## Code-Konventionen

### Allgemein
- **Sprache:** UI-Texte kommen aus den i18n-Dateien (`de.json` = Quellsprache, formelle „Sie"-Ansprache; `en.json` = Übersetzung). Code-Kommentare überwiegend deutsch.
- **Dateinamen:** PascalCase für Komponenten (z. B. `ContactForm.jsx`), camelCase für Datenmodule (`rooms.js`).
- **Komponenten:** Funktionale Komponenten mit Default-Export, Hooks am Anfang.
- **Kein TypeScript** – reines JSX (obwohl `@types/react` in den devDependencies steht).

### Tailwind / Styling
Farb-Tokens aus `tailwind.config.js` verwenden:
- `primary` (#131a34) – dunkler Haupt-Hintergrund
- `primary-light` (#1c2547) – Karten-Hintergründe
- `accent` (#f3d993) – Buttons, Highlights
- `accent-hover` (#e8cc7d), `accent-dark` (#c9a227) – Hover/Akzente auf hellem Grund
- Schriftart: Inter (Google Fonts, in `index.html` eingebunden)

Custom Classes aus `src/styles/index.css`:
- `.btn-primary`, `.btn-secondary` – Button-Styles (`@layer components`)
- `.form-input`, `.form-label` – Formular-Styles
- `.blue-island` / `.blue-island-static` – dunkle Karten mit 3D-Schatten auf weißen Sections
- `.glass-card` – Glassmorphism für den Hero
- `.section-white`, `.gradient-overlay`, `.text-shadow` – Utilities

Design-Pattern: Abwechselnd dunkle (`bg-primary`) und weiße Sections; dunkle „schwebende" Karten (`.blue-island`) auf weißem Grund.

### Accessibility & Animationen
- Alle Icon-Buttons brauchen `aria-label`; Formularfelder nutzen `aria-invalid`/`aria-describedby`.
- `focus-visible`-Ring global in `index.css` definiert.
- `prefers-reduced-motion` wird in `index.css` global respektiert (Animationen auf 0.01ms reduziert).
- Framer Motion für alle Animationen; Scroll-Animationen mit `viewport={{ once: true }}`; Dauer typisch 0,3–0,6 s.

---

## Deployment (Netlify)

Konfiguriert in `netlify.toml`:
- Build-Command: `npm run build`
- Publish-Directory: `dist`
- Node-Version: 18
- SPA-Redirect: `/* → /index.html` (Status 200)

`vite.config.js` setzt `base: '/'` und aktiviert Sourcemaps im Build. Es gibt **keine Umgebungsvariablen** und keine serverseitigen Funktionen – die Seite ist rein statisch; Formularversand und Buchung laufen über externe Dienste (Web3Forms, RoomRaccoon).

---

## Sicherheit & Compliance (DSGVO)

- **Kein Tracking ohne Consent:** Google Analytics wird erst nach Opt-in geladen (siehe oben).
- **Kontaktformular** erfordert DSGVO-Zustimmung (Checkbox) und nutzt ein Honeypot-Feld gegen Spam.
- **Web3Forms Access Key** ist im Client-Code sichtbar – das ist das vorgesehene Modell von Web3Forms; der Key darf trotzdem nicht gegen einen privaten/anderen Key ausgetauscht oder für andere Zwecke wiederverwendet werden.
- Keine Secrets/Env-Dateien im Projekt; `.gitignore` deckt `node_modules`, `dist` etc. ab.
- Rechtlich vorgeschriebene Seiten: `/impressum` und `/datenschutz` müssen erhalten bleiben.

---

## Manuelle Testing-Checkliste

Es gibt kein Test-Framework – vor einem Deploy manuell prüfen:

- [ ] `npm install` + `npm run dev` startet ohne Fehler
- [ ] `npm run build` läuft durch
- [ ] Alle Sections sind über die Anker-Navigation erreichbar (Desktop + mobiles Hamburger-Menü)
- [ ] Direktaufruf von `/datenschutz` und `/impressum` funktioniert (SPA-Redirect)
- [ ] Kontaktformular zeigt Validierungsfehler für Pflichtfelder
- [ ] Cookie-Banner erscheint beim ersten Besuch (zum Testen localStorage löschen)
- [ ] Sprach-Umschalter (Desktop + mobil) wechselt alle Texte DE ↔ EN; Auswahl bleibt nach Reload erhalten (localStorage `hotel-rutherbach-lang`); `lang`-Attribut im `<html>` wechselt mit
- [ ] Google Tag wird erst nach Consent geladen (Netzwerk-Tab prüfen)
- [ ] Zimmer-Buchungsbuttons verlinken auf die korrekten RoomRaccoon-URLs
- [ ] Bilder laden korrekt

---

## Bekannte Issues & TODOs

1. **`npm run lint` defekt:** Keine ESLint-Konfigurationsdatei im Repo (siehe oben).
2. **USt-IdNr. fehlt:** In `src/pages/Impressum.jsx` als „[Bitte einfügen]" markiert.
3. **Google-Maps-Embed:** Die Embed-URL in `LocationSection.jsx` enthält noch Platzhalter-Koordinaten; der „Route planen"-Link nutzt eine Maps-Suche nach der Hoteladresse.
4. **README.md teils veraltet:** beschreibt noch Bild-Platzhalter und Netlify Forms – Bilder sind inzwischen eingebunden, das Formular nutzt Web3Forms.

---

## Kontaktinformationen

**Inhaber:** Makyan Saeed
**Firma:** HOTEL RUTHERBACH
**Adresse:** Ruhrtalstraße 215–217, D-45219 Essen-Kettwig
**Telefon:** 0201 - 40 88 39 18
**E-Mail:** info@hotel-rutherbach.de
**Website:** www.hotel-rutherbach.de

---

*Zuletzt aktualisiert: Juli 2026*
