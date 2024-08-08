<template>
  <div class="pb-16 pt-10">
    <div class="relative isolate px-6 pt-4 md:pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <div class="mb-8 flex justify-center">
          <div
            class="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10"
          >
            Dashboard Admin
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Simulasi Perhitungan<br />
            Retribusi PBG <br />
            Kabupaten Indramayu
          </h1>
          <p class="mt-6 text-base leading-8 text-gray-600">
            Simulasi perhitungan retribusi Persetujuan Bangunan Gedung (PBG)
            untuk Bangunan Baru/Renovasi, membantu anda dalam menghitung
            perkiraan pembayaran retribusi PBG.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link
              to="data-master"
              class="text-sm font-semibold leading-6 text-gray-900"
              >Coba Kelola Data <span aria-hidden="true"> →</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
