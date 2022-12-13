
<template>
    <div class="row">
        <div class="col-md-3 text-center py-3">
            <Vue3Lottie
            data-aos="zoom-out" data-aos-delay="50"
            animationLink="https://assets3.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json"
            style="width: 100%; height: 100%;"
     />
              </div>
                 <div class="col-md-6 py-4 text-center ">
                      <h1 class="text-uppercase text-success font-weight-bold">welcome {{name}}!</h1>
                           <p class="lead">Enjoy .</p> 
                       <p class="d-flex justify-content-center">
                        <Vue3Lottie
                        data-aos="zoom-out" data-aos-delay="50"
                        animationLink="https://assets9.lottiefiles.com/packages/lf20_iux6ajkg.json"
                        style="width: 100%; height: 100%;"
                 />

                       </p>
                        <p class="lead">You Can Starter in 3 seconds</p>
                </div>
                <div class="col-md-3 text-center py-3 ">
                    <Vue3Lottie
                    data-aos="zoom-out" data-aos-delay="50"
                    animationLink="https://assets3.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json"
                    style="width: 100%; height: 100%;"
             />
              </div> 
          </div>

</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
export default {
    name:'',
    components:{
        Vue3Lottie
    },
    props:{
        name:String
    }
}
</script>

<style scoped>
    img{
        width: 50%;
        height: 50%;
    }
    
</style>
