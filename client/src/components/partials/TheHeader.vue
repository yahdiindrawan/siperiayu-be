<template>
    <header class="mx-2 px-4 py-3 sticky top-0 bg-white rounded-b-2xl" :class="{ 'shadow-2xl' : !view.atTopOfPage}">
        <!-- <img src="@/assets/backgrounds/header-pattern.svg" alt=""> -->
        <div class="flex justify-between px-4">
            <div class="flex items-center space-x-1">
                <img src="@/assets/logos/indramayu.png" alt="Logo Indramayu" class="h-14">
                <img src="@/assets/logos/logo-siperiayu.svg" alt="Logo Siperiayu" class="h-14">
            </div>
            <nav class="flex space-x-12">
                <router-link to="#beranda" class="flex items-center hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/home.svg" alt="Home Icon" class="mr-2 h-6">
                    Beranda
                </router-link>
                <a href="#kalkulator" class="flex items-center hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/calculator.svg" alt="Calculator Icon" class="mr-2 h-6">
                    Kalkulator
                </a>
                <router-link to="/" class="flex items-center hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/phone.svg" alt="Phone Icon" class="mr-2 h-6">
                    Hubungi Kami
                </router-link>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            view: {
                atTopOfPage: true
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset>0){
                // user is scrolled
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{
                // user is at top of page
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
            }
        }
    }
}
</script>