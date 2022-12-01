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
.button{
  display: inline-block;
  padding:10px 10px;
  border:.2rem solid #ff2d75;
  color:#ff2d75;
  cursor: pointer;
  font-size:15px;
  border-radius: .5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin-top: 1rem;
 }

.button::before{
  content: '';
  position: absolute;
  top:0; right: 0;
  width:0%;
  height:100%;
  background:#ff2d75;
  transition: .3s linear;
  z-index: -1;
}

.button:hover::before{
  width:100%;
  left: 0;
}

.button:hover{
  color:#fff;
}


</style>
