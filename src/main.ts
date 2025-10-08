/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { applyPolyfills, on, postEvent } from '@tma.js/bridge'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Styles
import 'unfonts.css'

const app = createApp(App)

// Apply polyfills for Object.hasOwn. Bridge validators use it.
applyPolyfills()

// Show the back button, wait for it to be clicked once,
// then hide it.
postEvent('web_app_setup_back_button', { is_visible: true })

const off = on('back_button_pressed', () => {
  postEvent('web_app_setup_back_button', { is_visible: false })
  off()
})

registerPlugins(app)

app.mount('#app')
