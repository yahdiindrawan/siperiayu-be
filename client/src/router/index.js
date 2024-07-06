import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import LayoutDefault from "@/layouts/default.vue"
import LandingPage from '@/views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
      meta: {
        layout: LayoutDefault,
        title: "Landingpage"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const yOffset = document.getElementById('navbar').getBoundingClientRect().height;
      const element = document.getElementById(to.hash.substring(1));
      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // return {
      //   el: to.hash,
      //   behavior: 'smooth',
      //   top: 
      // }
    }
  }
})

export default router
