<template>
  <AsiliNavBar/>
  <v-app>
    <v-container>
      <div class="text-center">
        <h1>INSCRIPTION</h1>
      </div>
      <v-form @submit.prevent="registration">
        <h2>S'inscrire</h2>
        <v-text-field
          label="Nom"
          v-model="instituteName"
          :rules="usernameRules"
          placeholder="nom"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          :rules="emailRules"
          placeholder="email"
        ></v-text-field>
        <v-select
          label="Type Utilisateur"
          v-model="typeCompte"
          :items="typeComptes"
          :rules="statusRules"
          placeholder="Vendeur ou Acheteur"
        ></v-select>
        <v-text-field
          label="Mot de passe"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          placeholder="mot de passe"
        ></v-text-field>
        <v-text-field
          label="Confirmer mot de passe"
          v-model="confirmPassword"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassword ? 'text' : 'password'"
          @click:append="showConfirmPassword = !showConfirmPassword"
          placeholder="mot de passe"
        ></v-text-field>
        <v-btn type="submit">S'inscrire</v-btn>
      </v-form>
      <p>
        En créant un compte, vous acceptez les
        <a href="#">Conditions d'utilisation</a>
        et la
        <a href="#">Politique de confidentialité</a>.
      </p>

<container>
   <div v-if="isVendeur">
  <DashboardVendeur 
    :shopData="shopData"
    :menuItems="menuItems"
    :stats="stats"
    :recentOrders="recentOrders"
    :quickActions="quickActions"
  />
  </div>
</container>
     
    </v-container>

  
  </v-app>
  


</template>

<script>
import AsiliNavBar from '@/components/asiliNavBar.vue';
import DashboardVendeur from '@/components/DashboardVendeur.vue';
import axios from 'axios';
import { shopData, menuItems, stats, recentOrders, quickActions } from '/src/data/datavendeur'; // Chemin vers le fichier de données 


export default {
  components: {
    AsiliNavBar,
    DashboardVendeur,
  },
  data() {
    return {
      instituteName: '',
      email: '',
      typeCompte: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      newUser: {},
      typeComptes: ['Acheteur', 'Vendeur'],
      usernameRules: [
        (v) => !!v || 'Nom est requis',
      ],
      emailRules: [
        (v) => !!v || 'Email est requis',
        (v) => /.+@.+\..+/.test(v) || 'E-mail doit être valide',
      ],
      statusRules: [
        (v) => !!v || 'Statut est requis',
      ],
      isVendeur: false,
      vendeurData: {},
    };
  },
  methods: {
    async registration() {
      const data = {
        instituteName: this.instituteName,
        email: this.email,
        typeCompte: this.typeCompte,
        password: this.password,
      };

      try {
        console.log("Utilisateur à enregistrer :", data);
        this.$router.push({
             name: 'DashboardVendeur', params: { id: 2 } 
  });


    /*    const response = await axios.post("http://localhost:3001/users/register", data);
        console.log("Réponse de l'enregistrement :", response.data);

        this.newUser = response.data;
        console.log("Nouvel utilisateur enregistré:", this.newUser);
        console.log("ID du vendeur reçu :", this.newUser.TenantId);
*/
    /*    if (this.newUser.typeCompte === 'Vendeur') {
          this.$router.push({
             name: 'DashboardVendeur', params: { id: this.newUser.TenantId } 
  });*/


    /* //    this.isVendeur = true;
  // recuperer vendeur  depuis .env 
       //    this.vendeurData = process.env.vue_app_vendeurData
         console.log("Vendeur data:", shopData);
         console.log("isVendeur :", this.isVendeur);
*/
     /*   } else {
         // this.redirectUser(this.newUser.typeCompte);
          this.$router.push('/acheteur-dashboard');

        }*/

      } catch (error) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
      }
    },
    redirectUser(typeCompte) {
      if (typeCompte === 'Acheteur') {
        this.$router.push('/acheteur-dashboard');
      }
    }
  }
}
</script>

<style scoped>
/* Ajoutez votre style personnalisé ici */
</style>
