<template>
  <div id="dashboard">
    <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
      <div class="container position-relative">
        <button
          class="
            navbar-toggler
            text-uppercase
            font-weight-bold
            text-primary
            rounded
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i style="font-size: 19px"
            ><font-awesome-icon icon="fa-solid fa-list"
          /></i>
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
          style="border: none; font-size: 0px !important"
          class="
            dropdown-toggle
            position-fixed
            bottom-0
            text-white
            end-0
            p-3
            bg-transparent
          "
        >
          <i
            style="
              font-size: 25px;
              color: pink;
              z-index: 9999999;
              padding: 50px;
            "
            ><font-awesome-icon icon="fa-solid fa-bars"
          /></i>
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Changer Color Side Bar
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row d-flex justify-content-center">
                  <div
                    @click="changer_color('#389466')"
                    class="col-lg-4 color-circle color1"
                  ></div>
                  <div
                    @click="changer_color('#de5b89')"
                    class="col-lg-4 color-circle color2"
                  ></div>
                  <div
                    @click="changer_color('#2696E8')"
                    class="col-lg-4 color-circle color3"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="collapse navbar-collapse justify-content-end mx-5"
          id="navbarResponsive"
        >
          <ul class="navbar-nav text-center p-2">
            <div class="dropdown">
              <a
                class="dropdown-toggle btn-rotate"
                type="button"
                id="dropdownmenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="photo">
                  <img
                    style="height: 50px !important; width: 50px !important"
                    class="rounded"
                    :src="'http://localhost:8000' + store.user['avatar']"
                  />
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-right dropdown-navbar">
                <li class="nav-link">
                  <a @click="logout()" href="#" class="nav-item dropdown-item"
                    >Log out</a
                  >
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="left">
        <div :style="'background-color:' + color_choice" class="sidebar">
          <p class="text-center name_user mt-4">
            <b> {{ store.user["name"] }}</b>
          </p>
          <hr />
          <div class="page_content py-2 p-4 mt-5">
            <ul class="nav gap-4 py-2">
              <li class="nav-item">
                <a
                  @click="choice_componet('dashboard')"
                  href="#"
                  class="d-flex nav-link text-white"
                  aria-current="page"
                >
                  <span>
                    <i class="bi me-2" style="color: white"
                      ><font-awesome-icon icon="p-2 fa-solid fa-list" /></i
                  ></span>
                  <h3>Dashboard</h3>
                </a>
              </li>
              <li>
                <a
                  @click="choice_componet('Add_Product')"
                  href="#"
                  class="d-flex nav-link text-white"
                >
                  <i class="bi me-2" style="color: white"
                    ><font-awesome-icon icon="fa-solid fa-add"
                  /></i>
                  <h3>Add Product</h3>
                </a>
              </li>
              <li>
                <a
                  @click="choice_componet('Consult_User')"
                  href="#"
                  class="nav-link text-white"
                >
                  <i class="bi me-2" style="color: white"
                    ><font-awesome-icon icon="fa-solid fa-user"
                  /></i>
                  <h3>Consult User</h3>
                </a>
              </li>
              <li>
                <a
                  @click="choice_componet('Consult_Produt')"
                  href="#"
                  class="nav-link text-white"
                >
                  <i class="bi me-2" style="color: white"
                    ><font-awesome-icon icon="fa-solid fa-shop"
                  /></i>
                  <h3>Consult Produt</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div>
          <div v-if="selected == 'dashboard'">
            <div class="py-2">
              <highcharts :options="chartOptions"></highcharts>
            </div>
            <div class="row container text-center">
              <div class="col-lg-6 mb-2">
                <div class="box_count">
                  <i><font-awesome-icon icon="fa-solid fa-user" /></i>
                  <div>
                    <span>{{ nbrproduct }}</span>
                    <p style="color: blue; font-size: 18px">Our Products</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mb-3">
                <div class="box_count">
                  <i><font-awesome-icon icon="fa-solid fa-shop" /></i>
                  <div>
                    <span>{{ nbruser }}</span>
                    <p style="color: blue; font-size: 18px">Our Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="selected == 'Add_Product'">
            <AddProductVue @choice="choice"></AddProductVue>
          </div>
          <div v-else-if="selected == 'Consult_User'">
            <Consult_User
              @changer_user="changer_user"
              :users="users"
            ></Consult_User>
          </div>
          <div v-else>
            <ConsulteProduct
              @choice_componet="choice"
              :selected="selected"
            ></ConsulteProduct>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import AddProductVue from "@/components/admin/AddProduct.vue";
