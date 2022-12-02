<template>
    <div class="mt-5 py-5">
     <button @click="test">tes</button>
         <div class="mt-5 py-2">
              {{store}}
         </div>
         {{message}}
         <button @click="logout">logout</button>
    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth.store';

export default {
     setup(){
          const store=useAuthStore();
          return {
               store
          }
     },
     data(){
          return{
               message:"talel 9a7ba",
          }
     },
     methods: {
          test(){
               console.log(this.store);
          },
          logout(){
               this.store.logout();
          }
     },
}
</script>