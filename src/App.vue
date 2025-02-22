<template>
  <v-app :theme="'light'">
    <div class="background">
      <v-main class="background">
      <router-view />
    </v-main> 
    </div>  
   
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
.background {
  background-image: url('@/assets/img1.png'); /* Chemin de l'image */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Plein écran */
}
</style>