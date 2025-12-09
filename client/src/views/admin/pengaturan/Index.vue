<template>
  <div class="pb-16 pt-10">
    <div class="px-4 sm:px-6 lg:px-0">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        Pengaturan
      </h1>
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

        <div>
          <TheFilePeraturan v-if="currentTab === 'File Peraturan'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheFilePeraturan from "@/components/partials/pengaturan/TheFilePeraturan.vue";
const tabs = [
  "Hero",
  "File Peraturan",
  "Logo",
  "Sosial Media",
  "Kontak",
  "Tautan",
];

let currentTab = ref("File Peraturan");

const handleTab = (tab) => {
  currentTab.value = tab;
};
</script>
