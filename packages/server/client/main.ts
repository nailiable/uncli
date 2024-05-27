/// <reference types="vite-plugin-vue-configurable-router/runtime" />

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from 'virtual:vite-plugin-vue-configurable-router/runtime'
import Index from './index.vue'
import 'uno.css'

const app = createApp(Index)
const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes(),
})
app.use(router)
app.mount('#app')
