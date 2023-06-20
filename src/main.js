import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

//components
import AppContainer from "./components/UI/AppContainer.vue";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("AppContainer", AppContainer);

app.use(pinia);
app.use(router);
app.mount("#app");
