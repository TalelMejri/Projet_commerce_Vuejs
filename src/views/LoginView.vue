<template>
    <div class="mt-5 py-2">
         <div class="mt-5 py-1">
            <div class="login">
             <div class="d-flex p-3 m-4 justify-content-center">   
                 <div class="col-xl-10 col-md-12 col-lg-12">
                       <div class="row shadow-lg rounded">
                             <div class="col-lg-6 d-none d-lg-block ">
                                <Vue3Lottie
                                data-aos="zoom-out" data-aos-delay="50"
                                 animationLink="https://assets2.lottiefiles.com/packages/lf20_mjlh3hcy.json"
                                 style="width: 100%; height: 100%;"
                            />
                             </div>
                             <div class=" col-lg-6 py-5">
                                   <div class="text-center">
                                     <h1 class="h4 text-gray-900 mb-5">Welcome Back !</h1>
                                   </div>
                                 <form @submit.prevent="login()">
                                   <div class="mb-4">
                                       <input v-model="email"  type="text" placeholder="Entrer Email Address..." name="email" class="form-control mb-2" id="exampleInputEmail1">
                                   </div>
                                   <div class="mb-5 ">
                                     <div class="input-group d-flex">
                                     <input v-model="pass" type="password" id="pass" class="form-control mb-2" name="password" placeholder="Entrer Your Password">
                                      <span class="input-group-btn">
                                        <button id="changer_visible" class="btn btn-primary" type="button">
                                      </button>
                                     </span>
                                   </div> 
                                   </div>
                                       <button style="font-size:19px" type="submit" name="submit" class="btn btn-primary btn-block w-100 rounded-pill mb-5">Login</button>
                                       <button style="font-size:19px" type="button" name="button" @click="testLogin()" class="btn btn-primary btn-block w-100 rounded-pill mb-5">Login</button>
                                   </form>
                                   <hr>
                                    <div class="fin text-center">
                                           <a class="small text-decoration-none"  href="#"> <router-link to="/signup"> Create an Account !</router-link></a>
                                   </div> 
                             </div>
                       </div>
                 </div>
             </div>
             </div>
         </div>
    </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import authService  from '@/services/authService';
import { useAuthStore } from '@/store/auth.store';
export default defineComponent({
  setup() {
    const store = useAuthStore();

    const email = ref('');
    const pass = ref('');

    const login = () => {
      authService.login(email.value,pass.value);
    }

    const testLogin = () => {
      authService.testLogin().then((a)=>{
        console.log(a.data);
        alert(a.data.name);
      }).catch((b)=>{alert(b)});
    }
    return {
      email,
      pass,
      login,
      testLogin,
      store
    }
  },
})
</script>

<!-- <script>
import authService  from '@/services/authService';
export default {
  data(){
    return{
      email:'',
      pass:''
    }
  },
  methods:{
    login(){
      authService.login(this.email,this.pass);
    },
    testLogin(){
      authService.testLogin().then((a)=>{
        console.log(a.data);
        alert(a.data.name);
      }).catch((b)=>{alert(b)});
    }
  }
}
</script> -->