// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Houses from "../views/Houses.vue";
import Persons from "../views/Persons.vue";
import Quotes from "../views/Quotes.vue";

const routes = [
  { path: "/houses", component: Houses },
  { path: "/persons", component: Persons },
  { path: "/quotes", component: Quotes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
