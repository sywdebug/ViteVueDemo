import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

//引入axios和qs
import Axios from "./axios";
import Qs from "qs";
app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$qs = Qs;

app.use(router).use(store).mount("#app");
