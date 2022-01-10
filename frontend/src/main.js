import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
//import axios from 'axios'
//Vue.prototype.$axios = axios
createApp(App).use(router).mount('#app')
