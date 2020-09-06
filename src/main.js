import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rule from "./rule";

Vue.config.productionTip = false;

let game_input = {
  people_list: ["나"],
  answer: {}
};

Vue.mixin({
  data() {
    return {
      rule: rule,
      game_input: game_input
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
