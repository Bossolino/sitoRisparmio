import index from '@/pages/index.vue'
import { createRouter, createMemoryHistory } from 'vue-router/auto'


export const routes = [
  { path: '/', component: index }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to.fullPath);
  return next()
})