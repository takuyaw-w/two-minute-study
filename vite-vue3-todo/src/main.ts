import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/styles.css";
library.add(fas);
dom.watch();
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");