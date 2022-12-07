<template>
  <div class="container py-5">
    <div class="card">
      <div class="row text-center card-header">
        <div class="col-lg-4 mb-2">
          <form @submit.prevent="searchData()">
            <input
              type="search"
              class="form-control"
              placeholder="search"
              v-model="search"
            />
            <button type="submit" class="btn btn-outline-success mt-2">
              <i class="material-icons mx-2 text-dark">search</i>
            </button>
          </form>
        </div>
        <div class="col-lg-4 text-primary">
          <strong> Product List Data Table | {{ nbrproduct }} </strong>
        </div>
      </div>
    </div>
    <div class="text-center mt-5" v-if="prealoder">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="row d-flex justify-content-center gap-4 mt-2">
        <div v-if="tab_product == ''">
          <div class="alert alert-danger">No Product Found</div>
        </div>

        <div
          v-else
          v-for="tab in tab_product"
          :key="tab.id"
          class="carde col-lg-4"
        >
          <div class="face face1">
            <div class="content">
              <img :src="'http://localhost:8000' + tab.file" />
              <h2>{{ tab.type }}</h2>
            </div>
          </div>
          <div class="face face2">
            <div class="content text-dark">
              <div>
                <p class="text-center"><strong>Type</strong> :{{ tab.type }}</p>
                <p class="text-center">
                  <strong>Quantity</strong> :{{ tab.Quantity }}
                </p>
                <p class="text-center">
                  <strong>Name Product</strong>{{ tab.name_product }}
                </p>
                <div class="d-flex gap-4">
               
                  <button class="btn btn-warning">
                    <router-link :to="'/editProduct/'+tab.id">   Edit   </router-link>
                  </button>
              
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    :data-bs-target="`#exampleModal${+tab.id}`"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            :id="`exampleModal${+tab.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Delete Product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-dark">
                  Do You Want Delete {{ tab.name_product }}
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
                    @click="deleteProduct(tab.id)"
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
      <div class="d-flex justify-content-center mt-5">
        <nav>
          <ul class="pagination">
            <button
              class="btn btn-primary m-2"
              @click="changePage(pagination.current_page - 1)"
              :disabled="!pagination.prev_page"
            >
              prev
            </button>
            <button
              class="btn btn-primary m-2"
              v-for="num in Math.ceil(
                pagination.per_page ? pagination.total / pagination.per_page : 1
              )"
              @click="changePage(num)"
              :disabled="num == pagination.current_page"
              :key="num"
            >
              {{ num }}
            </button>
            <button
              class="btn btn-primary m-2"
              @click="changePage(pagination.current_page + 1)"
              :disabled="!pagination.next_page"
            >
              next
            </button>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
//import $ from "jquery";
import service from "@/services/service";

export default {
  name: "ConsulteProduct",
  props: {
    nbrproduct: String,
    selected: String,
  },
  data() {
    return {
      search: "",
      prealoder: false,
      pagination: {
        current_page: 1,
        next_page: 0,
        prev_page: 0,
        total: 0,
        per_page: 0,
      },
    };
  },
  created() {
    this.searchData();
    // setTimeout(() => (this.prealoder = false), 3000);
  },
  methods: {
    
    changePage(page) {
      this.pagination.current_page = page;
      this.searchData();
    },

    searchData() {
        this.prealoder = true;
      service
        .get_all_product(this.search, this.pagination.current_page)
        .then((response) => {
          this.tab_product = response.data.data;
          this.pagination.prev_page =
            response.data.prev_page_url?.split("=")[1];
          this.pagination.next_page =
            response.data.next_page_url?.split("=")[1];
          this.pagination.per_page = response.data.per_page;
          this.pagination.total = response.data.total;
          this.prealoder = false;
        });
    },

    deleteProduct(id) {
      service.delete_product(id).then(() => {
        service.get_count_product().then((res) => {
          this.nbrproduct = res.data.data;
        });
        this.$router.go();
      });
    },
  },
};
</script>

<style scoped>
.carde {
  position: relative;
  width: 280px;
  height: 200px;
}
.carde .face {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  transition: 0.5s;
}
.carde .face.face1 {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform-origin: bottom;
}
.carde .face.face1 img {
  width: 100%;
  height: 100%;
}
.carde .face.face1 h2 {
  margin: 4px 0 0;
  color: #000;
  text-align: center;
  font-size: 1.5em;
}
.carde:hover .face.face1 {
  transform: translateY(-100%) rotateX(90deg);
  background: #ff0057;
}
.carde .face.face2 {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  transform-origin: top;
  transform: translateY(100%) rotateX(90deg);
}
.carde:hover .face.face2 {
  transform: translateY(0) rotateX(0);
}
.carde:hover {
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
}
</style>