import Consult_User from "@/components/admin/ConsulteUser.vue";
import ConsulteProduct from "@/components/admin/ConsulteProduct.vue";

import $ from "jquery";
import { useAuthStore } from "@/store/auth.store";
import service from "@/services/service.js";

export default {
  components: {
    AddProductVue,
    Consult_User,
    highcharts: Chart,
    ConsulteProduct,
  },
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  data() {
    return {
      tab_product: [],
      nbruser: 0,
      nbrproduct: 0,
      color_choice: "#389466",
      selected: "dashboard",
      users: [],
    };
  },

  created() {
    //{...users};
    service
      .getCountUser()
      .then((response) => {
        console.log(response.data);
        this.nbruser = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    service.get_All_users().then((response) => {
      this.users = response.data.data;
      console.log(this.users);
    });

    service
      .get_count_product()
      .then((response) => {
        this.nbrproduct = response.data[1];
      })
      .catch((r) => {
        console.log(error);
      });
  },
  methods: {
    changer_user(user) {
      this.users = user;
    },
    choice_componet(name) {
      this.selected = name;
    },
    choice() {
      this.selected = "Consult_Produt";
    },
    changer_color(color) {
      this.color_choice = color;
      $(" [data-bs-dismiss=modal] ").trigger({ type: "click" });
    },
    logout() {
      this.store.logout();
    },
  },
  computed: {
    chartOptions() {
      return {
        series: [
          {
            data: [0, 1, 2, this.nbruser],
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.color-circle {
  width: 50px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 5px;
  height: 25px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
}

.color-circle:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
}

.color-circle.color1 {
  background-image: linear-gradient(to right, #fff, #fff, #ffff, #fff);
  box-shadow: 0 2px 7.5px 0 #389466;
}

.color-circle.color2 {
  background-image: linear-gradient(
    to right,
    #de5b89,
    #de5b89,
    #de5b89,
    #de5b89
  );
  box-shadow: 0 2px 7.5px 0 rgba(3, 27, 104, 0.75);
}

.color-circle.color3 {
  background-image: linear-gradient(
    to right,
    #2696e8,
    #2696e8,
    #2696e8,
    #2696e8
  );
  box-shadow: 0 2px 7.5px 0 #2696e8;
}

#dashboard {
  background: whitesmoke;
  height: 100vh;
  overflow: auto;
  color: #fff;
}
.modal {
  color: #000;
}
.container-fluid {
  margin-top: 2%;
  display: grid;
  grid-template-columns: 20% auto;
  column-gap: 5rem;
  position: relative;
}
.sidebar {
  border-radius: 25px;
}
.sidebar ul h3 {
  font-size: 15px !important;
  text-align: center;
}
.right {
  overflow-y: scroll;
  max-height: 100vh;
}
.container-fluid .left {
  position: sticky;
  padding: 15px;
}

@media (max-width: 1200px) {
  .container-fluid {
    grid-template-columns: 10% auto;
  }
  .left h3 {
    display: none;
  }
  .right {
    overflow-y: scroll;
    max-height: 100vh;
  }
  .name_user,
  hr {
    display: none;
  }
  .left i {
    margin-left: -50%;
  }
}
@media (max-width: 992px) {
  .container-fluid {
    grid-template-columns: 15% auto;
  }
  .left h3 {
    display: none;
  }
  .right {
    overflow-y: scroll;
    max-height: 100vh;
  }
  .name_user,
  hr {
    display: none;
  }
  .left i {
    margin-left: -50%;
  }
}
@media (max-width: 500px) {
  .container-fluid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .container-fluid .left {
    display: block;
  }
  .gap-4 {
    gap: 10px !important;
  }
  .left .sidebar ul li a {
    text-align: center;
    font-size: 10px;
  }
}
@media (max-width: 350px) {
  .container-fluid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .container-fluid .left {
    display: block;
  }
  .gap-4 {
    gap: 5px !important;
  }
  .left .sidebar ul li a {
    text-align: center;
    font-size: 10px;
  }
}
.box_count {
  padding: 70px 0 60px;
}
.box_count {
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}
.box_count i {
  font-size: 35px;
  line-height: 0;
  margin-right: 20px;
  color: #4154f1;
}
.box_count span {
  font-size: 30px;
  display: block;
  font-weight: 600;
  color: #0b198f;
}
.box_count p {
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
}
</style>