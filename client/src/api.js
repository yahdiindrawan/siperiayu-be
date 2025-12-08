const BASE_API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

// Pastikan VITE_API_URL adalah URL LENGKAP back-end Anda.

// Contoh penggunaan Axios
import axios from "axios";
const customFetch = axios.create({
  baseURL: BASE_API_URL,
  // ...
});

export default customFetch;
