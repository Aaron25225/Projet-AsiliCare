<template>
  <AsiliNavBar/>
  <v-app>
    <v-container>
      <div class="text-center">
        <h1>ASILI Care</h1>
      </div>
      <v-card class="mx-auto" max-width="400">
        <v-card-title>
          <h3>S'identifier</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Adresse e-mail ou numéro de téléphone"
              v-model="email"
              placeholder="exemple@email.com"
              required
            ></v-text-field>
            <v-text-field
              label="Mot de passe"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              placeholder="Mot de passe"
              required
            ></v-text-field>
            <v-btn @click="continueLogin">Continuer</v-btn>
          </v-form>
          <v-divider></v-divider>
          <p class="terms">
            En continuant, vous acceptez nos <a href="#">conditions d'utilisation</a> et notre 
            <a href="#">politique de confidentialité</a>.
          </p>
          <v-divider></v-divider>
          <p><a href="#">Mot de passe oublié ?</a></p>
          <v-divider></v-divider>
          <p>Vous produisez ? <a href="#">Créer une boutique</a></p>
          <v-btn class="create-account">Créer votre compte ASILI Care</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import asiliNavBar from '@/components/asiliNavBar.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    continueLogin() {
      // Fonctionnalité de connexion
      console.log("Email:", this.email);
      console.log("Mot de passe:", this.password);
    }
  }
};
</script>
<style scoped>
.v-btn[disabled] {
  opacity: 0.5; /* Rendre le bouton plus transparent */
  pointer-events: none; /* Empêcher les clics (par défaut avec disabled) */
}

</style>