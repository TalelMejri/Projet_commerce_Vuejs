<template>
  <div>
    <navbar></navbar>
  
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
                                      <div v-if="message!=''" class="alert alert-success">
                                          {{message}}
                                      </div>
                                      <div v-if="message_error!=''" class="alert alert-danger">
                                        {{message_error}}
                                    </div>
                                   </div>
                                 <form @submit.prevent="login()">
                                   <div class="mb-4">
                                       <input v-model="email"  type="text" placeholder="Entrer Email Address..." name="email" class="form-control mb-2" id="exampleInputEmail1">
                                   </div>
                                   <div class="mb-5 ">
                                    <div class="input-group">
                                      <input :type="type_password" v-model="pass"  class="form-control" >
                                       <span class="input-group-btn">
                                         <button id="changer_visible" @click="changer_visib_password()" class="btn btn-primary" type="button">
                                            <font-awesome-icon :icon="`fa-solid fa-${visibilite_password}`"/>
                                        </button>
                                      </span>
                                 
                                    </div>  
                                   </div>
                                       <button style="font-size:19px" type="submit" name="submit"  class="btn btn-primary btn-block w-100 rounded-pill mb-5">Login</button>
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
  </div>
</template>
<script>

import { defineComponent,ref } from 'vue'
import authService  from '@/services/authService';
import { useAuthStore } from '@/store/auth.store';
import navbar from "@/components/Navbar.vue";
export default defineComponent({
  created(){
      if(typeof(this.$route.query.content)!='undefined'){
         this.message = this.$route.query.content;
      }
  },  
  data(){
    return{
      message:'',
      type_password:'password',
      visibilite_password:'eye'
    }
 },
 methods:{

  changer_visib_password(){
      this.visibilite_password= this.visibilite_password=='eye-slash' ? 'eye' : 'eye-slash';  
      this.type_password=this.visibilite_password=='eye' ? 'text' : 'password';
    }
    
 },
 components:{
  navbar
 },
  setup() {
    const store = useAuthStore();
    const email = ref('');
    const pass = ref('');
    const message_error = ref('');
    
    const login = () => {
      authService.login(email.value,pass.value).then((response)=>{
          console.log(response);
          /*if(store.isAdmin==true){
            this.$router.push({name:"ProfilAdmin"});
          }else{ 
            this.$router.push({name:"shop"});
          }*/
      }).catch((r)=>{
        message_error.value = r.response.data.message;
      })
    }

   /* const testLogin = () => {
      authService.testLogin().then((a)=>{
      }).catch((b)=>{alert(b)});
    }*/
    return {
      email,
      pass,
      login,

      message_error,
     // testLogin,
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