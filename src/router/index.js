import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import calculer from "../views/CalculaterView.vue";
import shop from "../views/ShopView.vue";
import login from "../views/LoginView.vue";
import signup from "../views/SignUpView.vue";
import ProfilAdmin from "../views/ProfilAdminView.vue";
import editProduct from "../views/Product/EditProductView.vue";
import { useAuthStore } from "@/store/auth.store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/editProduct/:id",
    name: "editProduct",
    component: editProduct,
    meta: { requiresAuth: true,requiresAdmin:true },
  },

  {
    path: "/shop",
    name: "shop",
    component: shop,
    meta: { requiresAuth: true, requiresUser:true },
  },

  {
    path: "/ProfilAdmin",
    name: "ProfilAdmin",
    component: ProfilAdmin,
    meta: { requiresAuth: true, requiresAdmin:true },
  },

  {
    path: "/Calculer",
    name: "Calculer",
    component: calculer,
   meta: { requiresAuth: true, requiresUser:true },
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
  const isAuth = useAuthStore();
  let isAdmin = JSON.parse(isAuth.getIsAdmin());
  let isClient = JSON.parse(isAuth.getIsClient());
  if(isAuth.isAuth &&to.name==="login"){
    return {name:'home'}
  }
  if(to.meta.requiresAuth){
    if (!isAuth.isAuth && to.name !== "login") {
      return { name: "login" };
    }else if(to.meta.requiresAdmin && !isAdmin){
      return { name: "login" };
    }else if(to.meta.requiresUser && !isClient){
      return { name: "login" };
    }
  }

});

export default router;
