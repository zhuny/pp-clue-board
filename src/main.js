import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import rule from "./rule";
import {load_game_input} from "./game_input";

Vue.config.productionTip = false;

let game_input = load_game_input();

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
