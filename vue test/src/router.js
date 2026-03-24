import { createMemoryHistory, createRouter } from 'vue-router'

import ProductView from './views/ProductView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/listProduct', component: ProductView}
]

const router = createRouter({
  // Note: We're using createMemoryHistory() here for compatibility
  //       with the Playground. In a real application you'd usually
  //       use createWebHistory() or createWebHashHistory() instead,
  //       tying the route to the browser URL. See the documentation
  //       for more information about history modes.
  history: createMemoryHistory(),
  routes,
})

export default router