import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

//components
import AppCard from "./components/UI/AppCard.vue";
import AppContainer from "./components/UI/AppContainer.vue";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("AppContainer", AppContainer).component("AppCard", AppCard);

app.use(pinia);
app.use(router);
app.mount("#app");
