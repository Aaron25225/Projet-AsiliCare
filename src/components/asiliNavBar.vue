<template>
    <v-app-bar app color="white" flat>
      <!-- Logo et titre -->
      <v-app-bar-title>
        <v-img src="/src/assets/leaf.png" alt="ASILI care" contain height="40" width="40" class="mr-2"></v-img>
        <span class="font-weight-bold">ASILI care</span>
      </v-app-bar-title>
  
      <!-- Menu de navigation -->
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn text to="/">Accueil</v-btn>
     
      <v-btn text to="/vendeur">Espace vendeur</v-btn>
      <v-btn text to="/acheteur">Espace acheteur</v-btn>
   <!-- Bouton Communauté -->
      <v-btn color="green lighten-1" dark rounded to="/inscription">
        Inscription
      </v-btn>
      <v-spacer></v-spacer>
  
     
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'AsiliNavbar',
  };
  data: () => ({
      items: [
        { "title": 'Click Me' },
        { "title": 'Click Me' },
        { "title": 'Click Me' },
        { "title": 'Click Me 2' },
      ],
    })
  </script>
  
  <style scoped>
  .v-btn {
    text-transform: none;
    font-weight: 400;
    color: #666;
  }
  
  .v-btn:hover {
    color: #000;
  }
  </style>
  