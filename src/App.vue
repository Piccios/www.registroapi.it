<template>
  <div id="app" class="app-container">
    <!-- Sophisticated background overlay -->
    <div class="luxury-overlay"></div>

    <!-- Elegant Navigation Header -->
    <nav class="fixed top-0 w-full h-24 md:h-32 z-50 bg-luxury-black/90 backdrop-blur-xl border-b border-luxury-gray-medium/20">
      <div class="max-w-7xl mx-auto py-2 md:py-1 px-4 md:px-8">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <router-link :to="$route.path.startsWith('/value_diligence') ? '/value_diligence' : '/'" class="flex items-center space-x-2 md:space-x-4 group" v-scroll-to-top>
            <img :src="$route.path.startsWith('/value_diligence') ? '/img/partners/value_diligence.png' : '/public/img/logo_senzabackground.svg'" :alt="$route.path.startsWith('/value_diligence') ? 'Value Diligence' : 'RegistroAPI'" class="logo-img transition-transform duration-500 group-hover:scale-105 h-40 w-auto max-w-[160px] md:max-w-[200px] object-contain" />
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-12">
            <router-link v-if="$route.path === '/HelpCenter' || $route.path === '/contatti' || $route.path === '/privacy-policy' || $route.path === '/cookie-policy'" to="/" class="nav-link-luxury" v-scroll-to-top>
              Home
            </router-link>
            <router-link v-if="$route.path !== '/HelpCenter'" to="/HelpCenter" class="nav-link-luxury" v-scroll-to-top>
              Help Center
            </router-link>
            <router-link v-if="$route.path === '/' || $route.path === '/HelpCenter' || $route.path.startsWith('/value_diligence')" :to="$route.path.startsWith('/value_diligence') ? '/value_diligence#top' : '/contatti'" class="btn-artistic text-luxury-gold" v-scroll-to-top>
              {{ $route.path.startsWith('/value_diligence') ? 'Richiedi Informazioni' : 'Richiedi Accesso' }}
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="hamburger-button md:hidden p-2 md:p-3 hover:bg-luxury-gray-light/20 transition-colors duration-300">
            <IconMenu class="w-5 h-5 md:w-6 md:h-6 text-luxury-white" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="mobile-menu-container md:hidden mt-4 pb-4 border-t border-luxury-gray-medium/20 bg-black/90 backdrop-blur-xl border border-white/15 rounded-none shadow-2xl">
          <div class="flex flex-col space-y-4 pt-4 px-4">
            <router-link v-if="$route.path !== '/'" to="/" @click="mobileMenuOpen = false" class="nav-link-luxury text-lg py-2 px-4 hover:bg-luxury-gray-light/20 transition-all duration-300 rounded-none" v-scroll-to-top>
              Home
            </router-link>
            <router-link v-if="$route.path !== '/HelpCenter'" to="/HelpCenter" @click="mobileMenuOpen = false" class="nav-link-luxury text-lg py-2 px-4 hover:bg-luxury-gray-light/20 transition-all duration-300 rounded-none" v-scroll-to-top>
              Help Center
            </router-link>
            <router-link v-if="$route.path.startsWith('/value_diligence')" to="/value_diligence#top" @click="mobileMenuOpen = false" class="btn-artistic text-luxury-gold text-center py-3 px-6" v-scroll-to-top>
              Richiedi Informazioni
            </router-link>
            <router-link v-else-if="$route.path !== '/contatti'" to="/contatti" @click="mobileMenuOpen = false" class="btn-artistic text-luxury-gold text-center py-3 px-6" v-scroll-to-top>
              Richiedi Accesso
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20 md:pt-24">
      <router-view />
    </main>

    <!-- Elegant Footer -->
    <footer class="bg-luxury-dark border-t border-luxury-gray-medium/20 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                    <!-- Company Info -->
          <div class="md:col-span-2 flex flex-col justify-between">
            <component :is="$route.path.startsWith('/value_diligence') ? 'a' : 'div'" :href="$route.path.startsWith('/value_diligence') ? 'https://www.valuedilignece.it' : undefined" target="_blank" rel="noopener" class="flex items-center space-x-4 mb-2">
              <img :src="$route.path.startsWith('/value_diligence') ? '/img/partners/value_diligence.png' : '/img/logo.svg'" :alt="$route.path.startsWith('/value_diligence') ? 'Value Diligence' : 'RegistroAPI Logo'" class="w-6 h-6 md:w-8 md:h-8" />
              <span class="text-base md:text-lg font-display font-semibold text-luxury-white">{{ $route.path.startsWith('/value_diligence') ? 'Value Diligence' : 'RegistroAPI' }}</span>
            </component>
            <p v-if="!$route.path.startsWith('/value_diligence')" class="text-xs md:text-sm text-luxury-text-secondary max-w-md leading-relaxed mb-6">
              La piattaforma API più affidabile per professionisti e imprese di alto livello.
              Accesso illimitato ai dati ufficiali con la massima eleganza e precisione.
            </p>

            <div v-if="!$route.path.startsWith('/value_diligence')" class="mb-3">
              <span class="text-base md:text-lg font-display font-semibold text-luxury-white">Le nostre fonti</span>
            </div>
            <PartnerLogoGrid v-if="!$route.path.startsWith('/value_diligence')" :items="govSources" customGridClass="mb-6" defaultImgClass="max-h-8 md:max-h-9 lg:max-h-10" />
            <div class="mb-2">
              <span class="text-base md:text-lg font-display font-semibold text-luxury-white">{{ $route.path.startsWith('/value_diligence') ? 'Value Diligence è partner di' : 'RegistroAPI è partner di' }}</span>
            </div>
            <PartnerLogoGrid :items="$route.path.startsWith('/value_diligence') ? partnersVD : partnersRA" />
          </div>

          <!-- Principali API disponibili -->
          <div v-if="!$route.path.startsWith('/value_diligence')">
            <h3 class="text-luxury-gold font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Principali API disponibili</h3>
            <div class="space-y-1 md:space-y-2">
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Conservatoria
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Catasto
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Tribunale
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Camera di Commercio
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Agenzia del Territorio
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Dati Ministeriali
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Anagrafe / Comune
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                P.R.A. e Pratiche Veicoli
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Agenzia delle Entrate
              </p>
              <p class="block text-xs md:text-sm text-luxury-text-secondary">
                Marchi
              </p>
            </div>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-luxury-gold font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Contatti</h3>
            <div class="space-y-2 md:space-y-3">
              <div class="flex items-center space-x-2 md:space-x-3">
                <IconMail class="w-3 h-3 md:w-4 md:h-4 text-luxury-gold flex-shrink-0" />
                <a href="mailto:help@registroapi.com" @click="showEmailModal" class="text-xs md:text-sm text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-300">
                  help@registroapi.com
                </a>
              </div>
              <div class="flex items-center space-x-2 md:space-x-3">
                <IconClock class="w-3 h-3 md:w-4 md:h-4 text-luxury-gold flex-shrink-0" />
                <p class="text-xs md:text-sm text-luxury-text-secondary">Supporto 7/7 ore 9:00-19:00</p>
              </div>
              <div class="flex items-center space-x-2 md:space-x-3">
                <IconPhone class="w-3 h-3 md:w-4 md:h-4 text-luxury-gold flex-shrink-0" />
                <p class="text-xs md:text-sm text-luxury-text-secondary">Risposta garantita entro 1 ora</p>
              </div>
            </div>
          </div>

          <!-- Legal Links -->
          <div>
            <h3 class="text-luxury-gold font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Informazioni Legali</h3>
            <div class="space-y-2 md:space-y-3">
              <router-link to="/privacy-policy" class="block text-xs md:text-sm text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-300" v-scroll-to-top>
                Privacy Policy
              </router-link>
              <router-link to="/cookie-policy" class="block text-xs md:text-sm text-luxury-text-secondary hover:text-luxury-gold transition-colors duration-300" v-scroll-to-top>
                Cookie Policy
              </router-link>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="mt-5 md:mt-10 pt-8 md:pt-3 border-t border-luxury-gray-medium/20">
          <div class="order-3 md:order-2 flex-1 w-full mb-6">
            <div class="flex flex-col items-center md:items-start text-center ">
              <p class="text-[10px] md:text-xs text-luxury-gray-medium leading-relaxed">
                <template v-if="$route.path.startsWith('/value_diligence')">
                  Value Diligence – analisi, dati e reportistica avanzata su piattaforma
                  <a href="https://www.bigdata.it" target="_blank" rel="noopener" class="text-luxury-gold hover:underline"> BigData.it</a>.
                  Licenza T.U.L.P.S. art. 134 – Prot. n. 0023787 del 28/03/2025 – AREA 1 P.A.
                  Certificazioni: ISO 9001 – ISO 27001, unitamente ad altre autorizzazioni di settore.
                </template>
                <template v-else>
                  Italian Luxury Villas tramite il ramo dedicato
                  <a href="https://valuediligence.it" target="_blank" rel="noopener" class="text-luxury-gold hover:underline"> Value Diligence</a>
                  – analisi, dati e reportistica avanzata su piattaforma
                  <a href="https://www.bigdata.it" target="_blank" rel="noopener" class="text-luxury-gold hover:underline"> BigData.it</a>.
                  Licenza T.U.L.P.S. art. 134 – Prot. n. 0023787 del 28/03/2025 – AREA 1 P.A.
                  Certificazioni: ISO 9001 – ISO 27001, unitamente ad altre autorizzazioni di settore.
                </template>
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-4 md:gap-6">
            <p class="order-1 text-xs md:text-sm text-luxury-gray-medium text-center md:text-left">
              {{ $route.path.startsWith('/value_diligence') ? 'Value Diligence è un brand di ITALIAN LUXURY VILLAS S.R.L. - P.IVA 13742870960' : 'RegistroAPI è un brand di ITALIAN LUXURY VILLAS S.R.L. - P.IVA 13742870960' }}
            </p>
            <p class="order-2 md:order-3 text-xs md:text-sm text-luxury-gray-medium text-center md:text-right" v-if="$route.path.startsWith('/value_diligence')">
              © 2025 Value Diligence. Tutti i diritti riservati.
            </p>
            <p class="order-2 md:order-3 text-xs md:text-sm text-luxury-gray-medium text-center md:text-right" v-else>
              © 2025 RegistroAPI. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Email Modal -->
    <div v-if="emailModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-xl" @click="closeEmailModal"></div>

      <!-- Modal Content -->
      <div class="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-none w-full max-w-md mx-auto p-6 md:p-8 text-center shadow-2xl">
        <div class="w-12 h-12 md:w-16 md:h-16 bg-luxury-gold rounded-none flex items-center justify-center mx-auto mb-4 md:mb-6">
          <IconMail class="w-6 h-6 md:w-8 md:h-8 text-luxury-black" />
        </div>

        <h3 class="text-xl md:text-2xl font-display font-semibold mb-3 md:mb-4 text-luxury-gold">Reindirizzamento Email</h3>

        <p class="body-text-luxury mb-6 md:mb-8 text-sm md:text-base">
          Stai per essere reindirizzato al tuo servizio email predefinito per contattare il team di RegistroAPI.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <button @click="proceedToEmail" class="btn-artistic text-luxury-gold flex items-center justify-center">
            <IconMail class="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Procedi
          </button>
          <button @click="closeEmailModal" class="btn-elegant text-luxury-gold">
            Annulla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconClock, IconMail, IconMenu, IconPhone } from '@tabler/icons-vue'
