<template>
  <asiliNavBar/>
  
    <v-container>
      <div class="text-center mb-4">
        <h1>CONNEXION VENDEUR</h1>
      </div>
      
    </v-container>



 
</template>

<script>
import asiliNavBar from '@/components/asiliNavBar.vue';
export default {
  components: {
    asiliNavBar
  }
}
</script>

<style scoped>
.v-btn[disabled] {
  opacity: 0.5; /* Rendre le bouton plus transparent */
  pointer-events: none; /* Empêcher les clics (par défaut avec disabled) */
}

</style>