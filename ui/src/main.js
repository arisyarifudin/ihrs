import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.filter("sentenceCase", value => {
  if (!value) {
    return null;
  }

  let data = value.replace(/([A-Z])/g, " $1");
  data = data.charAt(0).toUpperCase() + data.slice(1);
  return data;
});

Vue.filter("separateByCommas", value => {
  if (!Array.isArray(value)) {
    return value;
  }

  return value.join(", ");
});

export const serverBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
