<template>
  <div>
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold mb-4">🌤️ Weather Information</h1>
      <p class="text-secondary">Check current weather conditions</p>
    </div>

    <!-- Location Input -->
    <div class="card mb-6">
      <div class="flex gap-4 mb-4">
        <button @click="getCurrentLocation" class="btn btn-secondary" :disabled="loading">
          📍 Use Current Location
        </button>
        
        <span class="text-secondary">&nbsp; or enter coordinates manually</span>
      </div>
      
      <form @submit.prevent="getWeather" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="latitude"
          type="number"
          step="any"
          placeholder="Latitude (e.g., 40.7128)"
          class="form-input"
          required
        />
        <input
          v-model="longitude"
          type="number"
          step="any"
          placeholder="Longitude (e.g., -74.0060)"
          class="form-input"
          required
        />
        <button type="submit" class="btn btn-primary" :disabled="loading">
          Get Weather
        </button>
      </form>
    </div>

    <!-- Weather Display -->
    <div v-if="loading" class="text-center">
      <p>Loading weather data...</p>
    </div>

    <div v-else-if="weather" class="weather-card card">
      <div class="text-center mb-4">
        <h2 class="text-xl font-semibold">{{ weather.name }}, {{ weather.sys.country }}</h2>
        <div class="weather-temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="weather-description">{{ weather.weather[0].description }}</div>
      </div>

      <div class="weather-details">
        <div class="weather-detail">
          <div class="font-semibold">Feels Like</div>
          <div class="text-lg">{{ Math.round(weather.main.feels_like) }}°C</div>
        </div>
        <div class="weather-detail">
          <div class="font-semibold">Humidity</div>
          <div class="text-lg">{{ weather.main.humidity }}%</div>
        </div>
        <div class="weather-detail">
          <div class="font-semibold">Pressure</div>
          <div class="text-lg">{{ weather.main.pressure }} hPa</div>
        </div>
        <div class="weather-detail">
          <div class="font-semibold">Wind Speed</div>
          <div class="text-lg">{{ weather.wind.speed }} m/s</div>
        </div>
      </div>
    </div>

    <div v-else-if="error" class="card">
      <div class="text-center text-red-600">
        <p>{{ error }}</p>
      </div>
    </div>

    <div v-else class="card">
      <div class="text-center text-secondary">
        <p>Enter coordinates or use current location to get weather information</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const weather = ref(null)
const latitude = ref('')
const longitude = ref('')
const loading = ref(false)
const error = ref('')

const API_BASE = 'http://localhost:5000/api'

// Get current location
const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    error.value = 'Geolocation is not supported by this browser'
    return
  }

  loading.value = true
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
      getWeather()
    },
    (err) => {
      loading.value = false
      error.value = 'Unable to retrieve your location'
      console.error('Geolocation error:', err)
    }
  )
}

// Get weather data
const getWeather = async () => {
  if (!latitude.value || !longitude.value) {
    error.value = 'Please provide both latitude and longitude'
    return
  }

  try {
    loading.value = true
    error.value = ''
    
    const response = await $fetch(`${API_BASE}/weather`, {
      query: {
        lat: latitude.value,
        lon: longitude.value
      }
    })
    
    weather.value = response
  } catch (err) {
    error.value = 'Failed to fetch weather data. Please try again.'
    console.error('Weather fetch error:', err)
  } finally {
    loading.value = false
  }
}

// Load default location (New York) on mount
onMounted(() => {
  latitude.value = 40.7128
  longitude.value = -74.0060
  getWeather()
})
</script>
