import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result";
import Answer from "../views/Answer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  },
  {
    path: "/answer",
    name: "Answer",
    component: Answer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
