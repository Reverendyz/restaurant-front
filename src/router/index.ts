import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home',
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'About',
    },

    {
      path: '/product',
      component: ProductPage,
      name: 'Product'
    },
  ],
})

export default router
