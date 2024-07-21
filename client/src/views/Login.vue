<template>
  <div class="flex h-screen">
    <div class="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md">
      <div class="flex justify-center mx-auto">
        <img
          class="w-auto h-12 sm:h-16"
          src="@/assets/logos/indramayu.png"
          alt=""
        />
      </div>
      <CAlert
        v-if="authStores.errorAlert"
        :message="authStores.errorMessage"
        type="error"
        class="mt-4"
      />
      <form @submit.prevent="handleSubmit" class="mt-6 my-4 mx-2">
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input
            v-model="userInput.email"
            id="email"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secondary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-10"
          />
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <a href="#" class="text-xs text-gray-600 hover:underline"
              >Lupa Password?</a
            >
          </div>

          <input
            v-model="userInput.password"
            id="password"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secondary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-10"
          />
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary hover:shadow-lg rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
      </form>
      <router-link
        to="/"
        class="block text-center text-xs text-gray-600 hover:underline"
      >
        Kembali Ke Halaman Utama
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/authStores";
import CAlert from "@/components/base/CAlert.vue";

const authStores = useAuthStore();

const { LoginUser } = authStores;

const userInput = reactive({
  email: "",
  password: "",
});
const handleSubmit = () => {
  LoginUser(userInput);
};
</script>
