import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/articles",
    name: "index",
    component: () => import("./views/articles"),
  },
  {
    path: '/articles',
    component: Home,
    children: [
      {
        path: "",
        name: "/articles",
        component: () => import("./views/articles"),
      },
    ]
  }
]

const router = new VueRouter({
  routes,
});

export default router;