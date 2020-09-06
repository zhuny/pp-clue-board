import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rule from "./rule";

Vue.config.productionTip = false;

let game_input = {
  people_list: [{ name: "나", answer: {} }],
  answer_list: []
};

Vue.mixin({
  data() {
    return {
      rule: rule,
      game_input: game_input
    };
  },
  watch: {
    game_input: {
      deep: true,
      handler(val) {
        localStorage.game_input = JSON.stringify(val);
      }
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
