import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/login.vue"),
  },

  {
    name: "index",
    path: "/index",
    component: () => import("@/pages/index.vue"),
  },
];

const router = createRouter({
  // scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(), //
  // history: createWebHistory(), //
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
