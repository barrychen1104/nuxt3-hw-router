import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/dist/modal";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("bootstrap", bootstrap);
});
