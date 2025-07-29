<template>
  <div class="client-carousel">
    <div class="carousel-container">
      <div class="carousel-track">
        <!-- First set of logos -->
        <div 
          v-for="(client, index) in clients" 
          :key="`first-${client.name}`"
          class="carousel-item"
        >
          <div class="client-logo-container">
            <img 
              :src="client.logo" 
              :alt="client.name"
              :class="['client-logo', { 'no-filter': client.name === 'Comune di Venezia' }]"
              @load="onImageLoad"
            />
            <p v-if="client.name === 'Comune di Venezia'" class="client-name-venezia">{{ client.name }}</p>
          </div>
        </div>
        
        <!-- Duplicate set for seamless loop -->
        <div 
          v-for="(client, index) in clients" 
          :key="`second-${client.name}`"
          class="carousel-item"
        >
          <div class="client-logo-container">
            <img 
              :src="client.logo" 
              :alt="client.name"
              :class="['client-logo', { 'no-filter': client.name === 'Comune di Venezia' }]"
              @load="onImageLoad"
            />
            <p v-if="client.name === 'Comune di Venezia'" class="client-name-venezia">{{ client.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ClientCarousel',
  setup() {
    const clients = ref([
      {
        name: 'BNP Paribas',
        logo: '/img/clients/BNP_Paribas_logo.png'
      },
      {
        name: 'Euroansa',
        logo: '/img/clients/Euroansa_logo.png'
      },
      {
        name: 'Aruba',
        logo: '/img/clients/Aruba_logo.png'
      },
      {
        name: 'Comune di Venezia',
        logo: '/img/clients/Venezia_stemma.png'
      },
      {
        name: 'PwC',
        logo: '/img/clients/PwC_logo.png'
      },
      {
        name: 'Università di Pisa',
        logo: '/img/clients/UniPi_logo.png'
      },
      {
        name: 'Sparkasse',
        logo: '/img/clients/Sparkasse_logo.png'
      },
      {
        name: 'Dentons',
        logo: '/img/clients/Dentons_logo.svg'
      }
    ])

    const onImageLoad = () => {
      // Handle image load if needed
    }

    return {
      clients,
      onImageLoad
    }
  }
}
</script>

<style scoped>
.client-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 0;
  padding: 3rem 0;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  animation: scroll 80s linear infinite;
  width: max-content;
}

.carousel-item {
  flex-shrink: 0;
  padding: 0 3rem;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-logo-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.client-logo {
  height: 120px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
  filter: brightness(0) invert(1); /* Make logos white */
  transition: all 0.5s ease;
}

.client-logo.no-filter {
  filter: none; /* Remove filter for Comune di Venezia */
}

.client-name-venezia {
  font-size: 0.9rem;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.02em;
  font-family: 'Inter', sans-serif;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.carousel-track:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-item {
    padding: 0 2rem;
    min-width: 200px;
  }
  
  .client-logo {
    height: 80px;
    max-width: 140px;
  }
  
  .client-name-venezia {
    font-size: 0.8rem;
  }
  
  .carousel-track {
    animation-duration: 60s;
  }
}

@media (max-width: 480px) {
  .carousel-track {
    animation-duration: 50s;
  }
  
  .client-carousel {
    padding: 2rem 0;
  }
}
</style> 