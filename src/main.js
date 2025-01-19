import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./sass/main.scss";
import generateSitemap from "./sitemap";
import { createHead } from "@vueuse/head";
const head = createHead();

library.add(fas);
// use the craete site map file
generateSitemap();

createApp(App)
  .use(head)
  .use(store)
  .use(router)
  .component("icon", FontAwesomeIcon)
  .mount("#app");
