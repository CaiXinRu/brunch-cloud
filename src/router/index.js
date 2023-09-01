import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/404' },
  {
    path: '/404',
    name: 'PageNotExist',
    component: () => import('@/views/PageNotExist.vue')
  },
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
    component: () => import('../views/backend/DashBoard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/backend/DashProducts.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/backend/DashCoupons.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/backend/DashOrder.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'userboard',
    component: () => import('../views/fontend/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/fontend/Home.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../views/fontend/MenuPage.vue')
      },
      {
        path: 'checklist',
        name: 'checklist',
        component: () => import('../views/fontend/checkout/A_CheckList.vue')
      },
      {
        path: 'checkinfo',
        name: 'checkinfo',
        component: () => import('../views/fontend/checkout/B_CheckCustomer.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/fontend/checkout/C_CheckFinal.vue')
      },
      {
        path: 'checkpay/:orderId',
        name: 'checkpay',
        component: () => import('../views/fontend/checkout/D_CheckPay.vue')
      },
      {
        path: 'locations',
        name: 'locations',
        component: () => import('../views/fontend/LocationsPage.vue')
      },
      {
        path: 'promotions',
        name: 'promotions',
        component: () => import('../views/fontend/PromotionNews.vue')
      },
      {
        path: 'favorites',
        name: 'favorites',
        component: () => import('../views/fontend/MyFavorites.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router

// { path: '*', redirect: '/' }
