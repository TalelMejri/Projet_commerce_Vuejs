<template>
<div>
    <div class="mt-2 py-2">
        <div class="mt-2 "> 
           <div class="d-flex p-3 m-4 justify-content-center">   
               <div class="col-xl-10 ">
                     <div class="row shadow-lg rounded">
                           <div class="col-lg-6">
                                   <div class="text-center">
                                      <h1 class="h4 fw-bolder mb-3 py-3">Add Product</h1>
                                   </div> 
                                   <div v-if="message_error!=''" class="alert alert-danger">
                                        {{message_error}}
                                   </div>
                               <form class="py-4" @submit.prevent="Onsubmit" enctype="multipart/form-data">
                                  <div class="row mb-4 ">
                                     <div class="col-lg-6">
                                      <label>Name Product</label>
                                       <input type="text"  
                                       v-model="Name_Product" class="form-control" > 
                                           
                                          </div>
                                     <div class="col-lg-6">
                                       <label>Color</label>
                                       <input type="text" v-model="color" class="form-control" >
                                     </div>
                                     <div class="col-lg-6">
                                        <label>Quantity</label>
                                        <input type="number" v-model.number="Quantity" class="form-control" >
                                      </div>
                                     <div class="col-lg-6">
                                        <label>Type</label>
                                        <input type="text" v-model="type" class="form-control" >
                                      </div>
                                   </div>
                                   <div class="row">
                                     <div class="col-lg-12 mb-2">
                                       <label>Prix :</label>
                                       <input type="text" v-model="prix" class="form-control">
                                     </div>
                                     <div class="col-lg-12">
                                       <label>Photo_avatar</label>
                                       <input type="file" ref="file"  @change="upload_image" class="form-control">
                                     </div>
                                     <div class="text-center mt-2">
                                        <button type="submit"  class="btn btn-outline-success">Sign Up</button>
                                   </div>
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
import service from '../../services/service.js';

export default{
  name:'addProduct',

  data(){
    return{
      Name_Product:'',
      color:'',
      type:'',
      prix:'',
      file:'',
      message_error:""
    }
  },
  props:{
    selected:String
  },
  methods:{ 
   
   upload_image() {
       this.file = this.$refs.file.files[0];
    },

    Add_Product(){
      service.createProduct({
        Name_Product:this.Name_Product,
        color:this.color,
        type:this.type,
        prix:this.prix,
        file:this.file,
        Quantity:this.Quantity
        }).then(()=>{
            this.prix = "" ;
            this.type = "" ;
            this.color = "" ;
            this.Quantity="";
            this.Name_Product = "" ;
            this.$emit("choice","choice");
        }).catch((error)=>{
            console.log(error);
        }) ;
    },
    Onsubmit() {
      if(this.Name_Product=="" &&
        this.color=="" && 
        this.type=="" &&
        this.prix=="" &&
        this.file==""){
          this.message_error="All Field Are required";
       }else{
        this.Add_Product();
     }
    },
 
  },
  
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