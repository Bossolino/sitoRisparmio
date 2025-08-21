import { createRouter, createMemoryHistory } from 'vue-router/auto'
import { components } from 'vuetify/dist/vuetify.js'

import index from '../pages/index.vue'
import create from '../pages/create.vue'

export const routes = [
  { path: '/', component: index, name: "index"},
  { path: '/create', component: create}
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to.fullPath);
  return next()
})