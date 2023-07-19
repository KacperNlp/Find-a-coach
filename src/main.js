import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

//components
import AppBadge from "./components/UI/AppBadge.vue";
import AppButton from "./components/UI/AppButton.vue";
import AppCard from "./components/UI/AppCard.vue";
import AppContainer from "./components/UI/AppContainer.vue";
import AppFormValidation from "./components/UI/AppFormValidation.vue";
import AppMessagePart from "./components/UI/AppMessagePart.vue";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app
  .component("AppBadge", AppBadge)
  .component("AppButton", AppButton)
  .component("AppCard", AppCard)
  .component("AppContainer", AppContainer)
  .component("AppFormValidation", AppFormValidation)
  .component("AppMessagePart", AppMessagePart);

app.use(pinia);
app.use(router);
app.mount("#app");
