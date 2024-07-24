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
                :key="tab"
                @click="handleTab(tab)"
                :class="[
                  tab === currentTab
                    ? 'border-primary text-secondary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                ]"
              >
                {{ tab }}
              </button>
            </nav>
          </div>
        </div>

        <!-- Description list with inline editing -->
        <!-- {{ currentTab }} -->
        <div>
          <TheFungsiBangunan v-if="currentTab === 'Fungsi Bangunan'" />
          <TheKompleksitas v-if="currentTab === 'Kompleksitas'" />
          <ThePermanensi v-if="currentTab === 'Permanensi'" />
          <TheKetinggian v-if="currentTab === 'Ketinggian'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheFungsiBangunan from "@/components/partials/data-master/TheFungsiBangunan.vue";
import TheKompleksitas from "@/components/partials/data-master/TheKompleksitas.vue";
import ThePermanensi from "@/components/partials/data-master/ThePermanensi.vue";
import TheKetinggian from "@/components/partials/data-master/TheKetinggian.vue";
const tabs = [
  "Fungsi Bangunan",
  "Kompleksitas",
  "Permanensi",
  "Ketinggian",
  "Faktor Kepemilikan",
];

let currentTab = ref("Fungsi Bangunan");

const handleTab = (tab) => {
  currentTab.value = tab;
};
</script>
