# Hotel Rutherbach Website - Agent Guide

## Project Overview

This is the official website for **Hotel Rutherbach**, a hotel located in Essen-Kettwig, Germany. It is a modern, responsive, and GDPR-compliant (DSGVO) single-page application built with React and Vite.

**Target Audience:** German-speaking hotel guests looking for accommodation in Essen-Kettwig area.

**Website Language:** German (de)

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 18.2.0 |
| Build Tool | Vite | 5.0.0 |
| Router | React Router DOM | 6.20.0 |
| Styling | Tailwind CSS | 3.3.5 |
| Animations | Framer Motion | 10.16.5 |
| Icons | Lucide React | 0.294.0 |
| Hosting | Netlify | - |

---

## Project Structure

```
hotel-rutherbach/
├── public/                    # Static assets
│   └── images/               # Hotel images (TODO: populate with real images)
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Layout.jsx        # Page layout wrapper (Header + Footer)
│   │   ├── Header.jsx        # Navigation header with mobile menu
│   │   ├── Footer.jsx        # Footer with contact info and links
│   │   ├── Hero.jsx          # Hero section for homepage
│   │   ├── RoomCard.jsx      # Room display card component
│   │   ├── RoomsList.jsx     # Room listing with data export
│   │   ├── ContactForm.jsx   # Contact form with Netlify Forms
│   │   └── CookieBanner.jsx  # GDPR cookie consent banner
│   ├── pages/                # Page components (routes)
│   │   ├── Home.jsx          # Homepage
│   │   ├── Rooms.jsx         # Room listing page
│   │   ├── About.jsx         # About us page
│   │   ├── Contact.jsx       # Contact page with map
│   │   ├── Privacy.jsx       # Datenschutzerklärung (GDPR)
│   │   └── Impressum.jsx     # Legal notice (German law)
│   ├── styles/
│   │   └── index.css         # Global styles + Tailwind directives
│   ├── App.jsx               # Main app with route definitions
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind customization
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS config for Tailwind
└── netlify.toml              # Netlify deployment config
```

---

## Available Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## Build & Development

### Prerequisites
- Node.js 18+ (specified in netlify.toml)
- npm

### Development Workflow
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open http://localhost:5173 in your browser

### Production Build
```bash
npm run build
```
Output is generated in the `/dist` folder, which is configured as the publish directory in Netlify.

---

## Code Style Guidelines

### General Conventions
- **Language:** All UI text is in German
- **File naming:** PascalCase for components (e.g., `ContactForm.jsx`)
- **Component structure:** Functional components with default exports
- **Imports:** React hooks first, then external libraries, then internal components

