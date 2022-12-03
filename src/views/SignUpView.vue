<template>
    <div class="mt-5 py-2">
         <div class="mt-5 ">
            <div class="d-flex p-3 m-4 justify-content-center">   
                <div class="col-xl-10 ">
                      <div class="row shadow-lg rounded">
                            <div class="col-lg-6">
                                    <div class="text-center">
                                       <h1 class="h4 fw-bolder mb-3 py-3">Sign Up</h1>
                                    </div>
                                <form class="py-4" @submit.prevent="ADD_user" enctype="multipart/form-data">
                                   <div class="row mb-4 ">
                                      <div class="col-lg-6">
                                       <label>Name</label>
                                        <input type="text" v-model="name" class="form-control " >
                                      </div>
                                      <div class="col-lg-6">
                                        <label>Email</label>
                                        <input type="email" v-model="email"  class="form-control ">
                                      </div>
                                    </div>
                                    <div class="row mb-4">
                                      <div class="col-lg-12">
                                      <label>Password </label>
                                    <div class="input-group">
                                    <input type="password" v-model="password" id="pass" class="form-control" >
                                     <span class="input-group-btn">
                                       <button id="changer_visible" class="btn btn-primary" type="button">
                                       <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="eye hidden">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path>
                                            <circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
                                        </svg>
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="eyeOff">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.6247 10C19.0646 10.8986 19.25 11.6745 19.25 12C19.25 13 17.5 18.25 12 18.25C11.2686 18.25 10.6035 18.1572 10 17.9938M7 16.2686C5.36209 14.6693 4.75 12.5914 4.75 12C4.75 11 6.5 5.75 12 5.75C13.7947 5.75 15.1901 6.30902 16.2558 7.09698"></path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 4.75L4.75 19.25"></path>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.409 13.591C9.53033 12.7123 9.53033 11.2877 10.409 10.409C11.2877 9.5303 12.7123 9.5303 13.591 10.409"></path>
                                        </svg> 
                                     </button>
                                    </span>
                                  </div>  
                                
                                </div>
                                  </div>
                                    <div class="row">
                                      <div class="col-lg-12 mb-2">
                                        <label>Date Naissance :</label>
                                        <input type="date" v-model="date_naissance"  class="form-control ">
                                      </div>
                                      <div class="col-lg-12">
                                        <label>Avatar</label>
                                        <input type="file" ref="file"  @change="upload_image" class="form-control ">
                                      </div>
                                    </div>
                                       <div class="form-group text-center py-4">
                                              <input type="checkbox"  id="agree" class="custom-control-input">
                                              <label for="agree" class="custom-control-label">I agree to the <a href="#">Terms and Conditions</a></label>
                                    </div>
                                    <div class="text-center mt-2">
                                         <button type="submit"  class="btn btn-outline-success">Sign Up</button>
                                    </div>
                                    <div class="mt-4 text-muted text-center">
                                            Already have an account ? <router-link to="/login">Login</router-link> 
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-6 d-none d-lg-block ">
                              <Vue3Lottie
                              data-aos="zoom-out" data-aos-delay="50"
                               animationLink="https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                               style="width: 100%; height: 100%;"
                          />
                              <!---->
                              
                           </div>
                      </div>  
        </div>
        </div>
         </div>
         <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>



    </div>
</template>

<script>
//import axios from 'axios';
import { useToast } from "vue-toastification";
import service from '../services/service';

export default{
  name:'signUpView',
  data(){
    return{
      name:"",
      password:"",
      email:"",
      file:"",
      date_naissance:"",
      //data:{}
    }
  },
  
  methods:{

   upload_image() {
       this.file = this.$refs.file.files[0];
    },

    ADD_user(){
        service.createUser({
          file:this.file,
          date_naissance:this.date_naissance,
          name:this.name,
          email:this.email,
          password:this.password
        }).then(()=>{
            this.name = "" ;
            this.email = "" ;
            this.password = "" ;
            this.date_naissance = "" ;
        }).catch((error)=>{
            console.log(error.response.data);
        }) 
    }
  }
}

</script>