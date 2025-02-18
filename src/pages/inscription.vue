<template>
<AsiliNavBar/>
  <v-app> 
    
    <v-container>
     <div class="text-center">
      <h1>INSCRIPTION</h1>
     </div>
     



    </v-container>
  </v-app>
  </template>
  
  <script>
   
import AsiliNavBar from '@/components/asiliNavBar.vue';
   
export default {
  components: {
    AsiliNavBar
  }
}
  
  </script>
  
  <style scoped>
  .custom-width-research-bar {
  width: 100px; /* Changez la valeur selon vos besoins */
  }
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  .btn-ajout{
    margin-left: 100px;
  }
  </style>
  