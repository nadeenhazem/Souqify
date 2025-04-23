import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./modules/MainPage/page/MainPage.vue";
import LoginPage from "./modules/Auth/Login/LoginPage.vue";
import RegisterPage from "./modules/Auth/Register/RegisterPage.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
