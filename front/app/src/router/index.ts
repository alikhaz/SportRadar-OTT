import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bookList",
    name: "BookList",
    component: () =>
      import(/* webpackChunkName: "books" */ "@/views/book-list/BookList.vue"),
  },
];

const router = new VueRouter({ mode: "history", routes });

export default router;
