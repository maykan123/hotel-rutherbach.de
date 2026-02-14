# Hotel Rutherbach Website

Eine moderne, responsive und DSGVO-konforme Website für das Hotel Rutherbach in Essen-Kettwig.

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Hosting:** Netlify

## 📁 Projektstruktur

```
hotel-rutherbach/
├── public/
│   └── images/          # Bilder (TODO: Hier eigene Bilder einfügen)
├── src/
│   ├── components/      # Wiederverwendbare Komponenten
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── RoomCard.jsx
│   │   ├── RoomsList.jsx
│   │   ├── ContactForm.jsx
│   │   └── CookieBanner.jsx
│   ├── pages/           # Seitenkomponenten
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   └── Impressum.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── netlify.toml
```

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Lokaler Server

```bash
npm run dev
```

Die Website ist dann unter `http://localhost:5173` erreichbar.

### Build erstellen

```bash
npm run build
```

## 🚀 Netlify Deploy

### Automatisches Deploy

1. Verbinde dein GitHub-Repository mit Netlify
2. Setze den Build-Command auf: `npm run build`
3. Setze das Publish-Directory auf: `dist`
4. Deploy!

### Manuelles Deploy

```bash
# Build erstellen
npm run build

# Mit Netlify CLI deployen (falls installiert)
netlify deploy --prod --dir=dist
```

## 📝 Wichtige TODOs nach dem Deploy

### 1. Bilder einfügen

Füge deine eigenen Bilder in den Ordner `/public/images/` ein:

| Dateiname | Verwendung | Empfohlene Größe |
|-----------|------------|------------------|
| `hero.jpg` | Hero-Bild Startseite | 1920x1080px |
| `about.jpg` | Bild auf Über-uns Seite | 800x1000px |
| `location.jpg` | Karten/Standort Bild | 800x600px |
| `apartment-2zimmer.jpg` | Apartment (2 Schlafzimmer) | 800x600px |
| `apartment-empore.jpg` | Apartment (Empore) | 800x600px |
| `doppelzimmer.jpg` | Doppelzimmer | 800x600px |
| `komfort-doppelzimmer.jpg` | Komfort-Doppelzimmer | 800x600px |
| `einzelzimmer.jpg` | Einzelzimmer | 800x600px |

### 2. Netlify Forms E-Mail einrichten

1. Im Netlify Dashboard → Forms öffnen
2. Unter "Form notifications" eine E-Mail-Benachrichtigung hinzufügen
3. E-Mail-Adresse: `info@hotel-rutherbach.de`
4. Test-Anfrage über das Kontaktformular senden

### 3. SMTP/Mailhook nachrüsten (optional)

Für erweiterte E-Mail-Funktionen:

```javascript
// netlify/functions/contact.js
// Hier kann ein serverless function für benutzerdefinierte E-Mail-Verarbeitung erstellt werden
```

Dokumentation: https://docs.netlify.com/functions/overview/

### 4. Datenschutztexte anpassen

- `/src/pages/Privacy.jsx` - Datenschutzerklärung prüfen und ergänzen
- `/src/pages/Impressum.jsx` - USt-IdNr. einfügen

### 5. Google Maps Koordinaten aktualisieren

In `/src/pages/Contact.jsx` die Google Maps Embed URL mit den korrekten Koordinaten aktualisieren.

## 🎨 Design-System

### Farben

| Name | Hex | Verwendung |
|------|-----|------------|
| Primary | `#131a34` | Hintergrund |
| Accent | `#f3d993` | Akzente, Buttons |
| Text | `#FFFFFF` | Haupttext |

### Schriftart

- **Primary:** Inter (Google Fonts)

## ♿ Accessibility

- Alle interaktiven Elemente sind keyboard-navigierbar
- ARIA-Labels vorhanden
- Focus-States sichtbar
- `prefers-reduced-motion` wird respektiert
- Semantic HTML verwendet

## 🔒 DSGVO-Compliance

- Cookie-Banner mit Kategorien (Essenziell, Statistik, Marketing)
- Consent wird in localStorage gespeichert
- Kontaktformular mit DSGVO-Checkbox
- Keine Tracker ohne Consent
- Datenschutz- und Impressum-Seiten vorhanden

## 🧪 Testing Checkliste

- [ ] `npm install` + `npm run dev` startet ohne Fehler
- [ ] Alle Seiten sind navigierbar
- [ ] Kontaktformular zeigt Validierungsfehler an
- [ ] Cookie-Banner erscheint beim ersten Besuch
- [ ] Mobile Navigation funktioniert
- [ ] Bilder laden korrekt (nach dem Einfügen)

## 📊 Performance-Optimierung

- Bilder sind lazy-loaded
- Animationen respektieren `prefers-reduced-motion`
- Code-Splitting durch React Router
- Optimierte Build-Größe durch Vite

### Lighthouse Empfehlungen

1. Bilder in modernen Formaten (WebP) bereitstellen
2. Alt-Texte für alle Bilder ergänzen
3. Caching-Header auf Netlify konfigurieren

## 🐛 Bekannte Issues

1. **Bild-Platzhalter:** Aktuell werden graue Platzhalter mit "TODO"-Text angezeigt. Diese verschwinden, sobald echte Bilder in `/public/images/` eingefügt werden.

2. **Google Maps:** Die Kartenansicht zeigt aktuell einen Platzhalter. Koordinaten müssen aktualisiert werden.

## 📞 Support

Bei Fragen oder Problemen:
- Makyan Saeed
- E-Mail: info@hotel-rutherbach.de
- Tel: 0201 - 40 88 39 18

---

**Stand:** Februar 2026
