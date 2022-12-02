<template>
    <div>
        <article class="mt-3 py-5 container" id="service" data-aos="fade-up">
            <div class="titre_service text-center">
                 <p class="h5">
                     What We Offer
                 </p>
                 <h2 >
                     Our Services
                 </h2>
            </div>
 
            <div class="row mt-5 py-5  justify-content-center">
                <div v-for="service in all_service" :key="service.id" class="col-md-4 mb-2" data-aos="fade-right" :data-aos-delay="service.number">
                     <div  :class="`box ${service.classpropre} text-center`">
                              <p class="icon">
                                  <span class="fa-stack fa-2x">
                                      <i><font-awesome-icon :icon="`fa-solid fa-${service.icon}`"/></i>
                                  </span>
                                 </p>
                              <h3  class="titre_box">{{service.nom}}</h3>
                              <p class="description">{{service.description}}</p>
                     </div>
                </div>
            </div>
       </article>
    </div>
</template>

<script>
export default{
    name:'service',
    data(){
        return{
            all_service:[
                {number:'400',classpropre:'blue',icon:'comment',nom:'Contact Other',description:'You can talk with any human in the world with Us '},
                {number:'500',classpropre:'orange',icon:'certificate',nom:'Take Certificat',description:'You wanna certficat in pho,js,html and css'},
                {number:'600',classpropre:'green',icon:'shop',nom:'Shop ',description:'check our SHop'},
                {number:'700',classpropre:'red',icon:'calculator',nom:'Average',description:'calculating your average'},
            ]
        }
    }
    
}
</script>