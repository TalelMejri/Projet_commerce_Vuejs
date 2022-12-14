import axios from "axios";
import { useAuthStore } from "@/store/auth.store";

export default{

    async login(email,password  ){

        const State = useAuthStore();
        const res = await axios.post('auth/login',{email,password});

        if(res.status==200){
            State.login(res.data.token,res.data.user,res.data.isAdmin);
            Promise.resolve(res.data);
            return res.data;
        }else{
            State.logout();
            Promise.reject("Something wrong happened")
        }

    }
   
}
