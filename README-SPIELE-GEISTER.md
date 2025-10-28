# Spiele Geister Heusenstamm Website

Eine moderne React-Website für die Brettspielgeister GbR aus Heusenstamm.

## Features

- **Responsive Design** - Funktioniert perfekt auf Desktop, Tablet und Smartphone
- **Einfache Navigation** - Klare Menüstruktur mit Smooth-Scrolling
- **Moderne Gestaltung** - Sauberes, einfaches Design mit Farbverläufen
- **Informative Bereiche**:
  - Home/Hero Bereich mit Slogan
  - Über uns - Informationen über Julia und Marco Dornburg
  - Angebote - Alle Dienstleistungen auf einen Blick
  - Kontakt - Einfache Kontaktaufnahme

## Entwicklung starten

```bash
cd spiele-geister-website
npm start
```

Die Website öffnet sich automatisch unter [http://localhost:3000](http://localhost:3000)

## Projekt bauen

```bash
npm run build
```

Erstellt eine optimierte Production-Version im `build` Ordner.

## Technologie-Stack

- React 18
- JavaScript (ES6+)
- CSS3 mit Flexbox und Grid
- Responsive Design

## Projektstruktur

```
src/
  ├── App.js          # Hauptkomponente mit allen Sektionen
  ├── App.css         # Styling für die gesamte Website
  ├── index.js        # React Entry Point
  └── index.css       # Globale Styles
public/
  ├── logo.svg        # Spiele Geister Logo
  └── index.html      # HTML Template
```

## Anpassungen

### Logo ändern
Ersetzen Sie `public/logo.svg` mit Ihrem neuen Logo.

### Farben anpassen
Hauptfarben können in `src/App.css` geändert werden:
- Primärfarbe (Gradient): `#667eea` bis `#764ba2`
- Akzentfarbe: `#5a67d8`

### Inhalte bearbeiten
Alle Texte können direkt in `src/App.js` bearbeitet werden.

## Kontakt

Brettspielgeister GbR  
E-Mail: Brettspielgeister@web.de  
Standort: Heusenstamm

---

© 2025 Brettspielgeister GbR - Julia und Marco Dornburg
