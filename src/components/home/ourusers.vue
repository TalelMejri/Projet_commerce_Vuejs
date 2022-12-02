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
import axios from "axios";
export default{
    mounted(){
        new PureCounter();
    },
    created(){
        axios.get("http://localhost:8000/api/user_made/count").then((response)=>{
            this.nbruser=response.data.data;
            console.log(response.data.data);
        })
     },
    name:'ourusers',
    data(){
        return{
            nbruser:0
        }
    }
}
</script>


