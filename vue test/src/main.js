import { createApp } from 'vue'
import App from './App.vue'
import SaisieForm from './components/SaisieForm.vue'

const app = createApp(App)

app.component('saisie-form', SaisieForm)

app.mount('#app')
