

<template>
    
  <v-form ref="form"  class="modal"  v-model="formValid" max-width="600px" @submit.prevent="submitForm">
    <v-container>
      <h1>Enregistrer un Article</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Code"
            v-model=article.code
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Description"
            v-model=article.description
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Prix"
            v-model= article.prix
            type="number"
            :rules="[rules.required, rules.number]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
    label="Groupe de Taxation"
    v-model="article.taxGroup"
    :items="['A', 'B', 'C', 'D','E','F']"
    :rules="[rules.required]"
    required
  ></v-select>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Prix Original"
            v-model=article.originalePrice
            type="number"

            
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Taxe Spécifique"
            v-model=article.taxSpecific
            type="number"
            
          ></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Modificatiopn de Prix"
            v-model=article.priceModification
            
           
            
          ></v-text-field>
        </v-col>
       
      </v-row>
      <!-- Ajouter d'autres champs ici selon les besoins -->
      <v-btn color="primary" type="submit">Enregistrer</v-btn>
    </v-container>
  </v-form>

</template>

<script>
export default {

  methods: {
    submitForm() {
      if (this.formValid) {
        this.article.prix = Number(this.article.prix);
      this.article.originalePrice = Number(this.article.originalePrice);
     
      this.article.taxSpecific = Number(this.article.taxSpecific);
        // Émettre l'événement vers le parent avec les données de l'article
       console.log(this.article);
        this.$emit('article-submitted', this.article);
        // Réinitialiser le formulaire si besoin
        this.article = {
          code: '',
          description: '',
          prix: '',
          taxGroup: '',
          taxSpecific: '',
          originalePrice: '',
          priceModification: '',
          // Ajouter d'autres champs si nécessaires
        };
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style scoped>
/* Ajouter des styles si nécessaires */
.modal {
  background-color: #0c0b0b; /* Changez cette couleur selon vos besoins */
opacity: 1; /* Assurez-vous que l'opacité est complète */
}
</style>