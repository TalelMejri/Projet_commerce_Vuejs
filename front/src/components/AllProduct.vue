<template>
    <div>
            <div class="float-end ">
               <span class="btn btn-primary" @click="sortBy()">  Sort By Prix</span>
            </div>
            <div v-if="select_name==''">
                <div class="row d-flex justify-content-center  container p-4">
                    <div  class="col-lg-6" v-for="product in Products" :key="product.id" >
                        
                       <div v-if="(product.prix>=prix)">
                        <div  class="card mb-5">
                         <div  class="card-body container">
                             <p class="card-header">{{product.name_product}}</p>
                             <div class="box-container">
                                 <div class="box">
                                     <img :class="{disabledimage:product.Quantity==0}" style="width:120px !important; height:120px !important" :src="'http://localhost:8000' + product.file"  :alt="product.name_product">
                                     <div class="content">
                                         <h3>{{product.name_product}}</h3>
                                         <p>{{product.Quantity}}(available)  <br> {{product.prix}} dt</p>
                                     </div>
                                 </div>
                             </div>
                             <div>
                                  <button  :disabled="product.Quantity==0" @click="add_product(product)" class="btn btn-outline-success">Add</button>
                          
                             </div>
                         </div>
                    </div>
                 </div>
            </div>
             
            </div>
            </div>
            <div v-else>
                <div class="row d-flex justify-content-center  container p-4">
                    <div  class="col-lg-6" v-for="product in Products" :key="product.id" >
                        <div v-if="(product.type==select_name)">
                           
                       <div v-if="(product.prix>=prix)">
                        <div  class="card mb-5">
                         <div  class="card-body container">
                             <p class="card-header">{{product.name_product}}</p>
                             <div class="box-container">
                                 <div class="box">
                                     <img :class="{disabledimage:product.Quantity==0}" :src="'http://localhost:8000' + product.file" style="width:120px !important; height:120px !important"  :alt="product.name_product">
                                     <div class="content">
                                         <h3>{{product.name_product}}</h3>
                                         <p>{{product.Quantity}}(available)  <br> {{product.prix}} dt</p>
                                     </div>
                                 </div>
                             </div>
                             <div>
                                  <button  :disabled="product.Quantity==0" class="btn btn-outline-success" @click="add_product(product)">Add</button>
                              
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
export default{
    data(){
        return{
            all_product_add:[]
        }
    },
    methods:{
        sortBy(){
           this.$emit("sortby");
        },
        add_product(product){
            let index=this.all_product_add.find((v)=>v.product.id==product.id);
            if(!index){
              this.all_product_add.push({
                 product:product,
                 cart:1
              });
            /*localStorage.setItem("product",JSON.stringify(this.all_product_add));
              this.all_product_add= JSON.parse(localStorage.getItem("product"))!=null ?  JSON.parse(localStorage.getItem("product")) : '';*/
              this.$emit("add_product",this.all_product_add);
            }else{
                alert("Product already added");
            }
        }
    },
    
    props:{
        Products:Object,
        prix:Number,
        select_name:String
    }
}
</script>

<style scoped>

.disabledimage{
    filter: grayscale(1500) !important;
}

  </style>
