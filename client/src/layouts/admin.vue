<template>
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog class="relative z-40 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>
  
          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
              <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute right-0 top-0 -mr-14 p-1">
                    <button type="button" class="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none" @click="sidebarOpen = false">
                      <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                      <span class="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex flex-shrink-0 items-center px-4">
                    <img src="@/assets/logos/logo-siperiayu.svg" alt="Logo Siperiayu" class="h-10 sm:h-11 md:h-12 lg:14">
                </div>
                <div class="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav class="flex h-full flex-col">
                    <div class="space-y-1">
                      <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-secondary bg-purple-50 text-secondary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center border-l-4 px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                        <component :is="item.icon" :class="[item.current ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                    <div class="mt-auto space-y-1 pt-10">
                      <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="group flex items-center border-l-4 border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <component :is="item.icon" class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
            <div class="w-14 flex-shrink-0" aria-hidden="true">
              <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
  
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <nav class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pb-4 pt-5">
          <div class="flex flex-shrink-0 items-center px-4">
            <img src="@/assets/logos/logo-siperiayu.svg" alt="Logo Siperiayu" class="h-10 sm:h-11 md:h-12 lg:14">
          </div>
          <div class="mt-8 flex-grow">
            <div class="space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-secondary bg-purple-50 text-secondary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium']">
                <component :is="item.icon" :class="[item.current ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
          </div>
          <div class="block w-full flex-shrink-0">
            <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="group flex items-center border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <component :is="item.icon" class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
  
      <!-- Content area -->
      <div class="lg:pl-64">
        <div class="lg:px-8">
          <div class="mx-auto flex flex-col lg:max-w-7xl">  
            <main class="flex-1">
              <div class="relative mx-auto w-full">
                <router-view/>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel, Switch, SwitchGroup, SwitchLabel, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import {
    ArrowLeftOnRectangleIcon,
    Bars3BottomLeftIcon,
    BellIcon,
    BriefcaseIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    CogIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  
  const navigation = [
    { name: 'Beranda', href: '#', icon: HomeIcon, current: false },
    { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
    { name: 'Applications', href: '#', icon: DocumentMagnifyingGlassIcon, current: false },
    { name: 'Messages', href: '#', icon: ChatBubbleOvalLeftEllipsisIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: true },
  ]
  const secondaryNavigation = [
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Logout', href: '#', icon: ArrowLeftOnRectangleIcon },
  ]
  const tabs = [
    { name: 'General', href: '#', current: true },
    { name: 'Password', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Plan', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
  ]
  
  const sidebarOpen = ref(false)
  const automaticTimezoneEnabled = ref(true)
  const autoUpdateApplicantDataEnabled = ref(false)
  </script>