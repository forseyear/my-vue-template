import Vue from "vue";
import appOptions from "./components/app.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue(appOptions).$mount("#app");
});
