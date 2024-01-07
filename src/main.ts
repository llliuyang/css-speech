import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from "./router/index"

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'

const app = createApp(App)
app.use(Router)
app.mount('#app')
