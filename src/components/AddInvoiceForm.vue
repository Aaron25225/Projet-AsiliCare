<template>
    <v-form ref="form"  class="modal"  v-model="formValid" max-width="600px" @submit.prevent="submitInvoice">

    <v-card>
      <v-card-title>
        <h3>Créer une nouvelle facture</h3>
        <v-spacer />
        
      </v-card-title>
  
      <v-card-text>
        <!-- Informations générales -->
        <h4>Informations client</h4>
        <v-divider class="my-4" />

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="invoice.numeroFacture"
              label="Numéro de Facture"
              outlined
              :rules="[rules.required]"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="invoice.type"
              label="Type de Facture"
              :items="typeOptions"
              item-title="type"
              item-value="id"
              outlined
              :rules="[rules.required]"
              required
              
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="invoice.clientName"
              label="Nom du Client"
              outlined
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="invoice.clientIfu"
              label="IFU du Client"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="invoice.clientContact"
              label="Contact du Client"
              outlined
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="invoice.clientAddress"
              label="Adresse du Client"
              outlined
            />
          </v-col>
        </v-row>

        <v-divider class="my-4" />  
        <!-- Articles -->
        <h4>Articles</h4>
        <v-row>
          <v-col cols="4">
    <v-select
      :items="articlesList"
      v-model="selectedArticle"
      item-title="description" 
      return-object
      label="Choisir un article"
      @update:model-value="addArticle "
     
    >
   
    </v-select>


  </v-col>















    <!-- Bouton pour ajouter un nouvel d'article -->
 
  <v-col cols="5">
    <v-btn color="primary" @click="toggleAddArticleSection"> <v-icon left>mdi-plus</v-icon> Ajouter un nouvel article
    </v-btn>

  </v-col>
        </v-row>



<!-- Section dynamique pour ajouter un article -->
<v-expand-transition >
  <v-form  v-model="formValid2" @submit.prevent="submitArticle" >

          <v-card v-if="showAddArticle"  class="mt-4 pa-4">
        <v-cardtitle>
          <h4>Ajouter un nouvel article</h4>
        </v-cardtitle>
        <v-row>
          <v-col cols="2">
        <v-text-field
          v-model="newArticle.description"
          label="Designation"
          :rules="[rules.required]"
          required
        ></v-text-field>
        </v-col>
        <v-col cols="2">
        <v-text-field
          v-model="newArticle.prix"
          label="Prix "
          type="number"
          :rules="[rules.required]"
          required
        ></v-text-field>
        </v-col>
        <v-col cols="2">
        <v-select
          v-model="newArticle.taxGroup"
          :items="['A','B','C','D','E','F'] "
          label="Taxe "
          :rules="[rules.required]"
          required
        ></v-select>
        </v-col>
        <v-col cols="2">
        <v-text-field
          v-model="newArticle.taxSpecific"
         
          label="T S"
          type="number"
          
        ></v-text-field>
        </v-col>
        <v-col cols="2">
        <v-btn type="submit"  color="primary" class="mt-3">
          Envoyer
        </v-btn>
        </v-col>
        <v-col cols="2">
        <v-btn @click="toggleAddArticleSection" color="red" class="mt-3">
          Annuler
        </v-btn>
        </v-col>
      </v-row>
      </v-card>
  </v-form>

    </v-expand-transition>











