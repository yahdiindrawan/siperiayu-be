<template>
  <div class="">
    <!-- Hero Section -->
    <section
      class="relative grid place-items-center mt-2 sm:mt-4 lg:mt-6 min-h-[calc(100vh-88px)] lg:max-h-screen scroll-mt-8"
    >
      <img
        src="@/assets/icons/building-blue.gif"
        alt="Animation"
        class="hidden lg:block md:absolute bottom-6 inset-x-0 bg-cover w-full"
      />
      <div class="max-w-7xl mx-auto p-4 md:py-4 lg:py-6 lg:-mt-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 content-center">
          <div class="p-4 lg:p-8 xl:p-12 order-last lg:order-first">
            <img
              src="@/assets/illustrations/hero-blue.svg"
              alt="Hero Illustration"
              class="w-full max-w-md lg:max-w-2xl mx-auto"
            />
          </div>
          <div class="flex 2xl:items-center">
            <div
              class="p-4 lg:p-4 xl:p-4 space-y-4 lg:space-y-4 max-w-2xl mx-auto"
            >
              <img
                src="@/assets/logos/calculator-pbg-blue.svg"
                alt=""
                class="h-10 md:h-12"
              />
              <h4 class="text-lg sm:text-xl md:text-2xl uppercase font-bold">
                Simulasi Perhitungan <br class="" />
                Retribusi PBG <br class="" />
                KABUPATEN Indramayu
              </h4>
              <p class="text-sm max-w-lg md:max-w-xl md:text-base">
                Simulasi perhitungan retribusi Persetujuan Bangunan Gedung (PBG)
                untuk Bangunan Baru/Renovasi, membantu anda dalam menghitung
                perkiraan pembayaran retribusi PBG.
              </p>
              <div>
                <router-link
                  to="#kalkulator"
                  class="bg-secondary text-white px-4 py:1.5 md:px-6 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:opacity-90"
                  >Mulai Hitung</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/icons/building-mobile-blue.gif"
      alt="Animation"
      class="bg-cover lg:hidden w-full"
    />
    <TheCalculator />
  </div>
</template>

<script setup>
import TheCalculator from "@/components/partials/Kalkulator.vue";
import customFetch from "@/api";
import { onMounted } from "vue";

const getData = async () => {
  const res = await customFetch.get("/test");
  console.log(res);
};

onMounted(() => {
  getData();
});
</script>
