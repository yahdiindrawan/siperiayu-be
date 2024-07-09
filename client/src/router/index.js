import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import LayoutDefault from "@/layouts/default.vue"
import LayoutAdmin from '@/layouts/admin.vue'

import LandingPage from '@/views/LandingPage.vue'

// Admin
import Dashboard from '@/views/admin/dashboard/Index.vue'
import DataMaster from '@/views/admin/data-master/Index.vue'
import Indeks from '@/views/admin/indeks/Index.vue'
import Kalkulator from '@/views/admin/kalkulator/Index.vue'
import Pengaturan from '@/views/admin/pengaturan/Index.vue'

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
      path: '/admin/dashboard',
      component: Dashboard,
      meta: {
        layout: LayoutAdmin,
        title: "Dashboard Admin"
      }
    },
    {
      path: '/admin/data-master',
      component: DataMaster,
      meta: {
        layout: LayoutAdmin,
        title: "Data Master"
      }
    },
    {
      path: '/admin/indeks',
      component: Indeks,
      meta: {
        layout: LayoutAdmin,
        title: "Indeks"
      }
    },
    {
      path: '/admin/kalkulator',
      component: Kalkulator,
      meta: {
        layout: LayoutAdmin,
        title: "Kalkulator"
      }
    },
    {
      path: '/admin/pengaturan',
      component: Pengaturan,
      meta: {
        layout: LayoutAdmin,
        title: "Pengaturan"
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
