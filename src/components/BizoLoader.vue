
<template>
    <div v-if="loading" >
        <div class="pre_loader">  
            <p class="content_preloader">
               <span>B</span>
               <span>I</span>
               <span>Z</span>
               <span>O</span>
            </p>
        </div>
    </div>
    </template>
    
<script>
    export default{
        name:'bizo-vue',
        mounted(){
            setTimeout(()=>this.loading=false,1);
        },
        data(){
            return{
                loading:true
            }
        }
    }
</script>

    <style scoped>
    .pre_loader{
    background-color:  #5995fd;
    height: 100vh;
    z-index: 99999;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    }
    
    .content_preloader span{
    color: rgb(242, 242, 242);
    font-size: 4rem;
    height: fit-content;
    font-weight: 500;
    animation: enter-bizo 1s linear forwards;
    opacity: 0;
    padding: 0;
    margin: 0 1.5rem;
    }
    
    @keyframes enter-bizo {
     0%{
         opacity: 0;
         transform: rotateX(100deg);
         filter: blur(4px);
     }
    
     100%{
         opacity: 1;
         transform: rotateX(0);
         filter: blur(0);
     }
    }
    
    .content_preloader span:nth-child(1){
     animation-delay: .8s;
    }
    
    .content_preloader span:nth-child(2){
     animation-delay: 2s;
    }
    
    .content_preloader span:nth-child(3){
     animation-delay: 3s;
    }
    
    .content_preloader span:nth-child(4){
     animation-delay: 4s;
    }
    
    .content_preloader span:nth-child(5){
     animation-delay: 5s;
    }
    
    @media screen and (max-width:768px) {
     .content_preloader span{
         font-size: 1rem;
      }
    }
    
    
    </style>