<template>
  <div id="app">
      <BizoLoaderVue></BizoLoaderVue>
      <router-view v-slot="{ Component }">
        <transition name="fade"  mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script>
 import BizoLoaderVue from "./components/BizoLoader.vue";
 import 'animate.css';
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

<style scoped>

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
