import { createApp, markRaw } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