<v-row v-for="(article, index) in selectedArticles" :key="index">
  <!-- Article  sélectionner u  -->
 <v-col cols="4">
    <v-text-field
      v-model="article.description"
      label="Article"
      outlined
      readonly
    />
  </v-col>

  <!-- Quantité -->
  <v-col cols="2">
    <v-text-field
      v-model="article.quantite"
      label="Quantité"
      outlined
      type="number"
      required
      @input="updateQuantity(article, article.quantite)"
    />
  </v-col>

  <!-- Prix unitaire (readonly car lié à l'article sélectionné) -->
  <v-col cols="2">
    <v-text-field
      v-model="article.prix "
      label="Prix Unitaire"
      outlined
      readonly
    />
  </v-col>

  <!-- Sous-total (calculé automatiquement) -->
  <v-col cols="2">
    <v-text-field
      v-model="article.sousTotal"
      label="Sous-total"
      outlined
      readonly
    />
  </v-col>

  <!-- Bouton pour supprimer une ligne -->
  <v-col cols="2">
    <v-btn icon @click="removeArticle(index)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-col>
</v-row>

   <!-- Affichage du total -->
   <v-divider class="my-4" />
      <h4>Total de la Facture</h4>
      <v-row>
        <v-col cols="4">
          <v-text-field
       v-model="Total"      
      label="Total"
            outlined
            readonly
          />
        </v-col>
      </v-row>





  
        <!-- Paiement -->
        <v-divider class="my-4" />
        <v-select
          v-model="invoice.paiementTypeId"
          :items="paiementOptions"
          item-title="type"
          item-value="id"
          :rules="[rules.required]"
          required
          label="Mode de Paiement"
          outlined
        />
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="blue" type="submit">Créer</v-btn>
        <v-btn color="red" @click="$emit('close')">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
  </template>
  <script>
  import axios from "axios";
  import addItemsForm from "./addItemsForm.vue";
 
import { id } from "vuetify/locale";
import { errorMessages } from "vue/compiler-sfc";
  export default {
    components: {
    
  },
    data() {
      return {
        formValid: false,
        formValid2: false,
        Total: '',
        articlesList: [],
        selectedArticle: null,
        selectedArticles: [],
        typeOptions: [
          { id: 'FV', type: 'FACTURE DE VENTE' },
          { id: 'EV', type: 'FACTURE DE VENTE A LEXPORTATION' },
        ],
        invoiceCreated: [],
       
        invoice: {
          numeroFacture: '',
         type: '',
          clientName: '',
          clientIfu: '',
          clientContact: '',
          clientAddress: '',
          paiementTypeId: '',
          lignes: [
            {
              id: '',
              description: '',
              quantite: '',
              prix: '',
              sousTotal: '',
              taxGroup: '',
              taxSpecific: '',
            },
          ],
         // total: ,
        },
        //showAddArticleModal: false,
        showAddArticle: false,
        newArticle: {
          description: '',
          prix: 0,
          taxGroup: '',
          taxSpecific: ''
          
        },
        rules: {
        required: (value) => !!value || 'Ce champ est requis',
        number: (value) => !isNaN(value) || 'Doit être un nombre valide',
      },
        paiementOptions: [ ],
       
      };
    },
    methods: {
        // Charger les articles depuis la base
        //@change="updateArticleDetails(index)"
    async fetchArticles() {
      try {
        const response = await axios.get("http://localhost:3001/items");
        console.log("Articles sonttttttt :", response.data);

    this.articlesList = response.data;
    console.log("Articlessssss list:", this.articlesList);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    },
 async fecthPaiementTypes() {
    try {
      const response = await axios.get("http://localhost:3001/paiementtypes");
      console.log("paiementTypes sonttttttt :", response.data);
      this.paiementOptions = response.data;
    } catch (error) {
      console.error("Erreur lors de la sélection des paiementTypes :", error);
    }
  },

    addArticle(article) {
      console.log("Ajout de l'articleeeeeeeetes!:", article);
    // Vérifiez si l'article est déjà dans selectedArticles
    const existingArticle = this.selectedArticles.find(a => a.id === article.id);
    if (!existingArticle) {
      this.selectedArticles.push({ ...article, quantite: 1, sousTotal: article.prix });
      this.calculateTotal();
      this.calculateTotal();
    } else {
      console.log("L'article est déjà dans la liste.Veuillez ajouter une quantité.");
      alert("L'article est déjà dans la liste.Veuillez ajouter une quantité.");
    }
  },


  updateQuantity(article, quantite) {
    console.log("Mise à jour de la quantité:", article, quantite);
    // Trouvez l'article sélectionné et mettez à jour ses données
    const selected = this.selectedArticles.find(a => a.id === article.id);
    if (selected) {
      selected.quantite = quantite;
      selected.sousTotal = quantite * selected.prix;
      this.calculateTotal();
      this.calculateTotal();
    }
    console.log("selectedArticles:", this.selectedArticles);
  },


  calculateTotal() {
    // Calculez le total général
    this.total = this.selectedArticles.reduce((sum, article) => sum + article.sousTotal, 0);
    this.Total = this.total;
    console.log("Total:", this.total);
  },

  removeArticle(index) {
        this.selectedArticles.splice(index, 1);
        this.calculateTotal();
        console.log("Suppression de l'article", index);
      },












  

  /* addArticleLine() {
    console.log("Ajout d'une ligne d'article");
        this.selectedArticles.push({
          id: '',
          descriptionArti: '',
          quantite: '',
          prixArti: '',
          sousTotal: '',
          taxGroupArti: '',
        });
      },

   */


     
  // Méthode pour formater l'objet invoice
  formatInvoice() {
    // Construire les lignes de facture à partir de selectedArticles
    const lignes = this.selectedArticles.map(article => ({
      articleServiceId: article.id, // Identifiant de l'article
      descriptionArti: article.description, // Description de l'article
      quantite: Number(article.quantite), // Quantité
      prixArti: Number(article.prix), // Prix unitaire
      sousTotal: Number(article.sousTotal), // Sous-total
      taxGroupArti: article.taxGroup || null, // Groupe de taxe (si applicable)
      taxSpecificArti: article.taxSpecific || null, // Taxe spécifique (si applicable)
    }));

    // Créer l'objet final
    const formattedInvoice = {
      // Numéro de facture
      date: this.invoice.date, // Date de la facture
      facture: {
        numeroFacture:Number(this.invoice.numeroFacture) || 0,
        clientName: this.invoice.clientName, // Nom du client
        clientIfu: this.invoice.clientIfu, // IFU du client
        clientContact: this.invoice.clientContact, // Contact du client
        clientAddress: this.invoice.clientAddress, // Adresse du client
        operateurName: "jerubaal",
        ifuEmetteur: "3201401287116",
        paiementTypeId: this.invoice.paiementTypeId || "6482940f-b5f1-4256-ba28-d8ef71378aba", // Mode de paiement
        type: this.invoice.type,
        total: Number(this.total) , // Total général de la facture
      },
      lignes: lignes, // Lignes de facture
      
    };

    console.log("Facture formatée :", formattedInvoice);
    return formattedInvoice;
  },


  async submitInvoice() {
    if(this.formValid){
      try {
      const formattedInvoice = this.formatInvoice();
      console.log("Facture formatée :", formattedInvoice);
      const response = await axios.post('http://localhost:3001/invoices/fv', formattedInvoice, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
       this.invoiceCreated.push(response.data);
      console.log("Facture enregistrée avec succès :", response.data);
      this.$emit('invoice-submitted', this.invoiceCreated);
      //viderl'objet invoice
      this.invoice = {
        date: '',
        numeroFacture: '',
        clientName: '',
        clientIfu: '',
        clientContact: '',
        clientAddress: '',
        paiementTypeId: '',
        type: '',
        total: '',
      };

      this.selectedArticles = [];
      this.total = 0;

      this.$refs.form.reset();

     // this.$emit('close'); // Fermer le modal après soumission
    } catch (error) {
      alert(error.response.data.message);
      console.error("Erreur lors de l'enregistrement de la facture :", error);
    }
    } else {
      alert("Veuillez remplir tous les champs obligatoires");
    }
    
  },

// fermer le modal de facture
 

  resetForm() {
    this.$refs.form.reset(); // Réinitialise la validation du formulaire
    this.invoice = {
      numeroFacture: '',
      type: '',
      clientName: '',
      clientIfu: '',
      clientContact: '',
      clientAddress: '',
      paiementTypeId: '',
      lignes: [
        {
          id: '',
          description: '',
          quantite: '',
          prix: '',
          sousTotal: '',
          taxGroup: '',
          taxSpecific: '',
        },
      ],
    };
    this.selectedArticles = [];
    this.Total = '';
  },
  closeModal() {
    this.resetForm(); // Réinitialise le formulaire
    this.$emit('close'); // Ferme le modal
  },

 /* openAddArticleModal() {
      this.showAddArticleModal = true;
    },
    closeAddArticleModal() {
      this.showAddArticleModal = false;
    },
    submitNewArticle(newArticle) {
      this.articlesList.push(newArticle);
      this.selectedArticles.push({ ...newArticle, quantite: 1, sousTotal: newArticle.prix });
      this.calculateTotal();
      this.closeAddArticleModal();
    },
*/

      //gestion de l'ajout d'un nouvel article...........................................................
    toggleAddArticleSection() {
      this.showAddArticle = !this.showAddArticle;
    },

    async submitArticle() {
      if (this.formValid2) {
            //  const newArticlee = this.newArticle; 
      console.log('Nouvel article soumis:', this.newArticle);
      this.newArticle.prix = Number(this.newArticle.prix);
      //this.newArticle.originalePrice = Number(this.newArticle.originalePrice);
     
      this.newArticle.taxSpecific = Number(this.newArticle.taxSpecific);
       try {
         const response = await axios.post('http://localhost:3001/items', this.newArticle, {
           headers: {
             'Content-Type': 'application/json',
           },
         });
         console.log('Article ajouté avec succès:', response.data);
         this.articlesList.push(response.data);
         this.fetchArticles();
         this.article = {
         
          description: '',
          prix: '',
          taxGroup: '',
          taxSpecific: '',
        
          // Ajouter d'autres champs si nécessaires
        };
       // this.$refs.form.reset();
       alert('Article ajouté avec succes');
         this.showAddArticle = false;
       } catch (error) {
        alert("Erreur lors de l'ajout de l'article")
        this.showAddArticle = false;
         console.error('Erreur lors de l\'envoi du nouvel article:', error);
       }
      } else {
        alert("Veuillez remplir tous les champs obligatoires");
      }

     },

    },

   
    
   
    mounted() {
    this.fetchArticles(); // Charger les articles au chargement du composant
    this.fecthPaiementTypes();
  }
  };
  </script>
  