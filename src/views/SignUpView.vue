<template>
  <div>
    <navbar></navbar>

    <div class="mt-5 py-2">
         <div class="mt-5 ">
            <div class="d-flex p-3 m-4 justify-content-center">   
                <div class="col-xl-10 ">
                      <div class="row shadow-lg rounded">
                            <div class="col-lg-6">
                                    <div class="text-center">
                                       <h1 class="h4 fw-bolder mb-3 py-3">Sign Up </h1>
                                    </div> 
                                <form class="py-4" @submit.prevent="ADD_user" enctype="multipart/form-data">
                                   <div class="row mb-4 ">
                                      <div class="col-lg-6">
                                       <label>Name</label>
                                        <input type="text" v-model="name" :class="name_error !='' ?  'form-control is-invalid move_input' : 'form-control' " >
                                         <small class="text-danger" v-if="name_error">{{name_error}}</small>
                                      </div>
                                      <div class="col-lg-6">
                                        <label>Email</label>
                                        <input type="email" v-model="email"  :class="email_error!='' ? 'form-control is-invalid move_input' : 'form-control' ">
                                        <small class="text-danger" v-if="email_error">{{email_error}}</small>
                                      </div>
                                    </div>
                                    <div class="row mb-4">
                                      <div class="col-lg-12">
                                      <label>Password </label>
                                    <div class="input-group">
                                    <input :type="type_password" v-model="password"  :class="password_error!='' ? 'form-control is-invalid move_input' : 'form-control'" >
                                     <span class="input-group-btn">
                                       <button id="changer_visible" @click="changer_visib_password()" class="btn btn-primary" type="button">
                                          <font-awesome-icon :icon="`fa-solid fa-${visibilite_password}`"/>
                                      </button>
                                    </span>
                               
                                  </div>  
                                  <small class="text-danger" v-if="password_error">{{password_error}}</small>
                                </div>
                                  </div>
                                    <div class="row">
                                      <div class="col-lg-12 mb-2">
                                        <label>Date Naissance :</label>
                                        <input type="date" v-model="date_naissance"  :class="date_naissance_error !='' ? 'form-control is-invalid move_input': 'form-control' ">
                                        <small class="text-danger" v-if="date_naissance_error">{{date_naissance_error}}</small>
                                      </div>
                                      <div class="col-lg-12">
                                        <label>Avatar</label>
                                        <input type="file" ref="file"  @change="upload_image" :class="file_error !='' ? 'form-control is-invalid move_input' : 'form-control' ">
                                        <small class="text-danger" v-if="file_error">{{file_error}}</small>
                                      </div>
                                    </div>
                                       <div class="form-group text-center py-4">
                                              <input type="checkbox" required  id="agree" class="custom-control-input">
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
                           
                           </div>
                      </div>  
        </div>
        </div>
         </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

import service from '../services/service';
import navbar from "@/components/Navbar.vue";
export default{
  name:'signUpView',

  data(){
    return{
      name:"",
      password:"",
      email:"",
      file:"",
      date_naissance:"",
      
      email_error:"",
      name_error:"",
      date_naissance_error:"",
      password_error:"",
      file_error:"",
      visibilite_password:'eye',
      type_password:'password'
    }
  },
  
  methods:{ 
    changer_visib_password(){
      this.visibilite_password= this.visibilite_password=='eye-slash' ? 'eye' : 'eye-slash';  
      this.type_password=this.visibilite_password=='eye' ? 'text' : 'password';
    },
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
            this.$router.push({name:"login", query: {content: 'Register Succesfully'}});
        }).catch((error)=>{
            this.name_error=error.response.data.data.nom ? error.response.data.data.nom[0]: '';
            this.email_error=error.response.data.data.email ? error.response.data.data.email[0]: '';
            this.date_naissance_error=error.response.data.data.date_naissance  ? error.response.data.data.date_naissance [0] : '';
            this.password_error=error.response.data.data.password ? error.response.data.data.password  [0] : '';
            this.file_error=error.response.data.data.file ? error.response.data.data.file [0] : '';
        }) ;
    }
    
  },
  components:{
     navbar
  }
}

</script>


<style>
.move_input {
  animation: animate 0.5s;
}

@keyframes animate {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>