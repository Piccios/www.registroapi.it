import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import ContactPage from './pages/ContactPage.vue'
import CookiePage from './pages/CookiePage.vue'
import HelpCenter from './pages/HelpCenter.vue'
import HomePage from './pages/HomePage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import ValueDiligencePage from './pages/ValueDiligencePage.vue'

// Router configuration
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/value_diligence', name: 'value-diligence', component: ValueDiligencePage },
  { path: '/contatti', name: 'contact', component: ContactPage },
  { path: '/HelpCenter', name: 'help', component: HelpCenter },
  { path: '/privacy-policy', name: 'privacy', component: PrivacyPage },
  { path: '/cookie-policy', name: 'cookies', component: CookiePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    return { top: 0, behavior: 'smooth' }
  }
})

// Add navigation guard to handle anchor links
router.beforeEach((to, from, next) => {
  if (to.hash) {
    // Wait for the route to be resolved and then scroll
    next()
    setTimeout(() => {
      const element = document.querySelector(to.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  } else {
    next()
  }
})

// Dynamic document title and favicon per route
const DEFAULT_TITLE = 'RegistroAPI - Dati Ufficiali. Accesso Illimitato. API Professionali'
const DEFAULT_FAVICON = '/img/favicon.png'
const VD_TITLE = 'Value Diligence - Compliance, Reputazione e Due Diligence'
const VD_FAVICON = '/img/partners/value_diligence.png'

function setFavicon(href) {
  // Remove existing icon links to avoid duplicates
  document.head.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]').forEach(n => n.parentNode && n.parentNode.removeChild(n))

  // Add multiple sizes so browsers can pick a larger, crisp icon
  const sizes = [
    { rel: 'icon', size: '32x32' },
    { rel: 'icon', size: '48x48' },
    { rel: 'icon', size: '64x64' },
    { rel: 'icon', size: '96x96' },
    { rel: 'icon', size: '192x192' },
  ]

  sizes.forEach(({ rel, size }) => {
    const link = document.createElement('link')
    link.setAttribute('rel', rel)
    link.setAttribute('type', 'image/png')
    link.setAttribute('sizes', size)
    link.setAttribute('href', href)
    document.head.appendChild(link)
  })

  // Apple touch icon for iOS/Android add-to-home-screen
  const apple = document.createElement('link')
  apple.setAttribute('rel', 'apple-touch-icon')
  apple.setAttribute('sizes', '180x180')
  apple.setAttribute('href', href)
  document.head.appendChild(apple)

  // Shortcut icon fallback
  const shortcut = document.createElement('link')
  shortcut.setAttribute('rel', 'shortcut icon')
  shortcut.setAttribute('href', href)
  document.head.appendChild(shortcut)
}

router.afterEach((to) => {
  const isValueDiligence = to.path.startsWith('/value_diligence')
  document.title = isValueDiligence ? VD_TITLE : DEFAULT_TITLE
  setFavicon(isValueDiligence ? VD_FAVICON : DEFAULT_FAVICON)
})

const app = createApp(App)
app.use(router)

// Global click handler for navigation elements
app.directive('scroll-to-top', {
  mounted(el) {
    el.addEventListener('click', () => {
      // Scroll to top with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
})

app.mount('#app')
