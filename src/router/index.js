import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/guideline',
    name: 'guideline',
    component: () => import('../views/GuideLine.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashProducts.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/DashCoupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/DashOrder.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'userboard',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: 'checklist',
        name: 'checklist',
        component: () => import('../views/checkout/1-CheckList.vue')
      },
      {
        path: 'checkinfo',
        name: 'checkinfo',
        component: () => import('../views/checkout/2-CheckCustomer.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout-order',
        component: () => import('../views/checkout/3-CheckFinal.vue')
      },
      {
        path: 'locations',
        name: 'locations',
        component: () => import('../views/LocationsPage.vue')
      },
      {
        path: 'promotions',
        name: 'promotions',
        component: () => import('../views/PromotionNews.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
