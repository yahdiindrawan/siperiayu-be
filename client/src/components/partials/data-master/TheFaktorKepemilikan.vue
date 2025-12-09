<template>
  <div class="my-6">
    <CToast
      v-if="isToast"
      :title="toast.title"
      :message="toast.message"
      @close="isToast = false"
    />
    <div class="flex justify-end">
      <button
        type="button"
        @click="isModal = true"
        class="flex items-center rounded-md bg-secondary px-4 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-primary"
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
          <tbody
            v-if="faktorKepemilikanData"
            class="divide-y divide-gray-200 bg-white"
          >
            <tr v-for="(data, index) in faktorKepemilikanData" :key="data._id">
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
                {{ data.indeks }}
              </td>
              <td class="py-4 px-2 text-center text-sm font-medium">
                <button
                  type="button"
                  @click="handleEdit(data)"
                  class="inline-flex rounded-md p-1.5 text-gray-400 hover:text-blue-400 hover:scale-105"
                >
                  <span class="sr-only">Edit</span>
                  <PencilSquareIcon
                    class="h-4 w-4 lg:h-5 lg:w-5"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  @click="handleDelete(data._id)"
                  class="inline-flex rounded-md p-1.5 text-gray-400 hover:text-red-400 hover:scale-105"
                >
                  <span class="sr-only">Hapus</span>
                  <TrashIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4">
                <CLoadingSpinner />
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
            class="flex min-h-full items-end justify-center p-4 text-center items-center"
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
                class="relative transform overflow-hidden rounded-lg bg-white px-4 py-2 text-left shadow-xl transition-all w-full max-w-sm my-4 lg:max-w-md p-6"
              >
                <form @submit.prevent="handleSubmit" class="my-4">
                  <div>
                    <div class="mt-5">
                      <DialogTitle
                        as="h3"
                        class="text-base text-center font-semibold leading-6 text-gray-900"
                      >
                        {{
                          !faktorKepemilikan._id ? "Tambah Data" : "Edit Data"
                        }}
                      </DialogTitle>
                      <CAlert
                        v-if="errorAlert"
                        :message="errorMessage"
                        type="error"
                        class="mt-4"
                        @close="errorAlert = false"
                      />
                      <div class="mt-6 space-y-3 mx-4">
                        <div>
                          <label
                            for="kategori"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Kategori</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="faktorKepemilikan.category"
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
                              v-model="faktorKepemilikan.indeks"
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
                    class="mt-6 space-y-3mt-5 sm:mt-8 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 mx-4"
                  >
                    <button
                      type="submit"
                      class="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary sm:col-start-2"
                    >
                      {{ !faktorKepemilikan._id ? "Save" : "Update" }}
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
import { CAlert, CToast, CLoadingSpinner } from "@/components/base";
// import CAlert from "@/components/base/CAlert.vue";
// import CLoadingSpinner from "@/components/base/CLoadingSpinner.vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
import customFetch from "@/api";

const isModal = ref(false);
const isToast = ref(false);
const errorMessage = ref("");
const errorAlert = ref(false);

const faktorKepemilikan = reactive({
  _id: null,
  category: null,
  indeks: null,
});

const toast = reactive({
  title: "",
  message: "",
});

const faktorKepemilikanData = ref(null);

const allFaktorKepemilikan = async () => {
  try {
    const { data } = await customFetch.get("/data-master/faktor-kepemilikan");
    faktorKepemilikanData.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

const clearInput = () => {
  isModal.value = false;
  faktorKepemilikan._id = null;
  faktorKepemilikan.category = null;
  faktorKepemilikan.indeks = null;
  errorAlert.value = false;
  errorMessage.value = "";
};

const clearToast = () => {
  isToast.value = false;
  toast.title = "";
  toast.message = "";
};

const handleEdit = (data) => {
  isModal.value = true;
  faktorKepemilikan._id = data._id;
  faktorKepemilikan.category = data.category;
  faktorKepemilikan.indeks = data.indeks;
};

const handleDelete = async (_id) => {
  try {
    const tempFaktorKepemilikan = await customFetch.delete(
      "/data-master/faktor-kepemilikan/" + _id
    );
    toast.message = tempFaktorKepemilikan.data.message;
    if (tempFaktorKepemilikan) {
      allFaktorKepemilikan();

      toast.title = "Berhasil";
      isToast.value = true;

      setTimeout(() => {
        clearToast();
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  try {
    let tempFaktorKepemilikan;
    if (!faktorKepemilikan._id) {
      tempFaktorKepemilikan = await customFetch.post(
        "/data-master/faktor-kepemilikan",
        {
          category: faktorKepemilikan.category,
          indeks: faktorKepemilikan.indeks,
        }
      );

      toast.message = tempFaktorKepemilikan.data.message;
    } else {
      tempFaktorKepemilikan = await customFetch.put(
        "/data-master/faktor-kepemilikan/" + faktorKepemilikan._id,
        {
          category: faktorKepemilikan.category,
          indeks: faktorKepemilikan.indeks,
        }
      );

      toast.message = tempFaktorKepemilikan.data.message;
    }
    if (tempFaktorKepemilikan) {
      clearInput();
      allFaktorKepemilikan();
      toast.title = "Berhasil";
      isToast.value = true;

      setTimeout(() => {
        clearToast();
      }, 3000);
    }
  } catch (error) {
    errorAlert.value = true;
    errorMessage.value = error.response.data.message;
  }
};

onMounted(() => {
  allFaktorKepemilikan();
});
</script>