### Tailwind CSS Patterns
- Use custom color tokens defined in `tailwind.config.js`:
  - `primary` (#131a34) - Main background
  - `primary-light` (#1c2547) - Card backgrounds
  - `accent` (#f3d993) - Buttons, highlights
  - `accent-hover` (#e8cc7d) - Hover states
- Custom utility classes defined in `index.css`:
  - `.btn-primary` - Primary CTA button style
  - `.btn-secondary` - Secondary/outline button style
  - `.form-input` - Form input styling
  - `.form-label` - Form label styling

### Accessibility Requirements
- All interactive elements must be keyboard-navigable
- Include ARIA labels for icons and buttons
- Use `focus-visible` styles (configured in index.css)
- Respect `prefers-reduced-motion` (configured in index.css)
- Maintain sufficient color contrast (white text on dark backgrounds)

### Animation Guidelines
- Use Framer Motion for all animations
- Always check `useReducedMotion()` before applying motion effects
- Use `viewport={{ once: true }}` for scroll-triggered animations
- Standard animation durations: 0.3s - 0.6s

---

## Key Components Reference

### Room Data
Room information is defined in `src/components/RoomsList.jsx` as `roomsData` array:

```javascript
{
  id: 'apartment-2zimmer',
  name: 'Apartment (ca. 60 m²)',
  description: '2 getrennte Schlafzimmer, je 1 Doppelbett, Küche',
  price: 150,
  image: '/images/apartment-2zimmer.jpg',
  amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
}
```

### Contact Form
- Uses Netlify Forms (handled automatically by Netlify)
- Form name: `contact`
- Includes honeypot field for spam protection (`bot-field`)
- Requires DSGVO consent checkbox
- Fields: name, email, telefon, zimmer, anreise, abreise, gaeste, nachricht, dsgvo, kopie

### Cookie Banner
- Stores consent in localStorage with key: `hotel-rutherbach-consent`
- Categories: essential (required), statistics, marketing
- Emits custom event `cookieConsentChanged` on consent change

---

## Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Homepage with hero, features, rooms preview, contact form |
| `/zimmer` | Rooms | Room listing with pricing |
| `/ueber-uns` | About | About the hotel and philosophy |
| `/kontakt` | Contact | Contact page with form and map |
| `/datenschutz` | Privacy | GDPR privacy policy |
| `/impressum` | Impressum | Legal notice (German law requirement) |

---

## Deployment

### Netlify Configuration
Configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18
- SPA redirect rules included (all routes → index.html)

### Environment Variables
None currently required.

### Forms Setup
Netlify Forms are automatically detected. After deployment:
1. Go to Netlify Dashboard → Forms
2. Configure form notifications email to: info@hotel-rutherbach.de

---

## Testing Checklist

Before deploying, verify:
- [ ] `npm install` + `npm run dev` starts without errors
- [ ] All pages are navigable via menu and direct URL
- [ ] Contact form shows validation errors for required fields
- [ ] Cookie banner appears on first visit (clear localStorage to test)
- [ ] Mobile navigation (hamburger menu) works correctly
- [ ] Images load correctly (after adding real images to `/public/images/`)
- [ ] All links work (internal navigation + external links)
- [ ] Form submission works (test on deployed Netlify site)

---

## Known Issues & TODOs

### Image Placeholders
Currently using placeholder gradients with "TODO" text. Real images need to be added to `/public/images/`:

| Filename | Usage | Recommended Size |
|----------|-------|------------------|
| `hero.jpg` | Hero background | 1920x1080px |
| `about.jpg` | About page | 800x1000px |
| `location.jpg` | Location/map section | 800x600px |
| `apartment-2zimmer.jpg` | Room card | 800x600px |
| `apartment-empore.jpg` | Room card | 800x600px |
| `doppelzimmer.jpg` | Room card | 800x600px |
| `komfort-doppelzimmer.jpg` | Room card | 800x600px |
| `einzelzimmer.jpg` | Room card | 800x600px |

### Impressum Page
- USt-IdNr. (VAT ID) needs to be added (marked as "[Bitte einfügen]")

### Google Maps
- Embed URL in Contact.jsx uses placeholder coordinates
- Update with actual hotel coordinates when available

---

## Legal & Compliance

### GDPR (DSGVO) Compliance
- Cookie consent banner with category selection
- Consent stored in localStorage
- Contact form includes DSGVO checkbox
- Privacy policy page (`/datenschutz`)
- No tracking without explicit consent

### Required German Legal Pages
- `/impressum` - Legal notice with contact info, VAT ID, etc.
- `/datenschutz` - Privacy policy

---

## Contact Information

**Hotel Owner:** Makyan Saeed  
**Business Name:** HOTEL RUTHERBACH  
**Address:** Ruhrtalstraße 215 - 217, D-45219 Essen-Kettwig  
**Phone:** 0201 - 40 88 39 18  
**Email:** info@hotel-rutherbach.de  
**Website:** www.hotel-rutherbach.de

---

## Performance Notes

- Images should be optimized (WebP format recommended)
- Lazy loading implemented for below-fold images
- Animations respect `prefers-reduced-motion`
- Code splitting through React Router
- Build optimized by Vite

---

*Last Updated: February 2026*
