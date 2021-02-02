import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Basket from "../views/Basket.vue";
import Login from "../views/Login.vue";
import Picture from "../views/Picture.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/view/:id",
    name: "Picture",
    component: Picture,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
