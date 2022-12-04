<template>
    <div>
      <navbar></navbar>
        <header>
            <div  data-aos-offset="200"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-out" class="container">
             <div class="landing-page py-5">
              <div class="circle position-absolute">
                <span style="--i:11"></span>
                <span style="--i:12"></span>
                <span style="--i:24"></span>
                <span style="--i:10"></span>
                <span style="--i:24"></span>
                <!--<span style="--i:23"></span>
                <span style="--i:18"></span>
                <span style="--i:16"></span>
                <span style="--i:19"></span>
                <span style="--i:20"></span>
                <span style="--i:22"></span>-->
                <span style="--i:25"></span>
                <span style="--i:18"></span>
                <span style="--i:21"></span>
                <span style="--i:15"></span>
                <span style="--i:13"></span>
                <span style="--i:26"></span>
                <span style="--i:17"></span>
                <span style="--i:13"></span>
                <span style="--i:28"></span>
                <span style="--i:17"></span>
             </div>
                    <div class="row py-5">
                            <div class="col-lg-6 py-5" >
                                <div class="py-4">
                                <div class="py-5 mt-5">
                                  <div class="intro_text text-center">
                                    <h1 >You Make the World a better Place </h1>
                                    <h2 >Just By being in it </h2>
                                        <h3 > Join Us </h3>
                                        <div class="py-4 d-flex  justify-content-center">
                                            <div class="mx-4">
                                              <a  href="#"><router-link to="/login" > <button  class="button">Sign In</button></router-link></a>
                                            </div>
                                           <div  class="">
                                             <a href="#"> <router-link to="/signup" > <button class="button">Sign Up</button> </router-link></a>  
                                          </div> 
                                        </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                            <div class="col-lg-6 d-lg-block d-none text-center">
                                <Vue3Lottie
                                     data-aos="zoom-out" data-aos-delay="50"
                                     animationLink="https://assets8.lottiefiles.com/private_files/lf30_1Fy94C.json"
                                     style="width: 100%; height: 100%;"
                              />
                            </div>
                    </div>
            </div>
        </div>    
    </header>

    <service></service>
    <ourUsers></ourUsers>
    <faq></faq>
    <Know_us></Know_us>
    <contact_us></contact_us>
    <foooter></foooter>
</div>
</template>

<script>
import service from "@/components/home/service.vue";
import ourUsers from "@/components/home/ourusers.vue";
import navbar from "@/components/Navbar.vue";
import faq from "@/components/home/Faq.vue";
import contact_us from "@/components/home/contact_us.vue";
import Know_us from "@/components/home/know_us.vue";
import foooter from "@/components/home/footer_home.vue";
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
export default {
    components: {
        Vue3Lottie,service,ourUsers,faq,contact_us,Know_us,foooter,navbar
    },
}
</script>

<style>

header{
  height:100vh;
}

</style>