import { onMounted, onUnmounted, ref } from 'vue'
import PartnerLogoGrid from './components/footer/PartnerLogoGrid.vue'

export default {
  name: 'App',
  components: {
    IconMenu,
    IconMail,
    IconPhone,
    IconClock,
    PartnerLogoGrid
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const emailModalOpen = ref(false)
    const pendingEmailLink = ref('')

    const govSources = [
      {
        src: '/img/gov/Logo_Agenzia_Entrate.png',
        alt: 'Agenzia delle Entrate',
        width: 120,
        height: 32
      },
      {
        src: '/img/gov/INPS_logo_2023.svg.png',
        alt: 'INPS',
        width: 120,
        height: 32
      },
      {
        src: '/img/gov/Logo_Registro_Imprese.svg',
        alt: 'Registro Imprese',
        width: 120,
        height: 32
      }
    ]

    const partners = [
      {
        src: '/img/partners/log-bigdata-bianco.png',
        alt: 'BigData.it',
        href: 'https://www.bigdata.it',
        raw: true,
        height: 80
      },
      {
        src: '/img/partners/value_diligence.png',
        alt: 'Value Diligence',
        href: 'https://valuediligence.it',
        raw: true,
        height: 80
      }
    ]

    // Footer partners per brand
    const partnersRA = partners
    const partnersVD = [
      {
        src: '/img/partners/log-bigdata-bianco.png',
        alt: 'BigData.it',
        href: 'https://www.bigdata.it',
        raw: true,
        height: 80
      },
      {
        src: '/img/logo_senzabackground.svg',
        alt: 'RegistroAPI',
        href: '/',
        raw: true,
        height: 80
      }
    ]

    const showEmailModal = (event) => {
      event.preventDefault()
      pendingEmailLink.value = event.target.href
      emailModalOpen.value = true
    }

    const closeEmailModal = () => {
      emailModalOpen.value = false
      pendingEmailLink.value = ''
    }

    const proceedToEmail = () => {
      if (pendingEmailLink.value) {
        window.location.href = pendingEmailLink.value
      }
      closeEmailModal()
    }

    // Listen for custom events from child components
    const handleShowEmailModal = (event) => {
      pendingEmailLink.value = event.detail.href
      emailModalOpen.value = true
    }

    // Handle click outside mobile menu
    const handleClickOutside = (event) => {
      if (mobileMenuOpen.value) {
        // Check if click is outside the mobile menu and hamburger button
        const mobileMenu = document.querySelector('.mobile-menu-container')
        const hamburgerButton = document.querySelector('.hamburger-button')

        if (mobileMenu && hamburgerButton) {
          const isClickInsideMenu = mobileMenu.contains(event.target)
          const isClickOnButton = hamburgerButton.contains(event.target)

          if (!isClickInsideMenu && !isClickOnButton) {
            mobileMenuOpen.value = false
          }
        }
      }
    }

    onMounted(() => {
      window.addEventListener('showEmailModal', handleShowEmailModal)
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      window.removeEventListener('showEmailModal', handleShowEmailModal)
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      mobileMenuOpen,
      emailModalOpen,
      showEmailModal,
      closeEmailModal,
      proceedToEmail,
      govSources,
      partners,
      partnersRA,
      partnersVD
    }
  }
}
</script>

<style>
.app-container {
  min-height: 100vh;
  background-image: url('/img/background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}

.luxury-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
  z-index: 1;
}

/* Ensure content is above the overlay */
nav, main, footer {
  position: relative;
  z-index: 2;
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
