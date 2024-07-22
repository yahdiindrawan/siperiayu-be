<template>
  <div class="my-6">
    <div class="flex justify-end">
      <button
        type="button"
        @click="isModal = true"
        class="flex items-center rounded-md bg-secondary px-4 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Tambah Data
      </button>
    </div>
    <div class="mx-2 mt-8 sm:-mx-0">
      <div
        class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg px-4 py-2"
      >
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="hidden py-3.5 px-2 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                No
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Kategori
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Indeks
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(data, index) in fungsiBangunanData" :key="data._id">
              <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                {{ index + 1 }}
              </td>
              <td
                class="w-full max-w-0 py-4 px-2 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none"
              >
                {{ data.category }}
                <dl class="font-normal lg:hidden">
                  <dt class="sr-only sm:hidden">Indeks</dt>
                  <dd class="mt-1 truncate text-gray-500 sm:hidden">
                    {{ data.indeks }}
                  </dd>
                </dl>
              </td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                {{ data.category }}
              </td>
              <td class="py-4 px-2 text-center text-sm font-medium">
                <button
                  type="button"
                  class="inline-flex rounded-md p-1.5 text-gray-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                >
                  <span class="sr-only">Edit</span>
                  <PencilSquareIcon
                    class="h-4 w-4 lg:h-5 lg:w-5"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  class="inline-flex rounded-md p-1.5 text-gray-400 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                >
                  <span class="sr-only">Hapus</span>
                  <TrashIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal Tambah Data -->
    <TransitionRoot as="template" :show="isModal">
      <Dialog class="relative z-50" @close="isModal = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-800 bg-opacity-70 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white px-4 py-2 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-lg sm:p-6"
              >
                <form @submit.prevent="handleSubmit">
                  <div>
                    <div class="sm:mt-5">
                      <DialogTitle
                        as="h3"
                        class="text-base text-center font-semibold leading-6 text-gray-900"
                      >
                        Tambah Data
                      </DialogTitle>
                      <CAlert
                        v-if="errorAlert"
                        :message="errorMessage"
                        type="error"
                        class="mt-4"
                        @close="errorAlert = false"
                      />
                      <div class="mt-6 space-y-3">
                        <div>
                          <label
                            for="kategori"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Kategori</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="fungsiBangunan.category"
                              id="kategori"
                              name="kategori"
                              type="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="indeks"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Indeks</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="fungsiBangunan.indeks"
                              id="indeks"
                              name="indeks"
                              type="number"
                              min="0"
                              step="0.01"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mt-5 sm:mt-8 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
                  >
                    <button
                      type="submit"
                      class="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:col-start-1 sm:mt-0"
                      @click="clearInput"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import {
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import CAlert from "@/components/base/CAlert.vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
import customFetch from "@/api";

const isModal = ref(false);
const errorMessage = ref("");
const errorAlert = ref(false);

const fungsiBangunan = reactive({
  category: null,
  indeks: null,
});

const fungsiBangunanData = ref(null);

const allFungsiBangunan = async () => {
  try {
    const { data } = await customFetch.get("/fungsi-bangunan");
    fungsiBangunanData.value = data.data;
    console.log(fungsiBangunanData);
  } catch (error) {
    console.log(error);
  }
};

const clearInput = () => {
  isModal.value = false;
  fungsiBangunan.category = null;
  fungsiBangunan.indeks = null;
};

const handleSubmit = async () => {
  try {
    const FungsiBangunanData = await customFetch.post("/fungsi-bangunan", {
      category: fungsiBangunan.category,
      indeks: fungsiBangunan.indeks,
    });
    if (FungsiBangunanData) {
      clearInput();
      allFungsiBangunan();
    }
  } catch (error) {
    errorAlert.value = true;
    errorMessage.value = error.response.data.message;
  }
};

onMounted(() => {
  allFungsiBangunan();
});

// const FungsiBangunan = reactive([
//   { name: "Hunian (< 100 m2 dan < 2 lantai)", value: 0.15 },
//   { name: "Hunian (> 100 m2 dan > 2 lantai)", value: 0.17 },
//   { name: "Keagamaan", value: 0 },
//   { name: "Usaha", value: 0.7 },
//   { name: "Usaha UMKM", value: 0.5 },
//   { name: "Sosial & Budaya", value: 0.3 },
//   { name: "Khusus", value: 1 },
//   { name: "Ganda/Campuran (≤ 500 m2 dan ≤ 2 lantai)", value: 0.6 },
//   { name: "Ganda/Campuran (> 500 m2 dan > 2 lantai)", value: 0.8 },
// ]);
</script>
