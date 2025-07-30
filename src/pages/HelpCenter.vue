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
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconMail class="w-10 h-10 text-luxury-gold" />
          </div>
          <h3 class="text-2xl font-display font-semibold mb-6 text-luxury-gold">Supporto Email</h3>
          <p class="body-text-luxury mb-6">Contatto diretto per assistenza tecnica</p>
          <a :href="supportEmailLink" @click="showEmailModal" class="text-luxury-gold hover:text-luxury-gold-light transition-colors duration-300 font-medium">{{ supportEmail }}</a>
        </div>
        <div class="glass-card-enhanced text-center">
          <div class="w-20 h-20 icon-artistic flex items-center justify-center mx-auto mb-8">
            <IconClock class="w-10 h-10 text-luxury-gold" />
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

        <!-- Funzionamento del Servizio -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold text-center">
            Funzionamento del Servizio
          </h3>
          <div class="space-y-6">
            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">1. Cosa sono le API offerte da RegistroAPI?</h4>
              <p class="body-text-luxury">
                Le nostre API consentono di accedere in tempo reale a informazioni ufficiali e certificate su imprese, immobili, persone, visure camerali, atti, bilanci, rischi e molto altro, con copertura nazionale ed europea.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">2. A cosa servono le API di RegistroAPI?</h4>
              <p class="body-text-luxury">
                Sono usate da banche, assicurazioni, SGR, fiduciari, studi legali, comuni, università e tech company per integrare dati pubblici e certificati nei propri processi decisionali, gestionali, investigativi o di onboarding clienti (KYC, AML, scoring, M&A, ecc.).
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">3. Come funziona l'accesso ai dati?</h4>
              <p class="body-text-luxury">
                Offriamo un accesso illimitato tramite licenza annuale: niente ricariche, niente consumo a crediti. Le nostre API sono documentate e pronte all'uso, e un account manager ti guida nell'integrazione.
              </p>
            </div>
          </div>
        </div>

        <!-- Modelli Commerciali -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold text-center">
            Modelli Commerciali
          </h3>
          <div class="space-y-6">
            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">4. Quanto costa il servizio?</h4>
              <p class="body-text-luxury">
                Il prezzo varia in base ai moduli richiesti e all'utilizzo aziendale. Offriamo solo formule flat a canone annuo, senza costi a chiamata. Contattaci per un'offerta su misura.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">5. Offrite anche formule a consumo o a credito?</h4>
              <p class="body-text-luxury">
                No. A differenza di altre piattaforme, noi forniamo solo contratti flat illimitati, per garantire massima prevedibilità di costo, efficienza e libertà nell'utilizzo.
              </p>
            </div>
          </div>
        </div>

        <!-- Sicurezza e Legalità -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold text-center">
            Sicurezza e Legalità
          </h3>
          <div class="space-y-6">
            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">6. Le vostre fonti dati sono ufficiali?</h4>
              <p class="body-text-luxury">
                Sì. Le informazioni provengono da pubblici registri come Camera di Commercio, Agenzia delle Entrate, Catasto, PRA, ANPR, INPS, Gazzette Ufficiali e altre fonti verificate. Tutti i dati sono gestiti nel rispetto delle normative.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">7. Siete autorizzati per l'attività di investigazione commerciale?</h4>
              <p class="body-text-luxury">
                Sì. RegistroAPI (già PortaleAPI.it / .com) opera con licenza TULPS n. 234801, rilasciata dalla Questura per attività investigative e raccolta dati su mandato.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">8. I dati sono aggiornati in tempo reale?</h4>
              <p class="body-text-luxury">
                Sì. Tutte le API lavorano su fonti dinamiche o aggiornate con periodicità garantita, specificata nella documentazione tecnica.
              </p>
            </div>
          </div>
        </div>

        <!-- Supporto & Integrazione -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold text-center">
            Supporto & Integrazione
          </h3>
          <div class="space-y-6">
            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">9. Quanto è difficile integrare le API?</h4>
              <p class="body-text-luxury">
                Tutte le API sono REST, documentate in modo semplice e pronte per l'integrazione in CRM, software interni, piattaforme e app. Ti forniamo supporto tecnico dedicato.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">10. In quanto tempo attivate il servizio?</h4>
              <p class="body-text-luxury">
                Entro 1 ora dalla richiesta (negli orari 9–19, 7 giorni su 7). L'account manager dedicato ti seguirà nella configurazione e durante tutto il contratto.
              </p>
            </div>

            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">11. Chi ha già scelto RegistroAPI?</h4>
              <p class="body-text-luxury">
                Tra i nostri clienti: BNP Paribas, Euroansa, Dentons, PWC, Comune di Genova, Comune di Venezia, Università di Pisa, Cassa di Risparmio Sparkasse, Aruba.
              </p>
            </div>
          </div>
        </div>

        <!-- Contesto d'uso -->
        <div class="mb-16">
          <h3 class="text-2xl font-display font-semibold mb-8 text-luxury-gold text-center">
            Contesto d'uso
          </h3>
          <div class="space-y-6">
            <div class="glass-card-enhanced">
              <h4 class="text-xl font-display font-semibold mb-4 text-luxury-gold">12. Per quali settori è utile il vostro servizio?</h4>
              <div class="body-text-luxury space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="text-luxury-gold text-lg mt-1">•</span>
                  <div>
                    <span class="font-semibold text-luxury-gold">Banche e assicurazioni:</span>
                    <span class="text-luxury-text-secondary"> onboarding clienti, KYC, scoring, erogazione mutui</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-luxury-gold text-lg mt-1">•</span>
                  <div>
                    <span class="font-semibold text-luxury-gold">SGR e Fiduciarie:</span>
                    <span class="text-luxury-text-secondary"> controllo asset, tracciabilità, antiriciclaggio</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-luxury-gold text-lg mt-1">•</span>
                  <div>
                    <span class="font-semibold text-luxury-gold">Studi legali e Notai:</span>
                    <span class="text-luxury-text-secondary"> atti, visure, due diligence, ipocatastali</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-luxury-gold text-lg mt-1">•</span>
                  <div>
                    <span class="font-semibold text-luxury-gold">Enti pubblici:</span>
                    <span class="text-luxury-text-secondary"> digitalizzazione, accertamenti, pratiche</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="text-luxury-gold text-lg mt-1">•</span>
                  <div>
                    <span class="font-semibold text-luxury-gold">Aziende IT e Fintech:</span>
                    <span class="text-luxury-text-secondary"> arricchimento dati, automazione processi</span>
                  </div>
                </div>
              </div>
            </div>
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
import { IconClock, IconMail } from '@tabler/icons-vue'

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
