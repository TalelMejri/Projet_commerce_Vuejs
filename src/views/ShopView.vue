<template>
  <div class="shop">
    <div v-if="loading">
      <welcome :name="store.user['name']"></welcome>
    </div>

    <div v-else>
      <div class="bg-dark tete text-white text-center p-2">
        🪐 Get 10% off your first order 🪐
      </div>
  
      <div class="head d-flex bd-highlight mb-3 py-2">
        <div class="p-2 bd-highlight">
          <a 
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="position-relative"
          >
            <i class="bi me-2" disabled style="font-size: 25px"
              ><font-awesome-icon icon="fa-solid fa-shop"
            /></i>
            <span
              style="font-size: 9px"
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ all_product_add.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </a>
        </div>
        <div class="p-2 bd-highlight">
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                style="height: 50px !important; width: 50px !important"
                class="rounded"
                :src="'http://localhost:8000' + store.user['avatar']"
              />
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#" @click="logout()">LogOut</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">All Purchase</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                     <div class="modal-body">
                              <div class="row d-flex justify-content-center my-4">
                                <div class="col-md-8">
                                    <div v-for="buy in all_product_add" :key="buy.id">
                                  <div class="card mb-4">
                                    <div class="card-header py-3">
                                      <h5 class="mb-0">{{buy.product.name_product}}</h5>
                                    </div>
                                    <div class="card-body">
                                      <div class="row">
                                        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                          <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img :src="'http://localhost:8000' + buy.product.file"
                                              class="w-100"  />
                                          </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                          <p>Size : M</p>
                                          <button type="button"  class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                            title="Move to the wish list" @click="delete_product(buy.product)">
                                            <i  class="material-icons">delete</i>
                                          </button>
                                        </div>
                                        <div class="col-lg-4 ">
                                          <div class="d-flex" > 
                                            <button :disabled="(buy.cart==0)" class="btn btn-primary w-50"
                                          >
                                              <i  class="material-icons"> remove</i>
                                            </button>
                                            <div class="form-control">
                                              <input id="form1" min="1" name="quantity"  v-model="buy.cart" type="number" class="form-control" />
                                              <label class="form-label" for="form1">Quantity</label>
                                            </div>
                                            <button :disabled="(buy.cart == buy.product.Quantity)" @click="buy.cart++" class="btn btn-primary w-50"
                                              >
                                              <i  class="material-icons">add</i>
                                            </button>
                                          </div>
                                          <p class="text-start text-md-center py-4">
                                            <strong>{{buy.product.prix}} $</strong>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                
                            </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                          <div class="card-header py-3">
                            <h5 class="mb-0">Summary</h5>
                          </div>
                          <div class="card-body">
                            <ul class="list-group list-group-flush">
                              <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>${{total}}</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Gratis</span>
                              </li>
                              <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                  <strong>Total amount</strong>
                                  <strong>
                                    <p class="mb-0">(including VAT)</p>
                                  </strong>
                                </div>
                                <span><strong>${{total}}</strong></span>
                              </li>
                            </ul>
                            <button @click="generate_pdf()" type="button" class="btn btn-primary btn-lg btn-block">
                              Go to checkout
                            </button>
                          </div>
                        </div>
                        </div>
               </div>
            </div>
            <div class="modal-footer">
              <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <main class="container-fluid mt-5 py-2">
        <div
          class="
            mb-4
            p-2
            d-flex
            justify-content-center
            text-white
            rounded
            bg-dark
          "
        >
          <div class="col-md-9 px-0">
            <img
              style="height: 100% !important; width: 100% !important"
              :src="images[i].src"
              alt=""
            />
          </div>
          <div class="m-2">
            <div @click="i = 0">
              <font-awesome-icon :icon="i==0 ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle'" />
            </div>
            <div @click="i = 1">
              <font-awesome-icon :icon="i==1 ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle'" />
            </div>
            <div @click="i = 2">
              <font-awesome-icon :icon="i==2 ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle'" />
            </div>
          </div>
        </div>
      </main>
      <div class="contact">
        <div class="container-fluid py-3">
          <div class="d-flex py-5 justify-content-center">
            <div class="col-xl-12 col-lg-9 container">
              <div class="row rounded shadow-lg p-5">
                <div class="col-lg-2 border-end">
                  <div class="mt-5 py-4">
                    <label for="temp">Prix :</label><br />
                    <input
                      type="range"
                      id="temp"
                      min="0"
                      v-model="prix"
                      :max="prix_max"
                      step="1"
                      name="temp"
                    />
                    <input type="text" class="form-control" v-model="prix" />
                  </div>
                  Select Your Kind OF Clothes :
              
                  <div class="d-flex flex-column gap-4 py-2">
                    <button :class="select_name=='' ? 'btn btn-primary' :'btn btn-dark'"  @click="choice_item('')">All</button>
                    <button :class="select_name=='T-shirt' ? 'btn btn-primary' :'btn btn-dark'"  @click="choice_item('T-shirt')">T-shirt</button>
                    <button :class="select_name=='sweater' ? 'btn btn-primary' :'btn btn-dark'" @click="choice_item('sweater')">sweater</button>
                    <button :class="select_name=='hoodie' ? 'btn btn-primary' :'btn btn-dark'" @click="choice_item('hoodie')">hoodie</button>
                    <button :class="select_name=='socks' ? 'btn btn-primary' :'btn btn-dark'" @click="choice_item('socks')">socks</button>
                  </div>
                </div>
                <div class="col-lg-10 text-center">
                  <allProduct
                    @sortby="sortby"
                    @add_product="add_product"
                    :Products="myproject"
                    :select_name="select_name"
                    :prix="parseInt(prix)"
                  ></allProduct>
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
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import welcome from "../components/welcome.vue";
import { useAuthStore } from "@/store/auth.store";
import allProduct from "../components/AllProduct.vue";
import service from "../services/service";
import $ from 'jquery';
export default {
  created() {
    service.get_all_product_user().then((res) => {
      this.Products = res.data.data;
    });
  },
  mounted() {
    setTimeout(() => (this.loading = false), 2000);
  },
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  data() {
    return {
      prix: 0,
      Products: [],
      default:[],
      all_product_add: [],
      loading: false,
      prix_max: 0,
      do_sort_by_prix: 0,
      select_name: "",
      product_choice: [],
      i: 0,
      images: [
        { src: require("../assets/AdobeStock_303371265.webp") },
        {
          src: require("../assets/_126607386_infinitedfibersclothesexamples.jpg"),
        },
        { src: require("../assets/AdobeStock_344821558.jpeg") },
      ],
    };
  },
  methods: {
    choice_item(item) {
      this.do_sort_by_prix = 0;
      this.select_name = item;
      this.default=[];
    },
    delete_product(product){
      if(confirm(" do you want delete"+product.name_product)){
        let index=this.all_product_add.findIndex((v)=>v.product.id==product.id);
        this.all_product_add.splice(index,1);
      }
    },
    add_product(product) {
      this.all_product_add=product;
    },
    logout() {
      this.store.logout();
    },
    sortby() {
      this.do_sort_by_prix = 1;
    },
    update_product(all_product_add){
      for(let i=0;i<all_product_add.length;i++){
        console.log(all_product_add[i].product.id);
        console.log(all_product_add[i].cart);
        service.decremente_quantity({
              id:all_product_add[i].product.id,
              cart: all_product_add[i].cart
           }).then((res)=>{
            console.log(res);
        })
     }
    },
    generate_pdf(){
     
      $(" [data-bs-dismiss=modal] ").trigger({ type : "click" });
      this.$confetti.start();
      setTimeout(()=> this.$confetti.stop(),5000);
      this.update_product(this.all_product_add);
    
      const doc = new jsPDF({
        orientation:"portrait",
        unit:"in",
        format:"letter"
      });
     
        //doc.text( 'dfffff',3.5,0.4);// (message,horizontale,vertical)
        var total_payment="Total amount :"+this.total+" Dt ";
       
        doc.text(total_payment,3.4,0.7);
        autoTable(doc, { html: '#my-table' }) 
      
      this.all_product_add.forEach((v)=>{
        var val= v.product.id;
        var name=v.product.name_product;
        var color=v.product.color;
        var quantity=v.cart;
        
        autoTable(doc, {
          head: [['Id', 'Name','color', 'Quantity']],
          body: [
            [val, name, color,quantity],
          ],
        })
      })  
        doc.save(`${Math.random()}.pdf`);
        this.all_product_add=[];
        this.$router.go();
    },

  },
  components: {
    welcome,
    allProduct,
  },
  computed: {
    total(){
      let totale=0;
       for(let i=0;i<this.all_product_add.length;i++){
         totale+=(this.all_product_add[i].product.prix)*(this.all_product_add[i].cart);
       }
       return totale;
    },
    myproject() {
      this.prix = 0;
      this.prod_ord = JSON.parse(JSON.stringify(this.Products));
      this.prix_max=0;
      if (this.select_name == "") {

        for (let i = 0; i < this.prod_ord.length; i++) {
          if (this.prod_ord[i].prix > this.prix_max) {
            this.prix_max = parseInt(this.prod_ord[i].prix);
          }

        }

        if (this.do_sort_by_prix == 1) {
          for (let i = 0; i < this.prod_ord.length; i++) {
            this.prod_ord.sort((a, b) => (a.prix > b.prix ? -1 : 1));
          }
        }

        return { ...this.prod_ord };
      } else {

        for (let i = 0; i < this.prod_ord.length; i++) {
          if (this.prod_ord[i].type == this.select_name) {
            this.default.push(this.prod_ord[i]);
          }
        }

        for(let i=0;i<this.default.length;i++){
          console.log(this.default[i].prix);
          if (this.default[i].prix > this.prix_max) {
            this.prix_max = parseInt(this.default[i].prix);
          }
        }
        return { ...this.prod_ord };
      }
     
    },
  },
};
</script>


<style scoped>
.head {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  background: #fff;
  float: right;
}
.tete {
  background-image: linear-gradient(to right, #2696e8, #ff2d75);
}
</style>