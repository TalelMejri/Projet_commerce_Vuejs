import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import calculer from "../views/CalculaterView.vue";
import shop from "../views/ShopView.vue";
import login from "../views/LoginView.vue";
import signup from "../views/SignUpView.vue";
import { useAuthStore } from "@/store/auth.store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/shop",
    name: "shop",
    component: shop,
    meta: { requiresAuth: true },
  },

  {
    path: "/Calculer",
    name: "Calculer",
    component: calculer,
    meta: { requiresAuth: true },
  },

  {
    path: "/login",
    name: "login",
    component: login,
  },

  {
    path: "/Signup",
    name: "Signup",
    component: signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const { isAuth } = useAuthStore();
  if(isAuth&&to.name==="login"){
    return {name:'home'}
  }
  if(to.meta.requiresAuth){
    if (!isAuth && to.name !== "login") {
      return { name: "login" };
    }
  }
});

export default router;
