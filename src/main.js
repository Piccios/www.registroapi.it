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

// Router configuration
const routes = [
  { path: '/', name: 'home', component: HomePage },
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

const app = createApp(App)
app.use(router)
app.mount('#app')
