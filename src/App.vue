<template>

  <div id="app">
      <BizoLoaderVue></BizoLoaderVue>
      <NavbarVue></NavbarVue>
      <router-view/>
  </div>
</template>

<script>
 import BizoLoaderVue from "./components/BizoLoader.vue";
 import NavbarVue from "./components/Navbar.vue";

 import AOS from "aos";
  export default{
    data(){
      return{

      }
    },
    methods:{

    },
    mounted(){
    
      AOS.init();
    },
    components:{
      NavbarVue,BizoLoaderVue
    }
  }

</script>

<style>

#app{
  background-color: whitesmoke;
}

</style>
