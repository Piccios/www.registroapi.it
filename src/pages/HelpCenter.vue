<template>
  <div class="help-center-page">
    <!-- Hero Section -->
    <section class="section-luxury text-center">
      <h1 class="heading-luxury mb-8">
        Help <span class="text-gradient-gold">Center</span>
      </h1>
      <p class="subheading-luxury mb-12 max-w-3xl mx-auto">
        Supporto tecnico dedicato per assistenza API e risoluzione problemi
      </p>
    </section>

    <!-- Support Info -->
    <section class="section-luxury-compact">
      <div class="grid md:grid-cols-2 gap-12 mb-20">
        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 bg-luxury-gold rounded-none flex items-center justify-center mx-auto mb-8">
            <IconMail class="w-10 h-10 text-luxury-black" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Supporto Email</h3>
          <p class="body-text-luxury mb-6">Contatto diretto per assistenza tecnica</p>
          <a :href="supportEmailLink" @click="showEmailModal" class="text-luxury-gold hover:text-luxury-gold-light transition-colors duration-300 font-medium">
            {{ supportEmail }}
          </a>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 bg-luxury-gold rounded-none flex items-center justify-center mx-auto mb-8">
            <IconClock class="w-10 h-10 text-luxury-black" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Orari Supporto</h3>
          <p class="body-text-luxury mb-6">Disponibilità garantita</p>
          <p class="text-luxury-gold font-display font-semibold text-xl">7 giorni su 7</p>
          <p class="text-luxury-gold font-display font-semibold text-xl">9:00 - 19:00</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-luxury">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-luxury-medium mb-8">
            Contatta il <span class="text-gradient-gold">Supporto Tecnico</span>
          </h2>
          <p class="subheading-luxury">
            Per assistenza immediata, problemi tecnici o richieste API
          </p>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="mb-8">
            <p class="body-text-luxury mb-6">
              Il nostro team di supporto tecnico è disponibile per aiutarti con:
            </p>
            <ul class="space-y-3 text-base mb-8">
              <li class="flex items-center justify-center space-x-3">
                <span class="text-luxury-gold text-lg">•</span>
                <span class="text-luxury-text-secondary">Assistenza API e integrazione</span>
              </li>
              <li class="flex items-center justify-center space-x-3">
                <span class="text-luxury-gold text-lg">•</span>
                <span class="text-luxury-text-secondary">Risoluzione problemi tecnici</span>
              </li>
              <li class="flex items-center justify-center space-x-3">
                <span class="text-luxury-gold text-lg">•</span>
                <span class="text-luxury-text-secondary">Documentazione e guide</span>
              </li>
              <li class="flex items-center justify-center space-x-3">
                <span class="text-luxury-gold text-lg">•</span>
                <span class="text-luxury-text-secondary">Richiesta nuove funzionalità</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a :href="supportEmailLink" @click="showEmailModal" class="btn-luxury text-lg px-12 py-6 flex items-center">
              <IconMail class="w-6 h-6 mr-3" />
              Contatta Supporto Tecnico
            </a>
          </div>
          
          <div class="divider-luxury mt-8"></div>
          
          <p class="text-luxury-gold text-sm mt-6 font-medium tracking-wide">
            Risposta garantita entro 1 ora • Supporto 7/7 dalle 9:00 alle 19:00
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-luxury">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-luxury-medium mb-8">
            Domande <span class="text-gradient-gold">Frequenti</span>
          </h2>
        </div>

        <div class="space-y-8">
          <div class="glass-card-enhanced">
            <h3 class="text-xl font-display font-semibold mb-4 text-luxury-gold">Come posso accedere alle API?</h3>
            <p class="body-text-luxury">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi voluptas inventore, maiores dolores atque error. Error eius, provident, sint esse modi ipsa dolorum, velit numquam nihil aperiam vero dolorem?
            </p>
          </div>

          <div class="glass-card-enhanced">
            <h3 class="text-xl font-display font-semibold mb-4 text-luxury-gold">Quali sono i tempi di risposta?</h3>
            <p class="body-text-luxury">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi voluptas inventore, maiores dolores atque error. Error eius, provident, sint esse modi ipsa dolorum, velit numquam nihil aperiam vero dolorem?
            </p>
          </div>

          <div class="glass-card-enhanced">
            <h3 class="text-xl font-display font-semibold mb-4 text-luxury-gold">È disponibile la documentazione API?</h3>
            <p class="body-text-luxury">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi voluptas inventore, maiores dolores atque error. Error eius, provident, sint esse modi ipsa dolorum, velit numquam nihil aperiam vero dolorem?
            </p>
          </div>

          <div class="glass-card-enhanced">
            <h3 class="text-xl font-display font-semibold mb-4 text-luxury-gold">Come funziona il supporto tecnico?</h3>
            <p class="body-text-luxury">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae alias vero dicta natus accusantium ullam, doloremque impedit dolor temporibus atque ab ipsa aliquid quia. Tempora quod beatae dolorem sed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to Home -->
    <section class="section-luxury-compact text-center">
      <router-link to="/" class="btn-luxury-outline">
        ← Torna alla Homepage
      </router-link>
    </section>
  </div>
</template>

<script>
import { IconMail, IconClock } from '@tabler/icons-vue'

export default {
  name: 'HelpCenter',
  components: {
    IconMail,
    IconClock
  },
  setup() {
    // Environment variables
    const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL
    const supportEmailLink = `mailto:${supportEmail}`
    
    const showEmailModal = (event) => {
      event.preventDefault()
      // Emit event to parent component (App.vue) to show modal
      window.dispatchEvent(new CustomEvent('showEmailModal', { 
        detail: { href: event.target.href } 
      }))
    }

    return {
      supportEmail,
      supportEmailLink,
      showEmailModal
    }
  }
}
</script> 