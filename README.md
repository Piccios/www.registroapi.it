# 🖤 RegistroAPI - Dark Luxury Website

## 📊 La Piattaforma API Affidabile per Professionisti e Imprese

Sito web vetrina sviluppato in **Vue.js 3** con tema **dark luxury** per presentare i servizi API di RegistroAPI, rivolto a una clientela di alto profilo nel settore bancario, legale, finanziario e assicurativo.

## ✨ Caratteristiche Principali

### 🎨 Design Dark Luxury
- **Palette colori premium**: Nero assoluto (#000000) con accenti oro (#FFD700)
- **Tipografia elegante**: Font Inter per un look professionale
- **Animazioni raffinate**: Effetti di glow e transizioni smooth
- **Layout responsive**: Ottimizzato per ogni dispositivo

### 🏗️ Architettura Tecnica
- **Vue.js 3** con Composition API
- **Vue Router** per navigazione SPA
- **Tailwind CSS** con configurazione personalizzata
- **Vite** come build tool per performance ottimali
- **Frontend-only** (JAMstack) - nessun backend richiesto

### 📱 Sezioni del Sito
- **Hero Section**: Slogan e value proposition principali
- **Settori Target**: Banche, studi legali, SGR, fiduciarie, assicurazioni
- **Catalogo API**: Tabella completa dei moduli disponibili
- **Numeri Chiave**: Statistiche e volumi dati
- **Fonti Ufficiali**: Credibilità e autorizzazioni
- **Form Contatto**: Generazione lead con validazione

## 🚀 Quick Start

### Prerequisiti
- **Node.js** 18+ 
- **npm** o **yarn**

### Installazione

```bash
# Clona il repository
git clone [repository-url]
cd registroapi-frontend

# Installa le dipendenze
npm install

# Avvia in modalità sviluppo
npm run dev

# Build per produzione
npm run build

# Anteprima build produzione
npm run preview
```

### 📁 Struttura Progetto

```
src/
├── main.js           # Entry point applicazione
├── App.vue           # Componente root con navigation
├── style.css         # Stili Tailwind CSS + custom
├── pages/
│   ├── HomePage.vue  # Pagina principale con tutto il contenuto
│   ├── ContactPage.vue # Form contatti e informazioni
│   ├── PrivacyPage.vue # Privacy Policy
│   └── CookiePage.vue  # Cookie Policy
```

## 🎨 Design System

### Colori Dark Luxury
```css
--luxury-black: #000000     /* Background principale */
--luxury-dark: #0A0A0A      /* Background alternativo */
--luxury-gray: #1A1A1A      /* Cards e componenti */
--luxury-gold: #FFD700      /* Accenti e CTA */
--luxury-white: #FFFFFF     /* Testo principale */
--luxury-gray-light: #E5E5E5 /* Testo secondario */
```

### Classi Utility Custom
```css
.btn-luxury              /* Pulsanti gold con hover effects */
.btn-luxury-outline      /* Pulsanti outline gold */
.card-luxury            /* Cards con bordi e hover */
.text-gradient-gold     /* Testo con gradiente oro */
.section-luxury         /* Spaziatura sezioni */
.heading-luxury         /* Typography headers */
```

## 📧 Funzionalità Form Contatto

Il form di contatto utilizza **EmailJS** per invio diretto delle email:
- **Validazione frontend** con Vue.js
- **Invio automatico** a massimiliano.alessandrucci@euroansa.it
- **Conferma immediata** all'utente
- **Template personalizzato** per email professionali
- **Fallback** con indirizzo diretto per supporto tecnico

### Setup EmailJS
Vedi `EMAILJS_SETUP.md` per istruzioni dettagliate di configurazione.

### Variabili di Ambiente
Il progetto utilizza un file `.env` per le configurazioni sensibili:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_j1bxmto
VITE_EMAILJS_TEMPLATE_ID=template_contact_form
VITE_EMAILJS_PUBLIC_KEY=KQr2D8r7X7xxE0kyY

# Business Email
VITE_BUSINESS_EMAIL=massimiliano.alessandrucci@euroansa.it
VITE_SUPPORT_EMAIL=help@registroapi.com
```

**Importante**: Il file `.env` non deve essere committato nel repository per sicurezza.

## 🔧 Configurazione

### Tailwind CSS
Il file `tailwind.config.js` include:
- **Tema dark** personalizzato
- **Colori luxury** estesi
- **Animazioni** custom per effetti premium
- **Breakpoints** responsive ottimizzati

### Vue Router
Routing configurato per:
- **Homepage** (/)
- **Contatti** (/contatti)
- **Privacy Policy** (/privacy-policy)
- **Cookie Policy** (/cookie-policy)

## 🚀 Deploy

### Opzioni Consigliate
1. **Netlify**: Deploy automatico da Git con CI/CD
2. **Vercel**: Ottimizzato per progetti Vue.js
3. **GitHub Pages**: Hosting gratuito per progetti open source

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## 📊 Performance

### Ottimizzazioni Implementate
- **Lazy loading** delle immagini
- **Code splitting** automatico con Vite
- **Tree shaking** per bundle size ottimale
- **CSS purging** con Tailwind
- **Minificazione** automatica in produzione

## 🔒 SEO & Privacy

### Meta Tags
- **Title** e **description** ottimizzati
- **Open Graph** per social sharing
- **Structured data** per search engines

### Compliance
- **Privacy Policy** completa GDPR
- **Cookie Policy** dettagliata
- **Consenso** esplicito nel form

## 🎯 Target Audience

Il sito è progettato specificamente per:
- **🏦 Banche e Istituti di Credito**
- **⚖️ Studi Legali Internazionali** 
- **📈 SGR e Società di Investimento**
- **🧾 Fiduciarie e Trust Company**
- **🛡️ Compagnie Assicurative**

## 📞 Supporto

- **Email**: help@registroapi.com
- **Risposta garantita**: entro 1 ora
- **Orari**: 7/7 dalle 9:00 alle 19:00

---

**RegistroAPI** è un brand di **ITALIAN LUXURY VILLAS S.R.L.** - P.IVA 13742870960

© 2025 RegistroAPI. Tutti i diritti riservati. 