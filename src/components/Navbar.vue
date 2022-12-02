<template>
    <div>
        <nav :class="{change_color: scrollPosition > 50}" class="mb-5 navbar navbar-expand-lg text-uppercase fixed-top ">
            <div class="container position-relative">
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
                <a class="navbar-brand" href="##"><img src="../assets/logo_final.png" width="50px" height="50px" alt=""> </a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary  text-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i style="color:#4fc3dc" class="fas fa-bars"></i>
                </button>
                <div  class="collapse navbar-collapse justify-content-end mx-5" id="navbarResponsive">
                    <ul class="navbar-nav text-center p-2">

                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link link_navbar text-center px-0 px-lg-3 rounded" href="#"><router-link to="/">Home</router-link> </a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link link_navbar text-center px-0 px-lg-3 rounded" href="#"><router-link to="/shop">Shop</router-link></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link link_navbar text-center px-0 px-lg-3 rounded" href="#"><router-link to="/Calculer">Calculer Moyenne</router-link></a></li>

                    </ul>
                  
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default{
        name:'navbar-vue',
        data(){
            return{
                scrollPosition: null
            }
        },
        methods:{
          updateScroll() {
              this.scrollPosition = window.scrollY
          }
        },
        mounted() {
             window.addEventListener('scroll', this.updateScroll);
        }
    }
</script>

<style scoped>

 
    nav a.router-link-exact-active {
     color: #ff2d75 !important;
     font-weight: 600;
     border-bottom: 1px solid  #5995fd;;
    }
  .change_color {
    background: #fff;
    padding: 10px;
    box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
    transition: 0.5s;
    }
    
  
</style>