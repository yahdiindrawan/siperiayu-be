<template>
  <div class="pb-16 pt-10">
    <div class="px-4 sm:px-6 lg:px-0">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Indeks</h1>
    </div>
    <div class="px-4 sm:px-6 lg:px-0">
      <div class="py-6">
        <div class="overflow-hidden">
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
          <TheIndeksLokalitas v-if="currentTab === 'Indeks Lokalitas'" />
          <TheIndeksBGTerbangun v-if="currentTab === 'Indeks BG Terbangun'" />
          <TheIndeksBGTerbangunPrasarana
            v-if="currentTab === 'Indeks BG Terbangun Prasarana'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheIndeksLokalitas from "@/components/partials/indeks/TheIndeksLokalitas.vue";
import TheIndeksBGTerbangun from "@/components/partials/indeks/TheIndeksBGTerbangun.vue";
import TheIndeksBGTerbangunPrasarana from "@/components/partials/indeks/TheIndeksBGTerbangunPrasarana.vue";

const tabs = [
  "Indeks Lokalitas",
  "Indeks BG Terbangun",
  "Indeks BG Terbangun Prasarana",
];

let currentTab = ref("Indeks Lokalitas");

const handleTab = (tab) => {
  currentTab.value = tab;
};
</script>
