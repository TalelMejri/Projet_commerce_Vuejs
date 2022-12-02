<template>

    <div class="container-fluid d-flex justify-content-center mb-4">
        <div class="">
            <div class="box_count">
                <i><font-awesome-icon icon="fa-solid fa-user" /></i>
              <div>
               <span data-purecounter-start="0" :data-purecounter-end="nbruser" data-purecounter-duration="1" class="purecounter"></span>
                <p>Our Users</p>
             </div>
          </div>
     </div>
    </div>
    
</template>

<script>
import PureCounter from "@srexi/purecounterjs";
import service from "@/services/service.js";
export default{
    name:'ourusers',
    data(){
        return{
            nbruser:0
        }
    },

    mounted(){
        new PureCounter();
    },

    created(){
        service.getCountUser().then((response)=>{
            console.log(response.data);
            this.nbruser=response.data.data;
        }).catch((error)=>{
            console.log(error);
        })

     },
  
}
</script>


