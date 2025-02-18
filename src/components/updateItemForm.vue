<template>
   
        
          <v-form ref="form" class="modal " v-model="formValid"   max-width="600px"  @submit.prevent="submitForm">
           <h1>Modifier l'article</h1>
             <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Code"
                    v-model="editedArticle.code"
                    
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Description"
                    v-model="editedArticle.description"
                    :rules="[rules.required]"
                    
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Prix"
                    v-model="editedArticle.prix"
                    type="number"
                    :rules="[rules.required, rules.number]"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
    label="Groupe de Taxation"
    v-model="editedArticle.taxGroup"
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
                    v-model="editedArticle.originalPrice"
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Taxe Spécifique"
                    v-model="editedArticle.taxSpecific"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Modification de Prix"
                    v-model="editedArticle.priceModification"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>

<v-spacer></v-spacer>

 
    <v-btn color="blue darken-1" text @click="submitForm">Enregistrer</v-btn>

         
        
            </v-container>
             
          </v-form>
      
         
        
      

  </template>
  
  <script>
  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        dialog: false,
        formValid: false,
        editedArticle: { ...this.article },
        rules: {
          required: (value) => !!value || 'Ce champ est requis',
          number: (value) => !isNaN(value) || 'Doit être un nombre valide',
        },
      };
    },
    methods: {
      closeDialog() {
        this.dialog = false;
        // Réinitialiser l'article modifié
        
 
        this.editedArticle = { ...this.article };
        
      },
      submitForm() {
        if (this.formValid) {
          this.editedArticle.prix = Number(this.editedArticle.prix);
          this.editedArticle.originalPrice = Number(this.editedArticle.originalPrice);
          this.editedArticle.taxSpecific = Number(this.editedArticle.taxSpecific);
          // Émettre l'événement vers le parent avec l'article modifié
          //console.log("Article modifié:", this.editedArticle);
          this.$emit('article-updated', this.editedArticle);
         
          this.closeDialog();
        //  this.$refs.form.reset();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajouter des styles si nécessaires */
 .modal {
    background-color: #080808; /* Changez cette couleur selon vos besoins */
opacity: 1; }/* Assurez-vous que l'opacité est complète */
  </style>
  