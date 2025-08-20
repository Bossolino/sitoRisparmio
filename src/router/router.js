import index from '@/pages/index.vue'
import router from '@/router/index'

export const routes = [
  { path: '/', component: index },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})