<template>
  <div class="">
    <!-- Hero Section -->
     <section class="mt-2 lg:mt-8">
      <div class="max-w-7xl mx-auto py-4 lg:py-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 content-center">
          <div class="p-4 order-last lg:order-first">
            <img src="@/assets/illustrations/hero.svg" alt="Hero Illustration" class="w-full max-w-2xl mx-auto">
          </div>
          <div class="flex items-center">
            <div class="p-8 space-y-4 lg:space-y-6 max-w-2xl mx-auto">
              <img src="@/assets/logos/calculator-pbg.svg" alt="" class="h-10 md:h-12">
              <h4 class="text-2xl md:text-3xl uppercase font-bold">
                Simulasi Perhitungan <br>
                Retribusi PBG <br>
                KABUPATEN Indramayu
              </h4>
              <p class="text-sm md:text-base">Simulasi perhitungan retribusi Persetujuan Bangunan Gedung (PBG) untuk Bangunan Baru/Renovasi, membantu anda dalam menghitung perkiraan pembayaran retribusi PBG.</p>
              <div>
                <router-link to="#kalkulator" class="bg-secondary text-white px-6 py-2 rounded-xl text-base md:text-lg shadow-lg hover:shadow-2xl hover:opacity-90">Mulai Hitung</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen mt-8">
          <img src="@/assets/icons/building.gif" alt="Animation" class="bg-cover w-full">
      </div>
     </section>
     <!-- Section Kalkulator -->
      <section id="kalkulator" class="bg-beige">
        <div class="max-w-7xl mx-auto py-12">
          <div class="flex">
            <h2 class="text-primary font-bold text-3xl flex">
              <p class="underline underline-offset-8 decoration-black">K</p>
              alkulator PBG
            </h2>
          </div>
          <p class="pt-2">Simulasi perhitungan retribusi PBG</p>
        </div>
      </section>
  </div>
</template>
