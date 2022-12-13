<template>
  <div>
    <div class="mt-2 py-2" style="color: black">
      <div class="mt-2">
        <div class="d-flex p-3 m-4 justify-content-center">
          <div class="col-xl-10">
            <div class="row shadow-lg rounded">
              <div class="col-lg-6">
                <div class="text-center">
                  <h1 class="h4 fw-bolder mb-3 py-3">Add Product</h1>
                </div>
                <div v-if="message_error != ''" class="alert alert-danger">
                  {{ message_error }}
                </div>
                <form
                  class="py-4"
                  @submit.prevent="Onsubmit"
                  enctype="multipart/form-data"
                >
                  <div class="row mb-4">
                    <div class="col-lg-6">
                      <label>Name Product</label>
                      <input
                        type="text"
                        v-model="Name_Product.value"
                        @keyup="validate('name')"
                        @click="validate('name')"
                        :class="
                        Name_Product.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                    <small v-if="Name_Product.error != ''" class="text-danger">
                      {{ Name_Product.error }}
                    </small>
                    </div>
                    <div class="col-lg-6">
                      <label>Color</label>
                      <input
                        type="text"
                        v-model="color.value"
                        class="form-control"
                        @keyup="validate('color')"
                        @click="validate('color')"
                        :class="
                        color.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                      <small v-if="color.error != ''" class="text-danger">
                        {{ color.error }}
                      </small>
                    </div>
                    <div class="col-lg-6">
                      <label>Quantity</label>
                      <input
                        type="number"
                        v-model.number="Quantity.value"
                        class="form-control"
                        @keyup="validate('quantity')"
                        @click="validate('quantity')"
                        :class="
                        Quantity.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                      <small v-if="Quantity.error != ''" class="text-danger">
                        {{ Quantity.error }}
                      </small>
                    </div>
                    <div class="col-lg-6">
                      <label>Type</label>
                      <input
                        type="text"
                        v-model="type.value"
                        class="form-control"
                        @keyup="validate('type')"
                        @click="validate('type')"
                        :class="
                        type.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                      <small v-if="type.error != ''" class="text-danger">
                        {{ type.error }}
                      </small>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 mb-2">
                      <label>Prix :</label>
                      <input
                        type="number"
                        v-model="prix.value"
                        class="form-control"
                        @keyup="validate('prix')"
                        @click="validate('prix')"
                        :class="
                        prix.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                      <small v-if="prix.error != ''" class="text-danger">
                        {{ prix.error }}
                      </small>
                    </div>
                    <div class="col-lg-12">
                      <label>Photo_avatar</label>
                      <input
                        type="file"
                        ref="file"
                        @change="upload_image"
                        class="form-control"
                        :class="
                        upload_image.error != ''
                      ? 'form-control is-invalid move_input'
                      : 'form-control '"
                      />
                      <small v-if="upload_image.error != ''" class="text-danger">
                        {{ upload_image.error }}
                      </small>
                    </div>
                    <div class="text-center mt-2">
                      <button type="submit" class="btn btn-outline-success">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 d-none d-lg-block">
                <Vue3Lottie
                  data-aos="zoom-out"
                  data-aos-delay="50"
                  animationLink="https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                  style="width: 100%; height: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../../services/service.js";

export default {
  name: "addProduct",

  data() {
    return {
      Name_Product: {
        value: "",
        error: "",
      },
      color: {
        value: "",
        error: "",
      },
      type: {
        value: "",
        error: "",
      },
      prix: {
        value: 0,
        error: "",
      },
      file: {
        value: "",
        error: "",
      },
      Quantity: {
        value: 0,
        error: "",
      },
      message_error: "",
    };
  },
  props: {
    selected: String,
  },
  methods: {
    upload_image() {
      this.validate("file");
      this.file.value = this.$refs.file.files[0];
    },

    Add_Product() {
      service
        .createProduct({
          Name_Product: this.Name_Product.value,
          color: this.color.value,
          type: this.type.value,
          prix: this.prix.value,
          file: this.file.value,
          Quantity: this.Quantity.value,
        })
        .then(() => {
          this.prix.value = "";
          this.type.value = 0;
          this.color.value = "";
          this.Quantity.value = 0;
          this.Name_Product.value = "";
          this.$emit("choice", "choice");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Onsubmit() {
      let valid =
      this.validate("type") &&
      this.validate("name") &&
        this.validate("quantity") &&
        this.validate("prix") &&
        this.validate("file") &&
        this.validate("color");

      if (valid) {
        this.Add_Product();
      }
    },
    validate(input) {
      if (input == "name") {
        if (this.Name_Product.value == "") {
          this.Name_Product.error = "name required";
        } else if (this.Name_Product.value.length < 5) {
          this.Name_Product.error = "name must be greater than 5 characters";
        } else {
          this.Name_Product.error = "";
          return true;
        }
      } else if (input == "color") {
        if (this.color.value == "") {
          this.color.error = "color required";
        } else if (this.color.length < 5) {
          this.color.error = "color must be greater than 5 characters";
        } else {
          this.color.error = "";
          return true;
        }
      } else if (input == "type") {
        if (this.type.value == "") {
          this.type.error = "type required";
        } else if (this.type.length < 5) {
          this.type.error = "type must be greater than 5 characters";
        } else {
          this.type.error = "";
          return true;
        }
      } else if (input == "prix") {
        if (this.prix.value == "") {
          this.prix.error = "prix required";
        } else if (this.prix.value <= 0) {
          this.prix.error = "prix must be greater than 0";
        } else {
          this.prix.error = "";
          return true;
        }
      } else if (input == "file") {
        const regex = new RegExp("image/");
        if (this.file.value == "") {
          this.file.error = "file required";
        } else if (!regex.test(this.file.value.type)) {
          this.file.error = "file must image";
        } else {
          this.file.error = "";
          return true;
        }
      } else if (input == "quantity") {
        if (this.Quantity.value == "") {
          this.Quantity.error = "Quantity required";
        } else if (this.Quantity.value <= 0) {
          this.Quantity.error = "Quantity must be greater than 0";
        } else {
          this.Quantity.error = "";
          return true;
        }
      }
    },
  },
};
</script>

<style>
.move_input {
  animation: animate 0.5s;
}

@keyframes animate {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>