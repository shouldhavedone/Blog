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
  },
  {
    path: '/archive',
    component: Home,
    children: [
      {
        path: "",
        name: "/archive",
        component: () => import("./views/archive"),
      },
    ]
  },
  {
    path: '/project',
    component: Home,
    children: [
      {
        path: "",
        name: "/project",
        component: () => import("./views/project"),
      },
    ]
  },
  {
    path: '/timeline',
    component: Home,
    children: [
      {
        path: "",
        name: "/timeline",
        component: () => import("./views/timeline"),
      },
    ]
  },
  {
    path: '/about',
    component: Home,
    children: [
      {
        path: "",
        name: "/about",
        component: () => import("./views/about"),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;