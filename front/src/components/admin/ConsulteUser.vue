<template>
  <div>
    <div class="user container">
      <h5 class="m-0 font-weight-bold mb-2 text-primary text-center">
        User List Data Table
      </h5>
      <div class="d-flex justify-content-between">
        <div class="w-25 col-lg-6 text-center d-flex justify-content-center">
          <form
            class="text-center d-flex justify-content-center align-items-center"
            @submit.prevent="search_by_name"
          >
            <input
              type="search"
              class="form-control mb-2"
              placeholder="search"
              v-model="search"
            />
            <button class="btn btn-success">
              <i class="material-icons mx-2 text-white">search</i>
            </button>
          </form>
        </div>
        <div class="d-flex gap-2">
          <button
            @click="affichage != 0 ? (affichage = 0) : 1"
            :class="affichage == 0 ? 'btn btn-primary' : 'btn btn-dark'"
          >
            <font-awesome-icon icon="fa-solid fa-list" />
          </button>
          <button
            @click="affichage == 0 ? (affichage = 1) : 0"
            :class="affichage == 1 ? 'btn btn-primary' : 'btn btn-dark'"
          >
            <font-awesome-icon icon="fa-solid fa-grip" />
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="col-xl-6 mt-4 container">
        <div class="row d-flex justify-content-center"></div>
      </div>
    </div>
    <div v-if="affichage == 0">
      <consulteUser1Vue
        :users="users"
        @deleteuser="deleteuser"
      ></consulteUser1Vue>
    </div>
    <div v-else>
      <consulteuser_OtherVue
        :users="users"
        @deleteuser="deleteuser"
      ></consulteuser_OtherVue>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import service from "@/services/service.js";
import consulteUser1Vue from "./consulteUser1.vue";
import consulteuser_OtherVue from "./consulteuser_Other.vue";
export default {
  data() {
    return {
      loading: true,
      search: "",
      affichage: 0,
    };
  },
  props: {
    users: Object,
  },
  components: {
    consulteUser1Vue,
    consulteuser_OtherVue,
  },

  methods: {
    search_by_name() {
      if (this.search != "") {
        service.search_user(this.search).then((res) => {
          //this.users=res.data.data;
          this.$emit("changer_user", res.data.data);
        });
      } else {
        service.get_All_users().then((res) => {
          this.$emit("changer_user", res.data.data);
        });
      }
    },

    deleteuser(id) {
      service
        .delete_user(id)
        .then(() => {
          service.get_All_users().then((res) => {
            this.$emit("changer_user", res.data.data);
          });
        })
        .catch((r) => {
          console.log(r);
        });
      $(" [data-bs-dismiss=modal] ").trigger({ type: "click" });
    },
  },
};
</script>

<style scoped>
</style>