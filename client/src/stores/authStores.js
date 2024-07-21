import { ref } from "vue";
import { defineStore } from "pinia";
import customFetch from "@/api";
import router from "@/router";

export const useAuthStore = defineStore("user", () => {
  const errorMessage = ref(null);
  const errorAlert = ref(false);
  const currentUser = ref(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const LoginUser = async (inputData) => {
    try {
      const { data } = await customFetch.post("/auth/login", {
        email: inputData.email,
        password: inputData.password,
      });
      currentUser.value = data.data;
      localStorage.setItem("user", JSON.stringify(data.data));
      router.push("/admin/dashboard");
      console.log(data);
    } catch (error) {
      errorAlert.value = true;
      errorMessage.value = error.response.data.message;
    }
  };

  const LogoutUser = async () => {
    try {
      localStorage.setItem("user", null);
      currentUser.value = null;
      await customFetch.get("/auth/logout");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { LoginUser, errorMessage, errorAlert, currentUser, LogoutUser };
});
