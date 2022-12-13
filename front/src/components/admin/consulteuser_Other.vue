<template>
    <div>
        <div>
            <div class="container mt-5">
                <div class="row">
                     <div v-for="user in users" :key="user.id" class="col-lg-4">
                        <div  class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img :src="'http://localhost:8000'+user.avatar" class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body text-primary">
                                  <h5 class="card-title">{{user.name}}</h5>
                                  <p class="card-text">{{user.email}}</p>
                                  <p class="card-text"><small class="text-muted">{{user.date_naissance}}</small></p>
                                </div>
                              </div>
                              <div class="text-center">
                                      <button  class="btn btn-danger px-3"
                                      data-bs-toggle="modal"
                                      :data-bs-target="`#exampleModal${+user.id}`">Delete</button>
                              </div>
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
                                      @click="deletee(user.id)"
                                      class="btn btn-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
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
    name:'consulteUser1',
    props:{
        users:Object
     },
    data(){
        return{

        }
    },
    methods:{
        deletee(id){
            this.$emit("deleteuser",id);
        }
    },
    
}
</script>

<style scoped>


</style>