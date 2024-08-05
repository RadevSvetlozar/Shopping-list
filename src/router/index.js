import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/stores", component: () => import("../views/Stores.vue") },
  { path: "/products", component: () => import("../views/Products.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
