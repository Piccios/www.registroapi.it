<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="section-luxury text-center">
      <h1 class="heading-luxury mb-8">
        Contatta il Nostro <span class="text-gradient-gold">Team</span>
      </h1>
      <p class="subheading-luxury max-w-3xl mx-auto">
        Siamo qui per supportarti con soluzioni API personalizzate per il tuo business
      </p>
    </section>

    <!-- Contact Info -->
    <section class="section-luxury-compact">
      <div class="grid md:grid-cols-3 gap-12 mb-8">
        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconMail class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Supporto Tecnico</h3>
          <p class="body-text-luxury mb-6">Per assistenza API e problemi tecnici</p>
          <a :href="supportEmailLink" @click="showEmailModal" class="text-luxury-gold hover:text-luxury-gold-light transition-colors duration-300 font-medium">
            {{ supportEmail }}
          </a>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconClock class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Tempi di Risposta</h3>
          <p class="body-text-luxury mb-6">Garantiamo risposta entro</p>
          <p class="text-luxury-gold font-display font-semibold text-xl">1 ora</p>
        </div>

        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconPhone class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Orari Supporto</h3>
          <p class="body-text-luxury mb-6">7 giorni su 7</p>
          <p class="text-luxury-gold font-display font-semibold text-xl">9:00 - 19:00</p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-luxury">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="heading-luxury-medium mb-8">
            Richiedi <span class="text-gradient-gold">Accesso API</span>
          </h2>
          <p class="subheading-luxury">
            Compila il form per richiedere l'accesso alle API illimitate e ricevere una consulenza personalizzata
          </p>
        </div>

        <form @submit.prevent="submitForm" class="glass-card-enhanced">
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label for="firstName" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Nome *</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="input-luxury"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label for="lastName" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Cognome *</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="input-luxury"
                placeholder="Il tuo cognome"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label for="email" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Email Aziendale *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input-luxury"
                placeholder="email@azienda.com"
              />
            </div>
            <div>
              <label for="company" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Azienda *</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                required
                class="input-luxury"
                placeholder="Nome azienda"
              />
            </div>
          </div>

          <div class="mb-8">
            <label for="sector" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Settore di Interesse *</label>
            <select
              id="sector"
              v-model="form.sector"
              required
              class="input-luxury"
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

          <div class="mb-8">
            <label for="message" class="block text-luxury-gold font-semibold mb-3 tracking-wide">Descrivi le tue esigenze *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="textarea-luxury"
              placeholder="Descrivi il tuo progetto e le API di cui hai bisogno..."
            ></textarea>
          </div>

          <div class="mb-10">
            <label class="flex items-start space-x-4">
              <input
                v-model="form.privacy"
                type="checkbox"
                required
                class="mt-1 text-luxury-gold focus:ring-luxury-gold"
              />
              <span class="body-text-luxury">
                Accetto la <router-link to="/privacy-policy" class="text-luxury-gold hover:text-luxury-gold-light underline transition-colors duration-300">Privacy Policy</router-link>
                e autorizzo il trattamento dei miei dati per ricevere informazioni commerciali. *
              </span>
            </label>
          </div>

          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-luxury text-lg px-12 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Invio in corso...</span>
              <span v-else class="flex items-center">
                <IconSend class="w-5 h-5 mr-3" />
                <span>Invia Richiesta</span>
              </span>
            </button>
          </div>

          <div v-if="submitMessage" class="mt-8 p-6 rounded-none" :class="submitSuccess ? 'bg-green-900/20 border border-green-500/30 text-green-400' : 'bg-red-900/20 border border-red-500/30 text-red-400'">
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
      <p class="body-text-luxury mb-10 max-w-2xl mx-auto">
        Per problemi tecnici, assistenza API o supporto immediato, contatta direttamente il nostro team
      </p>
      <div class="flex justify-center">
        <a :href="supportEmailLink" @click="showEmailModal" class="btn-luxury flex items-center">
          <IconMail class="w-5 h-5 mr-3" />
          Supporto Tecnico Diretto
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { IconClock, IconMail, IconPhone, IconSend } from '@tabler/icons-vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'ContactPage',
  components: {
    IconMail,
    IconClock,
    IconPhone,
    IconSend
  },
  setup() {
    // Initialize EmailJS when component mounts
    onMounted(() => {
      if (window.emailjs) {
        // Initialize with EmailJS Public Key from environment variables
        window.emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      }
    })
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      sector: '',
      message: '',
      privacy: false
    })

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitSuccess = ref(false)

    const submitForm = async () => {
      isSubmitting.value = true
      submitMessage.value = ''

      try {
        // EmailJS configuration
        const emailjs = window.emailjs

        // Prepare email template parameters
        const templateParams = {
          form_name: form.value.firstName,
          form_lastname: form.value.lastName,
          form_email: form.value.email,
          company: form.value.company,
          sector: form.value.sector,
          message: form.value.message,
          time: new Date().toLocaleString('it-IT')
        }

        // Send email using EmailJS with environment variables
        const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        submitSuccess.value = true
        submitMessage.value = 'La tua richiesta è stata inviata con successo! Ti contatteremo entro 1 ora.'

        // Reset form
        form.value = {
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          sector: '',
          message: '',
          privacy: false
        }

      } catch (error) {
        console.error('EmailJS Error:', error)
        submitSuccess.value = false
        submitMessage.value = 'Si è verificato un errore nell\'invio. Ti preghiamo di contattare' + supportEmail
      } finally {
        isSubmitting.value = false
      }
    }

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
      form,
      isSubmitting,
      submitMessage,
      submitSuccess,
      submitForm,
      supportEmail,
      supportEmailLink,
      showEmailModal
    }
  }
}
</script>
