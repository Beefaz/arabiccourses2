import { createRouter, createWebHistory } from 'vue-router';
import PageAbout from "@/pages/PageAbout";
import PageHome from "@/pages/PageHome";

const routes = [
  {
    path: '/',
    name: "PageAbout",
    component: PageAbout
  },
  {
    path: '/about',
    name: "PageHome",
    component: PageHome
  },
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
