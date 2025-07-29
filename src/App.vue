<template>
  <div id="app" class="app-container">
    <!-- Sophisticated background overlay -->
    <div class="luxury-overlay"></div>
    
    <!-- Elegant Navigation Header -->
    <nav class="fixed top-0 w-full h-24 z-50 bg-luxury-black/90 backdrop-blur-xl border-b border-luxury-gray-medium/20">
      <div class="max-w-7xl mx-auto px-8 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-4 group">
            <img src="/img/logo.svg" alt="RegistroAPI_Logo" class="logo-img transition-transform duration-500 group-hover:scale-105" />
          </router-link>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-12">
            <router-link v-if="$route.path === '/HelpCenter'" to="/" class="nav-link-luxury">
              Home
            </router-link>
            <router-link to="/HelpCenter" class="nav-link-luxury">
              Help Center
            </router-link>
            <router-link v-if="$route.path === '/'" to="/contatti" class="btn-luxury-outline">
              Richiedi Accesso
            </router-link>
          </div>
          
          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-3 hover:bg-luxury-gray-light/20 transition-colors duration-300">
            <IconMenu class="w-6 h-6 text-luxury-white" />
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-6 pb-6 border-t border-luxury-gray-medium/20">
          <div class="flex flex-col space-y-6 pt-6">
            <router-link v-if="$route.path === '/HelpCenter'" to="/" @click="mobileMenuOpen = false" class="nav-link-luxury text-lg">
              Home
            </router-link>
            <router-link to="/HelpCenter" @click="mobileMenuOpen = false" class="nav-link-luxury text-lg">
              Help Center
            </router-link>
            <router-link v-if="$route.path === '/'" to="/contatti" @click="mobileMenuOpen = false" class="btn-luxury-outline text-center">
              Richiedi Accesso
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main class="pt-24">
      <router-view />
    </main>
    
    <!-- Elegant Footer -->
    <footer class="bg-luxury-dark border-t border-luxury-gray-medium/20 py-16">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid md:grid-cols-4 gap-12">
          <!-- Company Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-4 mb-6">
              <img src="/img/logo.svg" alt="RegistroAPI Logo" class="w-10 h-10" />
              <span class="text-xl font-display font-semibold text-luxury-white">RegistroAPI</span>
            </div>
            <p class="body-text-luxury max-w-md leading-relaxed">
              La piattaforma API più affidabile per professionisti e imprese di alto livello. 
              Accesso illimitato ai dati ufficiali con la massima eleganza e precisione.
            </p>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-luxury-gold font-display font-semibold mb-6 text-lg">Contatti</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <IconMail class="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:help@registroapi.com" @click="showEmailModal" class="body-text-luxury hover:text-luxury-gold transition-colors duration-300">
                  help@registroapi.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <IconClock class="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <p class="body-text-luxury">Supporto 7/7 ore 9:00-19:00</p>
              </div>
              <div class="flex items-center space-x-3">
                <IconPhone class="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <p class="body-text-luxury">Risposta garantita entro 1 ora</p>
              </div>
            </div>
          </div>
          
          <!-- Legal Links -->
          <div>
            <h3 class="text-luxury-gold font-display font-semibold mb-6 text-lg">Informazioni Legali</h3>
            <div class="space-y-4">
              <router-link to="/privacy-policy" class="block body-text-luxury hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </router-link>
              <router-link to="/cookie-policy" class="block body-text-luxury hover:text-luxury-gold transition-colors duration-300">
                Cookie Policy
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Bottom Footer -->
        <div class="mt-12 pt-8 border-t border-luxury-gray-medium/20">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-sm text-luxury-gray-medium">
              RegistroAPI è un brand di ITALIAN LUXURY VILLAS S.R.L. - P.IVA 13742870960
            </p>
            <p class="text-sm text-luxury-gray-medium">
              © 2025 RegistroAPI. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Email Modal -->
    <div v-if="emailModalOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-xl" @click="closeEmailModal"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-none max-w-md mx-4 p-8 text-center shadow-2xl">
        <div class="w-16 h-16 bg-luxury-gold rounded-none flex items-center justify-center mx-auto mb-6">
          <IconMail class="w-8 h-8 text-luxury-black" />
        </div>
        
        <h3 class="text-2xl font-display font-semibold mb-4 text-luxury-gold">Reindirizzamento Email</h3>
        
        <p class="body-text-luxury mb-8">
          Stai per essere reindirizzato al tuo servizio email predefinito per contattare il supporto tecnico.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="proceedToEmail" class="btn-luxury flex items-center justify-center">
            <IconMail class="w-5 h-5 mr-2" />
            Procedi
          </button>
          <button @click="closeEmailModal" class="btn-luxury-outline">
            Annulla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconMenu, IconMail, IconPhone, IconClock } from '@tabler/icons-vue'

export default {
  name: 'App',
  components: {
    IconMenu,
    IconMail,
    IconPhone,
    IconClock
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const emailModalOpen = ref(false)
    const pendingEmailLink = ref('')
    
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
    
    onMounted(() => {
      window.addEventListener('showEmailModal', handleShowEmailModal)
    })
    
    onUnmounted(() => {
      window.removeEventListener('showEmailModal', handleShowEmailModal)
    })
    
    return {
      mobileMenuOpen,
      emailModalOpen,
      showEmailModal,
      closeEmailModal,
      proceedToEmail
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