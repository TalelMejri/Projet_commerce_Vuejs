<template>
       <div class="shop">
            
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