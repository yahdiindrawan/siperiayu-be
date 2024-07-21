import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStores";

// Layouts
import LayoutDefault from "@/layouts/default.vue";
import LayoutAdmin from "@/layouts/admin.vue";

import LandingPage from "@/views/LandingPage.vue";
import Login from "@/views/Login.vue";

// Admin
import Dashboard from "@/views/admin/dashboard/Index.vue";
import DataMaster from "@/views/admin/data-master/Index.vue";
import Indeks from "@/views/admin/indeks/Index.vue";
import Kalkulator from "@/views/admin/kalkulator/Index.vue";
import Pengaturan from "@/views/admin/pengaturan/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingPage,
      meta: {
        layout: LayoutDefault,
        title: "Landingpage",
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/admin/dashboard",
      component: Dashboard,
      meta: {
        layout: LayoutAdmin,
        title: "Dashboard Admin",
        auth: true,
      },
    },
    {
      path: "/admin/data-master",
      component: DataMaster,
      meta: {
        layout: LayoutAdmin,
        title: "Data Master",
        auth: true,
      },
    },
    {
      path: "/admin/indeks",
      component: Indeks,
      meta: {
        layout: LayoutAdmin,
        title: "Indeks",
        auth: true,
      },
    },
    {
      path: "/admin/kalkulator",
      component: Kalkulator,
      meta: {
        layout: LayoutAdmin,
        title: "Kalkulator",
        auth: true,
      },
    },
    {
      path: "/admin/pengaturan",
      component: Pengaturan,
      meta: {
        layout: LayoutAdmin,
        title: "Pengaturan",
        auth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const yOffset = document
        .getElementById("navbar")
        .getBoundingClientRect().height;
      const element = document.getElementById(to.hash.substring(1));
      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      // return {
      //   el: to.hash,
      //   behavior: 'smooth',
      //   top:
      // }
    }
  },
});

router.beforeEach(async (to, from, next) => {
  const authStore = await useAuthStore();
  if (to.meta.auth && !authStore.currentUser) {
    alert("Anda harus login terlebih dahulu");
    next("/login");
  } else {
    next();
  }
});

export default router;
