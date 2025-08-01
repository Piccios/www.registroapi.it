<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="section-luxury text-center">
      <div class="glass-hero-enhanced animate-fade-in">
        <h1 class="heading-luxury mb-8">
          DATI UFFICIALI. <span class="text-gradient-gold">ACCESSO ILLIMITATO.</span>
        </h1>
        <p class="subheading-luxury mb-10 max-w-4xl mx-auto">
          La Piattaforma API Affidabile per Professionisti e Imprese
        </p>
        <p class="body-text-luxury mb-12 max-w-3xl mx-auto leading-relaxed">
          Accesso illimitato ai dati. Nessun credito da ricaricare. Massima efficienza.<br>
          Siamo il registro più affidabile per API ad alto valore legale, fiscale e informativo.
        </p>

        <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a :href="`mailto:${supportEmail}`" @click="showEmailModal" class="btn-artistic text-luxury-gold flex items-center">
            <IconSend class="w-5 h-5 mr-3" />
            Richiedi Accesso Immediato
          </a>
          <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center" v-scroll-to-top>
            <IconMail class="w-5 h-5 mr-3" />
            Richiedi Informazioni
          </router-link>
        </div>

        <div class="divider-luxury mt-12"></div>

        <p class="text-luxury-gold text-sm mt-8 font-medium tracking-wide">
          Risposta garantita entro 1 ora • Supporto 7/7 dalle 9:00 alle 19:00
        </p>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="section-luxury">
      <div class="text-center mb-20">
        <h2 class="heading-luxury-medium mb-8">
          Il Vantaggio <span class="text-gradient-gold">Competitivo</span>
        </h2>
        <p class="subheading-luxury max-w-4xl mx-auto">
          A differenza di altre piattaforme che vincolano l'utilizzo a pacchetti prepagati o ricariche a consumo,
          noi offriamo accesso illimitato e tariffe flat mensili/annuali, ideali per chi sviluppa progetti complessi e ha bisogno di continuità operativa.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="glass-card-enhanced text-center animate-slide-up">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconShield class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Gestori Ufficiali</h3>
          <p class="body-text-luxury">
            PortaleAPI.it e PortaleAPI.com - La garanzia di affidabilità nel settore
          </p>
        </div>

        <div class="glass-card-enhanced text-center animate-slide-up" style="animation-delay: 0.2s">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconMail class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Account Manager Dedicato</h3>
          <p class="body-text-luxury">
            Ogni cliente seguito da un Account Manager dedicato con supporto attivo personalizzato
          </p>
        </div>
      </div>
    </section>

    <!-- Clienti di Prestigio Section -->
    <section class="section-luxury">
      <div class="text-center mb-16">
        <h2 class="heading-luxury-medium mb-8">
          Clienti di <span class="text-gradient-gold">Prestigio</span>
        </h2>
        <p class="subheading-luxury max-w-4xl mx-auto">
          Le aziende più importanti si fidano di noi per i loro dati critici
        </p>
      </div>

      <ClientCarousel />
    </section>

    <!-- Professional Sectors -->
    <section class="section-luxury">
      <div class="text-center mb-20">
        <h2 class="heading-luxury-medium mb-8">
          Soluzioni API per ogni <span class="text-gradient-gold">Settore Professionale</span>
        </h2>
      </div>

      <div class="space-y-16">
        <!-- Banking -->
        <div class="card-luxury-elegant">
          <div class="flex items-center justify-between">
            <div class="flex items-start space-x-8 flex-1">
              <div class="w-20 h-20 icon-elegant flex items-center justify-center flex-shrink-0">
                <IconBuildingBank class="w-10 h-10 text-luxury-gold" />
              </div>
              <div>
                <h3 class="text-3xl font-display font-semibold mb-6 text-luxury-gold">Banche e Istituti di Credito</h3>
                <p class="body-text-luxury mb-6">
                  Automatizza onboarding, KYC/AML e credit scoring. Le API supportano:
                </p>
                <ul class="space-y-3 text-base">
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Analisi real-time su imprese e privati</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Credit score, protesti, negatività</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Integrazione nei CRM per finanziamenti</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ml-8 flex-shrink-0">
              <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center whitespace-nowrap" v-scroll-to-top>
                <IconMail class="w-5 h-5 mr-2" />
                Richiedi maggiori informazioni
              </router-link>
            </div>
          </div>
        </div>

        <!-- Legal -->
        <div class="card-luxury-elegant">
          <div class="flex items-center justify-between">
            <div class="flex items-start space-x-8 flex-1">
              <div class="w-20 h-20 icon-elegant flex items-center justify-center flex-shrink-0">
                <IconScale class="w-10 h-10 text-luxury-gold" />
              </div>
              <div>
                <h3 class="text-3xl font-display font-semibold mb-6 text-luxury-gold">Studi Legali Internazionali</h3>
                <p class="body-text-luxury mb-6">
                  Supporto completo per M&A, due diligence, recupero crediti, contenziosi:
                </p>
                <ul class="space-y-3 text-base">
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Struttura societaria e beneficiari effettivi</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Proprietà immobiliari, cariche, atti</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Accesso diretto a documenti ufficiali</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ml-8 flex-shrink-0">
              <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center whitespace-nowrap" v-scroll-to-top>
                <IconMail class="w-5 h-5 mr-2" />
                Richiedi maggiori informazioni
              </router-link>
            </div>
          </div>
        </div>

        <!-- Investment -->
        <div class="card-luxury-elegant">
          <div class="flex items-center justify-between">
            <div class="flex items-start space-x-8 flex-1">
              <div class="w-20 h-20 icon-elegant flex items-center justify-center flex-shrink-0">
                <IconTrendingUp class="w-10 h-10 text-luxury-gold" />
              </div>
              <div>
                <h3 class="text-3xl font-display font-semibold mb-6 text-luxury-gold">SGR e Società di Investimento</h3>
                <p class="body-text-luxury mb-6">
                  Analizza imprese target, portafogli e controparti in operazioni complesse:
                </p>
                <ul class="space-y-3 text-base">
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Bilanci e performance storica</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Immobili intestati, soci, rischi</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Report aggregati geolocalizzati</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ml-8 flex-shrink-0">
              <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center whitespace-nowrap" v-scroll-to-top>
                <IconMail class="w-5 h-5 mr-2" />
                Richiedi maggiori informazioni
              </router-link>
            </div>
          </div>
        </div>

        <!-- Fiduciary -->
        <div class="card-luxury-elegant">
          <div class="flex items-center justify-between">
            <div class="flex items-start space-x-8 flex-1">
              <div class="w-20 h-20 icon-elegant flex items-center justify-center flex-shrink-0">
                <IconReceipt class="w-10 h-10 text-luxury-gold" />
              </div>
              <div>
                <h3 class="text-3xl font-display font-semibold mb-6 text-luxury-gold">Fiduciarie e Trust Company</h3>
                <p class="body-text-luxury mb-6">
                  Valutazioni su soggetti terzi, trasparenza patrimoniale e supporto antiriciclaggio:
                </p>
                <ul class="space-y-3 text-base">
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Controllo affidabilità</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Verifica patrimonio mobiliare e immobiliare</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Ricostruzione attività economica</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ml-8 flex-shrink-0">
              <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center whitespace-nowrap" v-scroll-to-top>
                <IconMail class="w-5 h-5 mr-2" />
                Richiedi maggiori informazioni
              </router-link>
            </div>
          </div>
        </div>

        <!-- Insurance -->
        <div class="card-luxury-elegant">
          <div class="flex items-center justify-between">
            <div class="flex items-start space-x-8 flex-1">
              <div class="w-20 h-20 icon-elegant flex items-center justify-center flex-shrink-0">
                <IconShield class="w-10 h-10 text-luxury-gold" />
              </div>
              <div>
                <h3 class="text-3xl font-display font-semibold mb-6 text-luxury-gold">Assicurazioni</h3>
                <p class="body-text-luxury mb-6">
                  Strumenti per profilazione, antifrode e sottoscrizione:
                </p>
                <ul class="space-y-3 text-base">
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Visure immobiliari e cariche</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Controlli su soggetti beneficiari</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <span class="text-luxury-gold text-lg">•</span>
                    <span class="text-luxury-text-secondary">Atti patrimoniali e pregiudizievoli</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ml-8 flex-shrink-0">
              <router-link to="/contatti#top" class="btn-elegant text-luxury-gold flex items-center whitespace-nowrap" v-scroll-to-top>
                <IconMail class="w-5 h-5 mr-2" />
                Richiedi maggiori informazioni
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Catalog -->
    <section class="section-luxury">
      <div class="text-center mb-20">
        <h2 class="heading-luxury-medium mb-8">
          Catalogo <span class="text-gradient-gold">API</span>
        </h2>
        <p class="subheading-luxury">Principali Moduli a Tua Disposizione</p>
      </div>

      <div class="overflow-x-auto">
        <table class="table-luxury">
          <thead>
            <tr>
              <th>Modulo API</th>
              <th>Cosa fa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="api in apiCatalog" :key="api.name">
              <td class="font-semibold text-luxury-white">{{ api.name }}</td>
              <td class="text-luxury-text-secondary">{{ api.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Request Complete Catalog Button -->
      <div class="text-center mt-12">
        <button @click="showCatalogModal = true" class="btn-elegant text-luxury-gold flex items-center mx-auto">
          <IconPackage class="w-5 h-5 mr-3" />
          Richiedi Catalogo Completo API
        </button>
      </div>
    </section>

    <!-- Key Numbers -->
    <section class="section-luxury">
      <div class="text-center mb-20">
        <h2 class="heading-luxury-medium mb-8">
          Numeri <span class="text-gradient-gold">Chiave</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="stat in keyStats" :key="stat.number" class="glass-card-enhanced text-center">
          <div class="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-6">{{ stat.number }}</div>
          <p class="body-text-luxury">{{ stat.description }}</p>
        </div>
      </div>
    </section>

    <!-- Data Quality -->
    <section class="section-luxury">
      <div class="text-center mb-20">
        <h2 class="heading-luxury-medium mb-8">
          Qualità del Dato e <span class="text-gradient-gold">Fonti Ufficiali</span>
        </h2>
        <p class="subheading-luxury max-w-4xl mx-auto">
          Utilizziamo esclusivamente fonti certificate e pubblici registri
        </p>
      </div>
      <!-- Government Agencies Logos -->
      <div class="mt-16 text-center mb-10">
        <div class="flex justify-center items-center space-x-16">
          <div class="flex flex-col items-center space-y-4">
            <img
              src="/img/gov/Logo_Agenzia_Entrate.png"
              alt="Agenzia delle Entrate"
              class="AE-logo"
            />
          </div>
          <div class="flex flex-col items-center space-y-4">
            <img
              src="/img/gov/INPS_logo_2023.svg.png"
              alt="INPS"
              class="inps-logo"
            />
          </div>
          <div class="flex flex-col items-center">
            <img
            src="/img/gov/Logo_Registro_Imprese.svg"
            alt="Registro_Imprese"
            class="RI-logo">
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 space-x-60">
        <div>
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold">Fonti Autorizzate</h3>
          <ul class="space-y-4">
            <li v-for="source in officialSources" :key="source" class="flex items-center space-x-4">
              <span class="w-3 h-3 bg-luxury-gold rounded-full"></span>
              <span class="text-luxury-text-secondary">{{ source }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold">Criteri di Validazione</h3>
          <ul class="space-y-4">
            <li v-for="criteria in validationCriteria" :key="criteria" class="flex items-center space-x-4">
              <span class="w-3 h-3 bg-luxury-gold rounded-full"></span>
              <span class="text-luxury-text-secondary">{{ criteria }}</span>
            </li>
          </ul>
        </div>
      </div>


      <div class="mt-16 p-8 bg-luxury-gray border border-luxury-gold/30">
        <p class="text-luxury-text-secondary">
          <strong class="text-luxury-gold">Openapi è autorizzata</strong> a svolgere attività di investigazioni, ricerche e raccolta di informazioni
          anche commerciali su specifico mandato, come previsto dalla normativa, tramite licenza rilasciata dalla Questura (TULPS n. 234801).
        </p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-luxury text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="heading-luxury-medium mb-8">
          Attivazione e <span class="text-gradient-gold">Richiesta Informazioni</span>
        </h2>
        <p class="subheading-luxury mb-12">
          Richiedi ora accesso alle API illimitate:<br>
          Ricevi risposta entro 1 ora. Nessuna ricarica, nessun credito. Un unico canone mensile o annuale (flat).
        </p>

        <div class="glass-card-enhanced">
          <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <router-link to="/contatti#top" class="btn-artistic text-luxury-gold text-lg px-12 py-6 flex items-center" v-scroll-to-top>
              <IconSend class="w-6 h-6 mr-3" />
              Compila il modulo per attivare l'accesso
            </router-link>
          </div>

          <div class="divider-luxury mt-8"></div>

          <p class="text-luxury-gold text-sm mt-6 font-medium tracking-wide">
            <IconMail class="inline w-4 h-4 mr-2" />
            Per supporto tecnico diretto: <a :href="supportEmailLink" @click="showEmailModal" class="underline hover:text-luxury-gold-light transition-colors duration-300">{{ supportEmail }}</a>
          </p>
        </div>
      </div>
    </section>

    <!-- API Catalog Request Modal -->
    <div v-if="showCatalogModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-xl" @click="closeCatalogModal"></div>

      <!-- Modal Content -->
      <div class="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-none max-w-md mx-4 p-8 text-center shadow-2xl">
        <div class="w-16 h-16 bg-luxury-gold rounded-none flex items-center justify-center mx-auto mb-6">
          <IconPackage class="w-8 h-8 text-luxury-black" />
        </div>

        <h3 class="text-2xl font-display font-semibold mb-4 text-luxury-gold">Catalogo Completo API</h3>

        <p class="body-text-luxury mb-8">
          Richiedi il catalogo completo delle API disponibili con tutte le specifiche tecniche,
          documentazione e esempi di integrazione.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="requestCatalog" class="btn-artistic text-luxury-gold flex items-center justify-center">
            <IconMail class="w-5 h-5 mr-2" />
            Richiedi Catalogo
          </button>
          <button @click="closeCatalogModal" class="btn-elegant text-luxury-gold">
            Annulla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  IconBuildingBank,
  IconCheck,
  IconDatabase,
  IconMail,
  IconPackage,
  IconReceipt,
  IconScale,
  IconSearch,
  IconSend,
  IconShield,
  IconTrendingUp
} from '@tabler/icons-vue'
import { ref } from 'vue'
import ClientCarousel from '../components/ClientCarousel.vue'

export default {
  name: 'HomePage',
  components: {
    IconDatabase,
    IconBuildingBank,
    IconScale,
    IconTrendingUp,
    IconReceipt,
    IconShield,
    IconPackage,
    IconSearch,
    IconCheck,
    IconMail,
    IconSend,
    ClientCarousel
  },
  setup() {
    const apiCatalog = ref([
      { name: 'Imprese Italia', description: 'Dati completi su aziende italiane, soci, bilanci, PEC, sede' },
      { name: 'Imprese Estero', description: 'Informazioni fiscali e societarie su imprese UE e mondiali' },
      { name: 'Verifica Enti Pubblici', description: 'Controllo enti PA e split payment' },
      { name: 'Visure Immobili', description: 'Catasto, intestazioni, schede immobiliari, visure, planimetrie' },
      { name: 'Analisi Affidabilità', description: 'Credit score, eventi negativi, immobili, ispezioni ipotecarie' },
      { name: 'Documenti Ufficiali', description: 'Atti, bilanci, certificati, registrazioni immobiliari, certificati anagrafici' },
      { name: 'Visure Integrate', description: 'Accesso unificato a centinaia di tipologie documentali tra cui 730, ISEE, NASpI' },
      { name: 'Documenti Camerali', description: 'Visure CCIAA, bilanci, vigenze, certificati, elenco soci' }
    ])

    const keyStats = ref([
      { number: '7M+', description: 'Compravendite immobiliari censite' },
      { number: '6M+', description: 'Imprese italiane attive' },
      { number: '900K+', description: 'Bilanci digitali ufficiali' },
      { number: '5M+', description: 'PEC certificate' },
      { number: '13M+', description: 'Dati anagrafici, fiscali, patrimoniali' },
      { number: '128+', description: 'Tipologie documentali accessibili' }
    ])

    const officialSources = ref([
      'Registro Imprese / InfoCamere',
      'Agenzia delle Entrate / Catasto / Conservatorie',
      'INPS, ANPR, PRA',
      'CAF e Patronati autorizzati',
      'Indagini investigative (Licenza TULPS 234801)',
      'Elenchi ufficiali di ordini, albi e PA'
    ])

    const validationCriteria = ref([
      'Accuratezza',
      'Completezza',
      'Attualità',
      'Affidabilità incrociata',
      'Rilevanza professionale'
    ])

    // Variabili d'ambiente
    const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL
    const supportEmailLink = `mailto:${supportEmail}`
    const catalogEmail = import.meta.env.VITE_BUSINESS_EMAIL

    const showCatalogModal = ref(false)

    const showEmailModal = (event) => {
      event.preventDefault()
      // Emittiamo evento al componente padre (App.vue) per mostrare il modal
      window.dispatchEvent(new CustomEvent('showEmailModal', {
        detail: { href: event.target.href }
      }))
    }

    const closeCatalogModal = () => {
      showCatalogModal.value = false
    }

    const requestCatalog = () => {
      const subject = encodeURIComponent('Richiesta Catalogo Completo API - RegistroAPI')
      const body = encodeURIComponent(`Gentile Massimiliano,

Sono interessato al catalogo completo delle API di RegistroAPI.

Vorrei ricevere:
- Catalogo completo delle API disponibili
- Specifiche tecniche dettagliate
- Documentazione di integrazione
- Esempi di utilizzo
- Informazioni sui costi e modalità di attivazione

Cordiali saluti,
[Il tuo nome]`)

      const mailtoLink = `mailto:${catalogEmail}?subject=${subject}&body=${body}`
      window.location.href = mailtoLink
      closeCatalogModal()
    }

    return {
      apiCatalog,
      keyStats,
      officialSources,
      validationCriteria,
      supportEmail,
      supportEmailLink,
      showEmailModal,
      showCatalogModal,
      closeCatalogModal,
      requestCatalog
    }
  }
}
</script>

<style scoped>
.gov-logo {
  height: 130px;
  max-width: 300px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: all 0.5s ease;
  opacity: 0.9;
}

.gov-logo:hover {
  opacity: 1;
}


@media (max-width: 768px) {
  .gov-logo {
    height: 60px;
    max-width: 150px;
  }
}
</style>
