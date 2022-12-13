import router from "@/router";
import { defineStore } from "pinia"
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    
    const token = ref(localStorage.getItem('token')??null);
    const user = ref(JSON.parse(localStorage.getItem('user'))??null);
    const isAuth = ref((localStorage.getItem('user')&&localStorage.getItem('token')));
    const isAdmin = ref(localStorage.getItem('Isadmin')??false);
    const isClient = ref(localStorage.getItem('isClient')??false);
    
    const getUser = computed(() => user.value);
    const getToken = computed(() => token.value);
    const IsAuth = computed(() => isAuth.value);
    const getadmin = computed(() => isAdmin.value);

    function login(t,u,check) {
        token.value = t;
        user.value = u;
        isAdmin.value= u.role == 0 ? false : true;
        isClient.value = u.role == 0 ?true:false;
        isAuth.value=true;
        localStorage.setItem('token',t);
        localStorage.setItem('Isadmin',check);
        localStorage.setItem('isClient',isClient.value);
        localStorage.setItem('user',JSON.stringify(u));
        if(check==true){
            router.push({name:"ProfilAdmin"});
        }else{
            router.push({name:"shop"});
        }
     
    }

    function logout(){
        isAuth.value = false;
        token.value = null;
        user.value = null;
        isAdmin.value=null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('Isadmin');
        router.push({name:"login"});
    }

    function getIsAdmin(){
        return isAdmin.value;
    }

    function getIsClient(){
        return isClient.value;
    }

    return { token,user,isAuth,isAdmin,login,logout,getUser,getIsAdmin,getIsClient}

})