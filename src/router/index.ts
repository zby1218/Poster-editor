import { createRouter, createWebHistory } from 'vue-router'
// 这种是静态加载 首屏渲染时也全部会加载进来
// import User from '@/views/User.vue'
// import Control from '@/views/Control.vue'
// import Editor from '@/views/Editor.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/Editor.vue'),
      meta: {hideNav: true}
    },
    {
      path: '/Control',
      name: 'Control',
      component: () => import('../views/Control.vue')
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('../views/User.vue')
    }
  ],
})

export default router
