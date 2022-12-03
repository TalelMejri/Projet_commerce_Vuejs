import router from "@/router";
import { defineStore } from "pinia"
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    
    const token = ref(localStorage.getItem('token')??null);
    const user = ref(JSON.parse(localStorage.getItem('user'))??null);
    const isAuth = ref((localStorage.getItem('user')&&localStorage.getItem('token')));
    
    const getUser = computed(() => user.value);
    const getToken = computed(() => token.value);
    const IsAuth = computed(() => isAuth.value);

    function login(t,u) {
        token.value = t;
        user.value = u;
        isAuth.value = true;
        localStorage.setItem('token',t);
        localStorage.setItem('user',JSON.stringify(u));
        router.push({name:"shop"});
    }

    function logout(){
        isAuth.value = false;
        token.value = null;
        user.value = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push({name:"login"});
    }

    return { token,user,isAuth,login,logout}

})