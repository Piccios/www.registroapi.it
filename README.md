# 🖤 RegistroAPI - Dark Luxury Website

## 📊 La Piattaforma API Affidabile per Professionisti e Imprese

Sito web vetrina sviluppato in **Vue.js 3** con tema **dark luxury** per presentare i servizi API di RegistroAPI, rivolto a una clientela di alto profilo nel settore bancario, legale, finanziario e assicurativo.



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

## 📧 Funzionalità Form Contatto

Il form di contatto utilizza **EmailJS** per invio diretto delle email:
- **Validazione frontend** con Vue.js
- **Invio automatico** a mail Massimiliano
- **Conferma immediata** all'utente
- **Template personalizzato** per email professionali
- **Fallback** con indirizzo diretto per supporto tecnico


### Variabili di Ambiente
Il progetto utilizza un file `.env` per le configurazioni sensibili:


## 🔧 Configurazione

### Vue Router
Routing configurato per:
- **Homepage** (/)
- **Contatti** (/contatti)
- **Privacy Policy** (/privacy-policy)
- **Cookie Policy** (/cookie-policy)

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```
