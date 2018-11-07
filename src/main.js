import Vue from "vue";
import App from "./App.vue";
import vSmoothImg from "./index";
Vue.use(vSmoothImg);

new Vue({
  render: h => h(App)
}).$mount("#app");
