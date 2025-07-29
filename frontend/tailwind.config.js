// tailwind.config.js
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default {
  presets: [
    resolve('./node_modules/@nuxt/ui/tailwind.preset.js')
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ]
}