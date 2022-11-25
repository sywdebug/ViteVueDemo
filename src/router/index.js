import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/about.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("beforeEach to:", to);
  console.log("beforeEach from", from);
});

export default router;
