<template>
    <div class="mt-5 py-5">
         <div class="mt-5 py-2">
              {{store}}
         </div>
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
              
          }
     },
     methods: {
          logout(){
               this.store.logout();
          }
     },
}

</script>