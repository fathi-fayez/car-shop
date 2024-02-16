import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/aboutPage.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/categoriesPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contactPage.vue"),
  },
  {
    path: "/carInfo/:name/:id",
    name: "carInfo",
    component: () => import("../components/carInfo.vue"),
  },
  {
    path: "/eachCar/:carType",
    name: "eachCar",
    component: () => import("../components/eachCar.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "errorPage",
    component: () => import("../components/errorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  document.title = `${to.name} page`;
});
export default router;
