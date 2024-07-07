<template>
    <Disclosure as="nav" id="navbar" class="bg-white z-20 sticky top-0 left-0" v-slot="{ open }" :class="{ 'shadow transition-shadow delay-150 duration-600 ease-in-out' : !view.atTopOfPage}">
      <div class="relative ease-in-out transition-opacity opacity-80 ease-in-out duration-300" :class="{ 'hidden' : !view.atTopOfPage}">
        <img src="@/assets/backgrounds/bg-navbar.svg" alt="" class="absolute top-12 sm:top-6 md:top-8 lg:top-4 xl:-top-2 2xl:-top-3 3xl:-top-8 w-full">
      </div>
      <div class="mx-auto px-3 md:px-4 py-1 md:py-2 lg:py-3">
        <div class="relative flex h-16 justify-between lg:px-4">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
                <div class="flex items-center space-x-1">
                    <img src="@/assets/logos/indramayu.png" alt="Logo Indramayu" class="h-10 sm:h-11 md:h-12 lg:14">
                    <img src="@/assets/logos/logo-siperiayu.svg" alt="Logo Siperiayu" class="h-10 sm:h-11 md:h-12 lg:14">
                </div>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex space-x-6 lg:space-x-8 xl:space-x-12">
                <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <a href="#" class="flex items-center text-sm md:text-base hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/home.svg" alt="Home Icon" class="mr-2 h-5 md:h-6">
                    Beranda
                </a>
                <router-link to="#kalkulator" class="flex items-center text-sm md:text-base hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/calculator.svg" alt="Calculator Icon" class="mr-2 h-5 md:h-6">
                    Kalkulator
                </router-link>
                <a href="https://wa.me/+6287841401022" target="_blank" class="flex items-center text-sm md:text-base hover:opacity-90 hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 duration-300">
                    <img src="@/assets/icons/phone.svg" alt="Phone Icon" class="mr-2 h-5 md:h-6">
                    Hubungi Kami
                </a>
            </div>
          <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div> -->
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-4 pt-2">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <a href="#" class="block border-l-4 border-primary py-2 pl-3 pr-4 text-base font-medium text-primary">Beranda</a>
          <router-link to="#kalkulator" @click.native="open = !open" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Kalkulator</router-link>
          <a href="https://wa.me/+6287841401022" target="_blank" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Hubungi Kami</a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive } from 'vue'

const view = reactive({
  atTopOfPage: true
});

const handleScroll = () => {
  if(window.pageYOffset>35){
      if(view.atTopOfPage) view.atTopOfPage = false
  }else{
      if(!view.atTopOfPage) view.atTopOfPage = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

</script>