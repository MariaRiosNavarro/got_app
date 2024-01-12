// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Houses from "../views/Houses.vue";
import Persons from "../views/Persons.vue";
import Quotes from "../views/Quotes.vue";
import PersonDetail from "../views/PersonDetail.vue";
import HouseDetail from "../views/HouseDetail.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/houses", component: Houses },
  { path: "/persons", component: Persons },
  { path: "/quotes", component: Quotes },
  { path: "/person/:slug", name: "detailperson", component: PersonDetail },
  { path: "/house/:slug", name: "detailhouse", component: HouseDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
