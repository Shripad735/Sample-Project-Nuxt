<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Todo & Weather App
        </h1>
        <p class="hero-description">
          Manage your daily tasks and stay updated with weather information - all in one modern, intuitive application.
        </p>
      </div>
    </section>

    <!-- App Features Section -->
    <section class="features-section">
      <div class="features-grid">
        <div class="feature-card todo-card">
          <div class="feature-icon">
            📝
          </div>
          <h2 class="feature-title">Todo Manager</h2>
          <p class="feature-description">
            Keep track of your daily tasks, mark them as complete, and stay organized with our intuitive todo system.
          </p>
          <div class="feature-stats">
            <span class="stat">✅ Add Tasks</span>
            <span class="stat">🔄 Toggle Complete</span>
            <span class="stat">🗑️ Delete Tasks</span>
          </div>
          <NuxtLink to="/todos" class="btn btn-primary feature-btn">
            Start Managing Tasks
          </NuxtLink>
        </div>
        
        <div class="feature-card weather-card">
          <div class="feature-icon">
            🌤️
          </div>
          <h2 class="feature-title">Weather Information</h2>
          <p class="feature-description">
            Get real-time weather updates for any location. Use your current location or search by coordinates.
          </p>
          <div class="feature-stats">
            <span class="stat">🌡️ Temperature</span>
            <span class="stat">💨 Wind Speed</span>
            <span class="stat">💧 Humidity</span>
          </div>
          <NuxtLink to="/weather" class="btn btn-secondary feature-btn">
            Check Weather Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Quick Actions Section -->
    <section class="quick-actions">
      <h3 class="quick-actions-title">Quick Actions</h3>
      <div class="actions-grid">
        <NuxtLink to="/todos" class="action-item">
          <span class="action-icon">📋</span>
          <span class="action-text">View All Todos</span>
        </NuxtLink>
        <NuxtLink to="/weather" class="action-item">
          <span class="action-icon">🗺️</span>
          <span class="action-text">Weather by Location</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero-section {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
  border-radius: 1.5rem;
  margin-bottom: 3rem;
  border: 1px solid var(--border);
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.features-section {
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.todo-card:hover {
  border-color: var(--primary-color);
}

.weather-card:hover {
  border-color: var(--secondary-color);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.stat {
  background: var(--background);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  border: 1px solid var(--border);
}

.feature-btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  min-width: 200px;
}

.quick-actions {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
}

.quick-actions-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.action-item:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.action-icon {
  font-size: 1.25rem;
}

.action-text {
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-container {
    padding: 1rem 0.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .feature-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
