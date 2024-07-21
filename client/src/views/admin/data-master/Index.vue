<template>
  <div class="pb-16 pt-10">
    <div class="px-4 sm:px-6 lg:px-0">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        Data Master
      </h1>
    </div>
    <div class="px-4 sm:px-6 lg:px-0">
      <div class="py-6">
        <div class="overflow-auto">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8">
              <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="handleTab(tab.name)"
                :class="[
                  tab.name === currentTab
                    ? 'border-primary text-secondary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                ]"
              >
                {{ tab.name }}
              </button>
            </nav>
          </div>
        </div>

        <!-- Description list with inline editing -->
        <!-- {{ currentTab }} -->
        <div>
          <TheFungsiBangunan v-if="currentTab === 'Fungsi Bangunan'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheFungsiBangunan from "@/components/partials/data-master/TheFungsiBangunan.vue";
const tabs = [
  { name: "Fungsi Bangunan", href: "#", current: true },
  { name: "Kompleksitas", href: "#", current: false },
  { name: "Permanensi", href: "#", current: false },
  { name: "Ketinggian", href: "#", current: false },
  { name: "Faktor Kepemilikan", href: "#", current: false },
];

let currentTab = ref("Fungsi Bangunan");

const handleTab = (tab) => {
  currentTab.value = tab;
};
</script>
