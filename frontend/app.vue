<template>
  <div>
    <!-- Navigation Header -->
    <header class="navbar">
      <nav class="nav-container">
        <div class="nav-content">
          <div class="nav-brand">
            <h1 class="brand-title">Todo & Weather App</h1>
          </div>
          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/todos" class="nav-link">Todos</NuxtLink>
            <NuxtLink to="/weather" class="nav-link">Weather</NuxtLink>
            <!-- <button @click="toggleColorMode" class="theme-toggle">
              <Icon :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="theme-icon" />
            </button> -->
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="footer-text">© 2024 Todo & Weather App. Built with Nuxt.js & Express</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(243 244 246);
}

.dark ::-webkit-scrollbar-track {
  background: rgb(31 41 55);
}

::-webkit-scrollbar-thumb {
  background: rgb(209 213 219);
  border-radius: 9999px;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(156 163 175);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

/* Navbar styles */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-brand {
  flex: 1;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.nav-links {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #111827;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

/* Main content styles */
.main-content {
  min-height: calc(100vh - 128px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

/* Footer styles */
.footer {
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0;
}

.footer-text {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
}
</style>
