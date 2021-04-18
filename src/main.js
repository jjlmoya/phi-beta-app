import './css/reset.css'
import './css/variables.css'
import './css/styles.css'
import '@capacitor/core'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
