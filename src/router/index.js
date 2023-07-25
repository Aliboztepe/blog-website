import Vue from "vue";
import VueRouter from "vue-router";
import BlogView from "../views/BlogView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/links",
    name: "Links",
    component: () => import("../views/LinksView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: () => import("../views/ArticleDetailsView.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
