<template>
  <div id="app">
    
        <BizoLoaderVue></BizoLoaderVue>
      <transition name="fade" mode="out-in">
         <router-view/>
      </transition>
  </div>
</template>

<script>
 import BizoLoaderVue from "./components/BizoLoader.vue";


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
      BizoLoaderVue
    }
  }

</script>

<style>

#app{
  overflow: hidden;
  width: 100vw;
}

.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
}

</style>
