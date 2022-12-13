<template>
    <div>
        <div class="container mt-5">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <div class="row">
                  <div class="col-md-6">
                  
                  </div>
                  <div class="col-md-6">
                  
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
                 
                  <tbody v-if="users == ''">
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
                  @click="deletee(user.id)"
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