<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute right-0 top-0 -mr-14 p-1">
                  <button
                    type="button"
                    class="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
                    @click="sidebarOpen = false"
                  >
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  src="@/assets/logos/logo-siperiayu-blue.svg"
                  alt="Logo Siperiayu"
                  class="h-10 sm:h-11 md:h-12 lg:14"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="flex h-full flex-col">
                  <div class="space-y-1">
                    <router-link
                      v-for="item in navigation"
                      :key="item.name"
                      :to="item.to"
                      :class="[
                        item.to === $route.path
                          ? 'border-secondary bg-purple-50 text-secondary'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center border-l-4 px-3 py-2 text-base font-medium',
                      ]"
                      :aria-current="
                        item.to === $route.path ? 'page' : undefined
                      "
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.to === $route.path
                            ? 'text-primary'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 h-6 w-6 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </router-link>
                  </div>
                  <div class="mt-auto space-y-1 pt-10">
                    <button
                      @click="LogoutUser"
                      class="group flex items-center border-l-4 border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <component
                        :is="ArrowLeftOnRectangleIcon"
                        class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
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
      <nav
        class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pb-4 pt-5"
      >
        <div class="flex flex-shrink-0 items-center px-4">
          <img
            src="@/assets/logos/logo-siperiayu-blue.svg"
            alt="Logo Siperiayu"
            class="h-10 sm:h-11 md:h-12 lg:14"
          />
        </div>
        <div class="mt-8 flex-grow">
          <div class="space-y-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.to === $route.path
                  ? 'border-secondary bg-purple-50 text-secondary'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.to === $route.path
                    ? 'text-primary'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="block w-full flex-shrink-0">
          <button
            @click="LogoutUser"
            class="group flex items-center border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <component
              :is="ArrowLeftOnRectangleIcon"
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            Logout
          </button>
        </div>
      </nav>
    </div>

    <!-- Content area -->
    <div class="lg:pl-64">
      <div class="lg:px-8">
        <div class="mx-auto flex flex-col lg:max-w-7xl">
          <div
            class="sticky top-0 z-50 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white"
          >
            <button
              type="button"
              class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <div class="flex flex-1 justify-between px-4 lg:px-0">
              <div class="flex flex-1">
                <form class="flex w-full lg:ml-0" action="#" method="GET">
                  <label for="mobile-search-field" class="sr-only">
                    Search
                  </label>
                  <label for="desktop-search-field" class="sr-only">
                    Search
                  </label>
                  <div
                    class="relative w-full text-gray-400 focus-within:text-gray-600"
                  >
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                    >
                      <MagnifyingGlassIcon
                        class="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      name="mobile-search-field"
                      id="mobile-search-field"
                      class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
                      placeholder="Cari"
                      type="search"
                    />
                    <input
                      name="desktop-search-field"
                      id="desktop-search-field"
                      class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
                      placeholder="Cari"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div class="ml-4 flex items-center lg:ml-6">
                <span class="text-sm text-gray-600 mx-1">{{ user?.name }}</span>
                <button
                  type="button"
                  class="relative rounded-full bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                >
                  <span class="absolute -inset-1.5" />
                  <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
                  <span class="sr-only">Account</span>
                </button>
              </div>
            </div>
          </div>
          <main class="flex-1">
            <div class="relative mx-auto w-full px-2">
              <slot />
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ChartPieIcon,
  QueueListIcon,
  DocumentTextIcon,
  CalculatorIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { useAuthStore } from "@/stores/authStores";
import customFetch from "@/api";

const authStores = useAuthStore();

const { LogoutUser } = authStores;

const navigation = [
  {
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: ChartPieIcon,
    current: true,
  },
  {
    name: "Data Master",
    to: "/admin/data-master",
    icon: QueueListIcon,
    current: false,
  },
  {
    name: "Indeks",
    to: "/admin/indeks",
    icon: DocumentTextIcon,
    current: false,
  },
  {
    name: "Kalkulator",
    to: "/admin/kalkulator",
    icon: CalculatorIcon,
    current: false,
  },
  {
    name: "Pengaturan",
    to: "/admin/pengaturan",
    icon: Cog6ToothIcon,
    current: false,
  },
];

const user = ref(null);
const sidebarOpen = ref(true);

const getUser = async () => {
  const { data } = await customFetch.get("/auth/getUser");
  user.value = data.user;
};

onMounted(() => {
  getUser();
});
</script>
