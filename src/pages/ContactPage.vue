<template>
  <div id="top" class="contact-page">
    <!-- Hero Section -->
    <section class="section-luxury text-center">
      <h1 class="heading-luxury mb-8">
        Contatta il Nostro <span class="text-gradient-gold">Team</span>
      </h1>
      <p class="subheading-luxury max-w-3xl mx-auto">
        Siamo qui per supportarti con soluzioni API personalizzate per il tuo business
      </p>
    </section>

    <!-- Divider -->
    <div data-v-2d1117dc="" class="divider-luxury mt-12"></div>

    <!-- Contact Form -->
    <section class="section-luxury">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-luxury-medium mb-5">
            Richiedi <span class="text-gradient-gold">Accesso API</span>
          </h2>
          <p class="subheading-luxury text-sm md:text-base">
            Compila il form per richiedere l'accesso alle API illimitate e ricevere una consulenza personalizzata
          </p>
        </div>

        <form @submit.prevent="submitForm" class="glass-card-enhanced">

          <div class="text-end mb-2 text-gray-700">
            <p class="text-sm">I campi con * sono obbligatori</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <label for="firstName" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Nome *</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="input-luxury"
                placeholder="Il tuo nome"
                autocomplete="given-name"
                :disabled="isSubmitting"
              />
            </div>
            <div>
              <label for="lastName" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Cognome *</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="input-luxury"
                placeholder="Il tuo cognome"
                autocomplete="family-name"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <label for="email" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Email Aziendale *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input-luxury"
                placeholder="email@azienda.com"
                autocomplete="email"
                :disabled="isSubmitting"
              />
            </div>
            <div>
              <label for="phone" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Numero Cellulare *</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="input-luxury"
                placeholder="+39 123 456 7890"
                autocomplete="tel"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div class="mb-6 md:mb-8">
            <label for="company" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Azienda *</label>
            <input
              id="company"
              v-model="form.company"
              type="text"
              required
              class="input-luxury"
              placeholder="Nome azienda"
              autocomplete="organization"
              :disabled="isSubmitting"
            />
          </div>

          <div class="mb-6 md:mb-8">
            <label for="sector" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Settore di Interesse *</label>
            <select
              id="sector"
              v-model="form.sector"
              required
              class="input-luxury"
              :disabled="isSubmitting"
            >
              <option value="">Seleziona il tuo settore</option>
              <option value="banking">Banche e Istituti di Credito</option>
              <option value="legal">Studi Legali</option>
              <option value="investment">SGR e Società di Investimento</option>
              <option value="fiduciary">Fiduciarie e Trust Company</option>
              <option value="insurance">Assicurazioni</option>
              <option value="other">Altro</option>
            </select>
          </div>

          <div class="mb-6 md:mb-8">
            <label for="message" class="block text-luxury-gold font-semibold mb-2 md:mb-3 tracking-wide text-sm md:text-base">Descrivi le tue esigenze</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="textarea-luxury"
              placeholder="Descrivi il tuo progetto e le API di cui hai bisogno... (opzionale)"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <div class="mb-8 md:mb-10">
            <label class="flex items-start space-x-3 md:space-x-4">
              <input
                v-model="form.privacy"
                type="checkbox"
                required
                class="mt-1 text-luxury-gold focus:ring-luxury-gold"
                :disabled="isSubmitting"
              />
              <span class="body-text-luxury text-sm md:text-base">
                Accetto la <router-link to="/privacy-policy" class="text-luxury-gold hover:text-luxury-gold-light underline transition-colors duration-300" v-scroll-to-top>Privacy Policy</router-link>
                e autorizzo il trattamento dei miei dati per ricevere informazioni commerciali. *
              </span>
            </label>
          </div>

          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting || !canSubmit"
              class="btn-artistic text-luxury-gold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              <span v-if="isSubmitting">Invio in corso...</span>
              <span v-else class="flex items-center justify-center">
                <IconSend class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                <span>Invia Richiesta</span>
              </span>
            </button>
          </div>

          <div v-if="submitMessage" class="mt-6 md:mt-8 p-4 md:p-6 rounded-none" :class="submitSuccess ? 'bg-green-900/20 border border-green-500/30 text-green-400' : 'bg-red-900/20 border border-red-500/30 text-red-400'">
            {{ submitMessage }}
          </div>
        </form>
      </div>
    </section>

    <!-- Alternative Contact -->
    <section class="section-luxury-compact bg-luxury-dark text-center">
      <h2 class="heading-luxury-medium mb-8">
        Hai bisogno di <span class="text-gradient-gold">Supporto Tecnico?</span>
      </h2>
      <p class="body-text-luxury mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
        Per problemi tecnici, assistenza API o supporto immediato, contatta direttamente il nostro team
      </p>
      <div class="flex justify-center">
        <a
          :href="supportEmailLink"
          @click="showEmailModal"
          class="btn-elegant text-luxury-gold flex items-center justify-center w-full sm:w-auto"
          :title="`Contatta il supporto tecnico: ${supportEmail}`"
        >
          <IconMail class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
          <span class="text-sm md:text-base">Supporto Tecnico Diretto</span>
        </a>
      </div>
    </section>

    <!-- Form Validation Popup Modal -->
    <div v-if="showValidationPopup" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>

      <!-- Modal Content -->
      <div class="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-none w-full max-w-md mx-auto p-6 md:p-8 text-center shadow-2xl animate-fade-in">
        <div class="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-none flex items-center justify-center mx-auto mb-4 md:mb-6">
          <IconAlertCircle class="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>

        <h3 class="text-xl md:text-2xl font-display font-semibold mb-3 md:mb-4 text-luxury-gold">Campi Obbligatori</h3>

        <p class="body-text-luxury mb-4 md:mb-6 text-sm md:text-base">
          {{ validationPopupMessage }}
        </p>

        <p class="text-xs md:text-sm text-luxury-text-secondary">
          Compila tutti i campi obbligatori per procedere
        </p>
      </div>
    </div>
    </div>
    <!-- Contact Info -->
    <section class="section-luxury-compact">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        <div class="glass-card-enhanced text-center">
          <div class="w-16 h-16 md:w-20 md:h-20 icon-artistic flex items-center justify-center mx-auto mb-6 md:mb-8">
            <IconMail class="w-8 h-8 md:w-10 md:h-10 text-luxury-gold" />
          </div>
          <h3 class="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 text-luxury-gold">Supporto Tecnico</h3>
          <p class="body-text-luxury mb-4 md:mb-6 text-sm md:text-base">Per assistenza API e problemi tecnici</p>
          <a
            :href="supportEmailLink"
            @click="showEmailModal"
            class="text-luxury-gold hover:text-luxury-gold-light transition-colors duration-300 font-medium text-sm md:text-base"
            :title="`Contatta il supporto tecnico: ${supportEmail}`"
          >
            {{ supportEmail }}
          </a>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="w-16 h-16 md:w-20 md:h-20 icon-artistic flex items-center justify-center mx-auto mb-6 md:mb-8">
            <IconClock class="w-8 h-8 md:w-10 md:h-10 text-luxury-gold" />
          </div>
          <h3 class="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 text-luxury-gold">Tempi di Risposta</h3>
          <p class="body-text-luxury mb-4 md:mb-6 text-sm md:text-base">Garantiamo risposta entro</p>
          <p class="text-luxury-gold font-display font-semibold text-lg md:text-xl">1 ora</p>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="w-16 h-16 md:w-20 md:h-20 icon-artistic flex items-center justify-center mx-auto mb-6 md:mb-8">
            <IconPhone class="w-8 h-8 md:w-10 md:h-10 text-luxury-gold" />
          </div>
          <h3 class="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6 text-luxury-gold">Orari Supporto</h3>
          <p class="body-text-luxury mb-4 md:mb-6 text-sm md:text-base">7 giorni su 7</p>
          <p class="text-luxury-gold font-display font-semibold text-lg md:text-xl">9:00 - 19:00</p>
        </div>
      </div>
    </section>

