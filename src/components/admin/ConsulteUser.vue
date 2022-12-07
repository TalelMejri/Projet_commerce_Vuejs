<template>
    <div>
        <div class="user">
            <div class="container mt-5">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <div class="row">
                  
                    <div class="col-md-6">
                      <h6 class="m-0 font-weight-bold text-primary text-center">
                        User List Data Table
                      </h6>
                    </div>
                    <div class="col-md-6">
                      <form @submit.prevent="search_by_name">
                        <input
                          type="search"
                          class="form-control mb-2"
                          placeholder="search"
                          v-model="search"
                        />
                        <button class="btn btn-outline-success">  <i  class="material-icons mx-2 text-dark">search</i></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th>operation</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Avatar</th>
                     
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th>operation</th>
                      </tr>
                    </tfoot>
                    <tbody v-if="!loading" >
                      <td colspan="7" >
                        <b-spinner label="Spinning"></b-spinner>
                      </td>
                    </tbody>
                    <tbody v-else-if="users == ''">
                      <tr class="table-primary">
                        <td class="text-center py-4" colspan="7">
                          <p class="fw-bolder text-danger">No matching records found</p>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr v-for="user in users" :key="user.id">
                        <td>
                          <img :src="'http://localhost:8000'+user.avatar" height="50" width="50">
                        </td>
                        <td>
                          {{ user.name }}
                        </td>
                        <td>
                          {{ user.email }}
                        </td>
                        <td>
                          {{ user.date_naissance }}
                        </td>
                        <td>
        <div
            class="modal fade"
            :id="`exampleModal${+user.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Delete User
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-dark">
                  Do You Want Delete {{ user.name }}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close 
                  </button>
                  <button
                    type="button"
                    @click="deleteuser(user.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            </div>
                          <button  class="btn btn-danger px-3"
                            data-bs-toggle="modal"
                            :data-bs-target="`#exampleModal${+user.id}`" >
                            <i  class="material-icons mx-2 text-dark me-2">delete</i>
                          </button>
                        
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import $ from 'jquery';
import service from "@/services/service.js";
export default{
  
     data(){
        return{
            loading:true,
            search:"",
        }
     },
     props:{
        users:Object
     },
     created() {

     },
     methods:{
        search_by_name(){
            if(this.search!=""){
                 service.search_user(this.search).then((res)=>{
                     //this.users=res.data.data;
                     this.$emit("changer_user",res.data.data)
                 })
            }
        },
        
        deleteuser(id){
          
            service.delete_user(id).then(()=>{
                  this.$router.go();
            }).catch((r)=>{
                console.log(r);
            })
            $(" [data-bs-dismiss=modal] ").trigger({ type : "click" });
          
        }
    },
       

     }

</script>