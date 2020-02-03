import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from 'vue-i18n'
import "./assets/css/styles.css"


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
