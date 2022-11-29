<template>
    <div>
        <header>
            <div  data-aos-offset="200"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in" class="container">
             <div class="landing-page py-5">
                    <div class="row py-5">
                            <div class="col-lg-6 py-5" >
                                <div class="py-4">
                                <div class="py-5 mt-5">
                                  <div class="intro_text text-center">
                                    <h1 >You Make the World a better Place </h1>
                                    <h2 >Just By being in it</h2>
                                        <h3 > Join Us </h3>
                                        <div class="py-4 d-flex  justify-content-center">
                                            <div class="mx-4">
                                              <a  href="./auth/login/ "><button  class="button">Sign In</button></a>
                                            </div>
                                           <div  class="">
                                             <a href="./auth/signup/"><button class="button">Sign Up</button></a>  
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
</div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
export default {
    components: {
        Vue3Lottie,
    },
}
</script>

<style>

header{
  height:100vh;
}

</style>