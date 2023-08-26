import {createVuestic} from 'vuestic-ui'
import 'vuestic-ui/css'
import './assets/main.css'
import 'virtual:uno.css'
import {createRouter, createWebHistory} from 'vue-router'
import MainPage from './components/main-page/MainPage.vue'
import SettingsPage from './components/main-page/SettingsPage.vue'

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: MainPage},
    {path: '/settings', component: SettingsPage},
  ],
})

app.use(router)
app.use(createVuestic())

app.mount('#app')