</template>

<script>
import { IconAlertCircle, IconClock, IconMail, IconPhone, IconSend } from '@tabler/icons-vue'
import { computed, onMounted, ref } from 'vue'

export default {
  name: 'ContactPage',
  components: {
    IconMail,
    IconClock,
    IconPhone,
    IconSend,
    IconAlertCircle
  },
  setup() {
    // Inizializza il componente
    onMounted(() => {
      // Imposta il tempo di inizio del form per la rilevazione dei bot
      formStartTime.value = Date.now()
    })

    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      sector: '',
      message: '',
      privacy: false
    })

    // Aggiungi il tempo di inizio del form per una migliore rilevazione dei bot
    const formStartTime = ref(0)

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitSuccess = ref(false)
    const lastSubmissionTime = ref(0) // Non più utilizzato ma mantenuto per compatibilità

    // Stato del popup di validazione
    const showValidationPopup = ref(false)
    const validationPopupMessage = ref('')

    // Limitazione del tasso di invio - prevenire invii multipli
    const canSubmit = computed(() => {
      return true // Rimossa limitazione del tasso di invio
    })

    // Mostra il popup di validazione per 3 secondi
    const showValidationPopupFor3Seconds = (message) => {
      validationPopupMessage.value = message
      showValidationPopup.value = true

      setTimeout(() => {
        showValidationPopup.value = false
      }, 3000)
    }

    // Controlla i campi obbligatori e mostra il popup se mancanti
    const checkRequiredFields = () => {
      const missingFields = []

      if (!form.value.firstName.trim()) missingFields.push('Nome')
      if (!form.value.lastName.trim()) missingFields.push('Cognome')
      if (!form.value.email.trim()) missingFields.push('Email Aziendale')
      if (!form.value.phone.trim()) missingFields.push('Numero Cellulare')
      if (!form.value.company.trim()) missingFields.push('Azienda')
      if (!form.value.sector) missingFields.push('Settore di Interesse')
      if (!form.value.privacy) missingFields.push('Accettazione Privacy Policy')

      if (missingFields.length > 0) {
        const message = `Compila i seguenti campi obbligatori: ${missingFields.join(', ')}`
        showValidationPopupFor3Seconds(message)
        return false
      }

      return true
    }

    // Rilevazione dei bot semplificata - basata sul tempo
    const isBot = () => {
      const now = Date.now()

      // Controlla se il form è stato compilato troppo rapidamente (meno di 3 secondi)
      if (formStartTime.value && (now - formStartTime.value) < 3000) {
        return true
      }

      // Controlla gli user agent sospetti
      const userAgent = navigator.userAgent.toLowerCase()
      if (userAgent.includes('bot') || userAgent.includes('crawler') || userAgent.includes('spider')) {
        return true
      }

      return false
    }

    const validateForm = () => {
      // Controlla la lunghezza del messaggio solo se il messaggio è fornito (prevenire messaggi troppo corti o troppo lunghi)
      if (form.value.message.trim() && form.value.message.length < 10) {
        return 'Il messaggio deve contenere almeno 10 caratteri.'
      }

      if (form.value.message.length > 2000) {
        return 'Il messaggio non può superare i 2000 caratteri.'
      }

      // Controlla il formato dell'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(form.value.email)) {
        return 'Inserisci un indirizzo email valido.'
      }

      // Controlla il formato del numero di cellulare (numeri italiani)
      const phoneRegex = /^(\+39|39)?[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{4}$/
      if (!phoneRegex.test(form.value.phone.replace(/\s/g, ''))) {
        return 'Inserisci un numero di cellulare valido (formato: +39 123 456 7890).'
      }

      return null
    }

    const submitForm = async () => {
      // Controlla prima i campi obbligatori
      if (!checkRequiredFields()) {
        return
      }

      isSubmitting.value = true
      submitMessage.value = ''

      try {
        // Rilevazione dei bot - permissiva in produzione
        if (isBot()) {
          // In produzione, permettiamo l'invio anche se rileviamo attività sospetta
        }

        // Validazione del form
        const validationError = validateForm()
        if (validationError) {w
          throw new Error(validationError)
        }

        // Prepara i dati per l'invio
        const postData = {
          to: import.meta.env.VITE_CONTACT_EMAIL || 'info@registroapi.it',
          subject: `Richiesta Accesso API - ${form.value.company}`,
          message: `
            Nome: ${form.value.firstName} ${form.value.lastName}
            Email: ${form.value.email}
            Telefono: ${form.value.phone}
            Azienda: ${form.value.company}
            Settore: ${form.value.sector}
            Messaggio: ${form.value.message || 'Nessun messaggio aggiuntivo'}
            Data: ${new Date().toLocaleString('it-IT')}
            User Agent: ${navigator.userAgent}
          `.trim()
        }

        // Invia la richiesta AJAX
        const response = await fetch('/mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(postData)
        })

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`)
        }

        const result = await response.json()

        if (result.success) {
          submitSuccess.value = true
          submitMessage.value = 'La tua richiesta è stata inviata con successo! Ti contatteremo entro 1 ora.'

          // Resetta il form
          form.value = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            sector: '',
            message: '',
            privacy: false
          }
        } else {
          throw new Error(result.error || 'Errore durante l\'invio')
        }

      } catch (error) {
        console.error('Form submission error:', error)
        submitSuccess.value = false
        submitMessage.value = error.message || 'Si è verificato un errore nell\'invio. Ti preghiamo di contattare ' + supportEmail
      } finally {
        isSubmitting.value = false
      }
    }

    // Variabili d'ambiente
    const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'help@registroapi.com'
    const supportEmailLink = supportEmail ? `mailto:${supportEmail}` : 'mailto:help@registroapi.com'

    // Debug: log delle variabili d'ambiente (rimuovere in produzione)
    console.log('VITE_SUPPORT_EMAIL:', import.meta.env.VITE_SUPPORT_EMAIL)
    console.log('supportEmail:', supportEmail)
    console.log('supportEmailLink:', supportEmailLink)

    const showEmailModal = (event) => {
      event.preventDefault()

      // Verifica che il link sia valido
      const href = event.target.href || event.currentTarget.href
      if (!href || !href.startsWith('mailto:')) {
        console.error('Invalid mailto link:', href)
        return
      }

      // Emit event to parent component (App.vue) to show modal
      try {
        window.dispatchEvent(new CustomEvent('showEmailModal', {
          detail: { href: href }
        }))
      } catch (error) {
        // Fallback: if modal fails, proceed with direct mailto
        console.warn('Modal failed, proceeding with direct mailto:', error)
        window.location.href = href
      }
    }

    return {
      form,
      isSubmitting,
      submitMessage,
      submitSuccess,
      canSubmit,
      showValidationPopup,
      validationPopupMessage,
      submitForm,
      supportEmail,
      supportEmailLink,
      showEmailModal
    }
  }
}
</script>
