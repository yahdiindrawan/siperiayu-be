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
        class="shadow overflow-x-auto ring-1 ring-black ring-opacity-5 sm:rounded-lg px-4 py-2"
      >
        <table class="min-w-full overflow-hidden divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="py-3.5 px-2 text-left text-sm font-semibold text-gray-900"
              >
                No
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Judul
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Deskripsi
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                File
              </th>
              <th
                scope="col"
                class="relative min-w-20 py-3.5 pl-3 pr-4 sm:pr-0"
              >
                <span class="sr-only">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody v-if="peraturanData" class="divide-y divide-gray-200 bg-white">
            <tr v-for="(data, index) in peraturanData" :key="data._id">
              <td class="px-3 py-4 text-sm text-gray-500">
                {{ index + 1 }}
              </td>
              <td class="py-4 px-2 text-sm font-medium text-gray-500">
                {{ data.title }}
              </td>
              <td class="px-3 py-4 text-sm text-gray-500">
                {{ data.description }}
              </td>
              <td class="px-3 py-4 text-sm text-gray-500">
                <a
                  :href="BASEAPI_URL + '/' + data.file"
                  target="_blank"
                  class="underline"
                  >Lihat Data</a
                >
              </td>
              <td class="py-4 px-2 text-center text-sm font-medium max-w-8">
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
                        {{ !peraturan._id ? "Tambah Data" : "Edit Data" }}
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
                            for="title"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Judul
                          </label>
                          <div class="mt-2">
                            <input
                              v-model="peraturan.title"
                              id="title"
                              name="title"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="description"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Deskripsi
                          </label>
                          <div class="mt-2">
                            <input
                              v-model="peraturan.description"
                              id="description"
                              name="description"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="file"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            File
                          </label>
                          <div class="mt-2">
                            <input id="file" name="file" type="file" />
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
                      {{ !peraturan._id ? "Save" : "Update" }}
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

const BASEAPI_URL = import.meta.env.VITE_BASEAPI_URL;
const isModal = ref(false);
const isToast = ref(false);
const errorMessage = ref("");
const errorAlert = ref(false);

const peraturan = reactive({
  _id: null,
  title: null,
  description: null,
  file: null,
});

const toast = reactive({
  title: "",
  message: "",
});

const peraturanData = ref(null);

const allperaturan = async () => {
  try {
    const { data } = await customFetch.get("/settings/peraturan");
    peraturanData.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

const clearInput = () => {
  isModal.value = false;
  peraturan._id = null;
  peraturan.title = null;
  peraturan.description = null;
  peraturan.file = null;
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
  peraturan._id = data._id;
  peraturan.title = data.title;
  peraturan.description = data.description;
  peraturan.file = data.file;
};

const handleDelete = async (_id) => {
  try {
    const tempperaturan = await customFetch.delete(
      "/settings/peraturan/" + _id
    );
    toast.message = tempperaturan.data.message;
    if (tempperaturan) {
      allperaturan();

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
    let tempperaturan;
    if (!peraturan._id) {
      tempperaturan = await customFetch.post("/settings/peraturan", {
        title: peraturan.title,
        description: peraturan.description,
        file: peraturan.file,
      });

      toast.message = tempperaturan.data.message;
    } else {
      tempperaturan = await customFetch.put(
        "/settings/peraturan/" + peraturan._id,
        {
          title: peraturan.title,
          description: peraturan.description,
          file: peraturan.file,
        }
      );

      toast.message = tempperaturan.data.message;
    }
    if (tempperaturan) {
      clearInput();
      allperaturan();
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
  allperaturan();
});
</script>
