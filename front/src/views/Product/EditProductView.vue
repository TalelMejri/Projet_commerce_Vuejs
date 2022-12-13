<template>
  <div>
    <div>
        <div class="mt-2 py-2">
            <div class="mt-2 "> 
               <div class="d-flex p-3 m-4 justify-content-center">   
                   <div class="col-xl-10 ">
                         <div class="row shadow-lg rounded">
                               <div class="col-lg-6">
                                       <div class="text-center">
                                          <h1 class="h4 fw-bolder mb-3 py-3">Update  Product</h1>
                                       </div> 
                                     
                                   <form class="py-4" @submit.prevent="Update" enctype="multipart/form-data">
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
                                            <button type="submit"  class="btn btn-outline-warning">Update</button>
                                       </div>
                                       </div>
    
                                   </form>
                               </div>
                               <div class="col-lg-6 d-none d-lg-block ">
                                 <Vue3Lottie
                                 data-aos="zoom-out" data-aos-delay="50"
                                  animationLink="https://assets2.lottiefiles.com/packages/lf20_xjhwr9wv.json"
                                  style="width: 100%; height: 100%;"
                             />
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
import service from '@/services/service';
export default {
    created(){
        this.id=this.$route.params.id;
        console.log(this.id);
        service.get_product_by_id(this.id).then((res)=>{
            console.log(res);
            this.Name_Product=res.data.data.name_product;
            this.color=res.data.data.color;
            this.type=res.data.data.type;
            this.prix=res.data.data.prix;
            this.Quantity=res.data.data.Quantity;
        })
    },
    data(){
        return{
            id:0,
            Name_Product:'',
            color:'',
            type:'',
            prix:'',
            file:'',
            upload_avatar:0
        }
    },
    methods:{
           upload_image() {
                this.file = this.$refs.file.files[0];
                this.upload_avatar=1;
            },
            Update(){
                service.update_product(this.id,{
                    Name_Product:this.Name_Product,
                    color:this.color,
                    type:this.type,
                    prix:this.prix,
                    file:this.file,
                    Quantity:this.Quantity,
                    upload_avatar:this.upload_avatar
                }).then(()=>{
                     this.$router.push({name:"ProfilAdmin"});
                }).catch((r)=>{
                    console.log(r);
                })
            }
    }
}
</script>

<style>

</style>