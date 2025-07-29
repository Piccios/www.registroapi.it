import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import HomePage from './pages/HomePage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import CookiePage from './pages/CookiePage.vue'
import ContactPage from './pages/ContactPage.vue'
import HelpCenter from './pages/HelpCenter.vue'

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
  scrollBehavior() {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app') 