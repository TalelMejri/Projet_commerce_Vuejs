<template>
    <div>
        <article class="contact py-1" data-aos="fade-up">
            <div class="container py-5">
                        <div class="text-center py-4">
                            <h2 class=" text-uppercase">Contact Us</h2>
                        </div>
                     <form @submit.prevent="Onsubmit()" class="shadow p-4 m-3 rounded">
                   
                      <h4 class="fw-bolder text-primary">Get In Touch</h4>
                      <p class="text-muted-primary">we are here for you ! how can we help ?</p>
                      <div v-if="afficher_error" class="alert alert-danger">
                        {{error}}
                      </div>
                      <div class="row">
                       <div class="col-lg-6">
                      <div class="mb-3">
                        <input  type="name" v-model="name"  :class="
                        name_error != ''
                          ? 'form-control is-invalid move_input'
                          : 'form-control '
                      " placeholder="Entre your name"  >
                        <small v-if="name_error!=''" class="text-danger">
                           {{name_error}}
                        </small>
                      </div>
                      <div class="mb-3">
                          <input type="email" v-model="email"  placeholder="Entrer your email address"  :class="
                          email_error != ''
                            ? 'form-control is-invalid move_input'
                            : 'form-control '
                        " 
                        id="exampleInputEmail1" aria-describedby="emailHelp" >
                        <small v-if="email_error!=''" class="text-danger">
                          {{email_error}}
                       </small>
                      </div>
                      <div class="mb-3">
                      <textarea placeholder="Go ahead , we are listening"   :class="
                      messages_error != ''
                        ? 'form-control is-invalid move_input'
                        : 'form-control '
                    " style="outline:none;border:none;padding:10px" v-model="messages" cols="20"  rows="10"  ></textarea>
                    <small v-if="messages_error!=''" class="text-danger">
                      {{messages_error}}
                   </small>
                  </div>
                    
                        <button style="width:100%"  type="submit" class="button">Send</button>
                        </div>  
                        <div class="col-sm-6 text-center">
                              <div class="row text-center">
                                <div class="col-md-12 d-lg-block d-none text-center mb-5">
                                  <Vue3Lottie
                                     data-aos="zoom-out" data-aos-delay="50"
                                      animationLink="https://assets8.lottiefiles.com/packages/lf20_ncztkceu.json"
                                      style="width: 100%; height: 100%;"
                                 />
                                </div>
                                <div class="col-md-12 text-center">
                                     <div class="row mb-3 ">
                                         <div class="col-md-2 ">
                                         <span class="fa-stack fa-1x">
                                           <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                           <i class="fas fa-location-dot fa-stack-1x text-white "></i>
                                        </span>
                                        </div>
                                        <div class="col-md-2 ">
                                              Bahra <span class="text-danger">❤</span> 
                                        </div>
                                    </div>
                                    <div class="row mb-3 ">
                                         <div class="col-md-2 ">
                                         <span class="fa-stack fa-1x">
                                           <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                           <i class="fas fa-phone fa-stack-1x text-white "></i>
                                        </span>
                                        </div>
                                        <div class="col-md-2 ">
                                              +21629036027
                                        </div>
                                    </div>
                                    <div class="row ">
                                         <div class="col-md-2 ">
                                         <span class="fa-stack fa-1x">
                                           <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                           <i class="fas fa-envelope fa-stack-1x text-white "></i>
                                        </span>
                                        </div>
                                        <div class="col-md-2 ">
                                              talelmejri8@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>  
                        </div>
                      </form>
                    </div> 
      </article>
    </div>
</template>

<script>
export default{
    data(){
      return{
        messages:'',
        name:'',
        email:'',
        name_error:'',
        email_error:'',
        messages_error:'',
        afficher_error:0,
        error:''
      }
    },
    methods:{
        show_hide(){
          this.afficher_error=1;
          setTimeout(()=>this.afficher_error=0,4000);
        },
        Onsubmit(){
          if(this.messages=='' && this.name=='' && this.email==''){
              this.error="You must fill all the fields ";
              this.show_hide();
          }else if(this.name==''){
            this.name_error="name required";
            setTimeout(()=> this.name_error='',4000);
          }else if(this.email==''){
            this.email_error="email required";
            setTimeout(()=> this.email_error='',4000);
          }else if(this.messages==''){
            this.messages_error="messages required";
            setTimeout(()=> this.messages_error='',4000);
          }
        }  
    }
}
</script>


<style scoped>
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