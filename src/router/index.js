import { createRouter, createWebHistory } from 'vue-router'
import EmallView from '../views/EmallView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: EmallView
    },
    {
      path: '/products',
      component: () => import('../views/AddProductView.vue')
    },
    {
      path: '/member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/order',
      component: () => import('../views/OrderList.vue')
    }
  ]
})

export default router
