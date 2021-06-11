import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
.use(store)
.mount('#app')
