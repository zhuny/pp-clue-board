import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rule from "./rule";

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      people_list: ["나"],
      rule: rule
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
