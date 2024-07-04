<template>
    <footer class="bg-white drop-shadow-[35px_0px_5px_rgba(0,0,0,0.2)]">
        <div class="pt-4 px-8 lg:pt-8 lg:px-12">
            <div class="max-w-7xl border-b-2 border-gray-200 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 lg:space-x-2 xl:space-x-4">
                <div class="py-2 lg:col-span-4 space-y-2 lg:space-y-4">
                    <TheLogo/>
                    <p class="font-sans">Simulasi Perhitungan Retribusi <br class="hidden lg:block"> Persetujuan Bangunan Gedung (PBG) <br class="hidden lg:block"> Kabupaten Indramayu</p>
                </div>
                <div class="lg:col-span-3 py-2 xl:p-4">
                    <h5 class="text-xl font-bold text-primary">Tautan</h5>
                    <div class="py-4 text-lg">
                        <router-link to="/" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="size-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            SIMBG
                        </router-link>
                        <a href="https://wa.me/+6287841401022" target="_blank" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="size-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            Hubungi Kami
                        </a>
                    </div>
                </div>
                <div class="lg:col-span-3 py-2 xl:p-4">
                    <h5 class="text-xl font-bold text-primary">Kontak</h5>
                    <div class="py-4 text-lg">
                        <p>Jl. Pahlawan No. 61, 
                            <br>Lemahmekar, Indramayu
                            <br>Telp. (0234) 274264
                            <br>Fax. (0234) 272141
                        </p>
                    </div>
                </div>
                <div class="lg:col-span-2 py-2 xl:p-4">
                    <h5 class="text-xl font-bold text-primary lg:text-center">Media Sosial</h5>
                    <div class="flex space-x-2 lg:justify-around py-4 text-lg mx-auto">
                        <a href="https://www.instagram.com/dpupr.indramayu/" target="_blank" class="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                            <img src="@/assets/icons/instagram.png" alt="Instagram Logo" class="h-11 w-11">
                        </a>
                        <a href="https://www.facebook.com/dinaspuprindramayu" target="_blank" class="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                            <img src="@/assets/icons/facebook.png" alt="Facebook Logo" class="h-9 w-9">
                        </a>
                        <a href="/" class="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                            <img src="@/assets/icons/twitter.png" alt="Twitter Logo" class="h-9 w-9">
                        </a>
                    </div>
                </div>
            </div>
            <div class="py-6">
                <p class="text-sm lg:text-base text-center">&copy; 2024 Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Indramayu</p>
            </div>
        </div>
        <div class="max-w-screen">
            <img src="@/assets/icons/building.gif" alt="Animation">
        </div>
    </footer>
</template>

<script>
import TheLogo from "@/components/partials/TheLogo.vue";
export default {
    components: {
        TheLogo
    }
}


</script>