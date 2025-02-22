<template>
  <v-container fluid>
    <v-container>
      <v-app-bar app color="primary" dark>
      <v-toolbar-title>Tableau de Bord Vendeur</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar size="40">
              <v-img :src="shopData.shopLogo"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ shopData.sellerName }}</v-list-item-title>
              <v-list-item-subtitle>{{ shopData.shopName }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Déconnexion</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    </v-container>
    
    
    <v-spacer></v-spacer>   
    <v-container fluid>
    <v-row>
      <!-- Sidebar -->
        <v-col cols="3" class="sidebar">
          <v-card class="pa-8 sidebar-card">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="shopData.shopLogo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ shopData.shopName }}</v-list-item-title>
                  <v-list-item-subtitle>{{ shopData.sellerName }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list >
              <v-list-item   v-for="item in menuItems" :key="item.text" link>
               
                  <v-icon>{{ item.icon }}</v-icon>
                  <v-list-title>{{ item.text }}</v-list-title>
                
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

      <!-- Main Content -->
      <v-col cols="9">
        <v-card class="pa-4">
          <v-card-title>Bienvenue, {{ shopData.sellerName }} !</v-card-title>
          <v-card-subtitle>Gérez votre boutique et suivez vos performances.</v-card-subtitle>

          <v-row>
            <v-col v-for="stat in stats" :key="stat.title" cols="12" md="3">
              <v-card class="pa-4" outlined>
                <v-card-title>{{ stat.title }}</v-card-title>
                <v-card-text>{{ stat.value }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Commandes Récentes -->
          <v-card class="mt-4">
            <v-card-title>Commandes Récentes</v-card-title>
            <v-data-table :headers="orderHeaders" :items="recentOrders" class="elevation-1"></v-data-table>
          </v-card>

          <!-- Actions Rapides -->
          <v-row class="mt-4">
            <v-col v-for="action in quickActions" :key="action.text" cols="12" md="4">
              <v-btn color="primary" block @click="action.onClick">{{ action.text }}</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-container>
</template>

<script>
import { shopData, menuItems, stats, recentOrders, quickActions } from '@/data/datavendeur';
import { ca, id } from 'vuetify/locale';

export default {
  name: 'DashboardVendeur',
  data() {
    return {
      props:["id"],
      shopData: {
  shopLogo: '/src/assets/logo.png',
  shopName: 'Ma Boutique',
  sellerName: 'Jean Dupont'
},
     menuItems: [{ icon: 'mdi-home', text: 'Accueil' },
  { icon: 'mdi-cart', text: 'Produits' },
  { icon: 'mdi-chart-line', text: 'Rapports' },
  { icon: 'mdi-account', text: 'Profil' }],
      stats: [{ title: 'Ventes Totales', value: '' },
  { title: 'Clients', value: '' },
  { title: 'Produits', value: '' },
  { title: 'Commandes', value: '' }],
      recentOrders: [],
      quickActions: [{ text: 'Ajouter un Produit', onClick: () => console.log('Ajout de produit') },
  { text: 'Gérer les Commandes', onClick: () => console.log('Gestion des commandes') },
  { text: 'Voir les Rapports', onClick: () => console.log('Voir les rapports') }],
      orderHeaders: [
        { title: 'N° Commande', value: 'orderNumber' },
        { title: 'Client', value: 'client' },
        { title: 'Statut', value: 'status' },
        { title: 'Total', value: 'total' }
      ]
    };
  },

  methods: {
   // Recuperer les informations de la boutique en fonction de l'utilisateur a partie de son id tenant
   fecthUserVendeurData() {
    console.log('ID du vendeur reçu :', this.id);
   try {
    // const response = axios.get(`http://localhost:3001/users/${this.id}`);
     console.log('Données de la boutique reçues:', response.data);
     this.shopData = response.data;
     console.log('Données de la boutique reçues:', this.shopData);
   }catch (error) {
     console.error('Erreur lors de la récupération des données de la boutique:', error);
   }
   } 
  },
  mounted() {
    console.log('ID du vendeur reçu :', this.id);
    fecthUserVendeurData();   
  },
  methods: {
  /*  loadDashboardData() {
      // Récupérer les données passées via le routeur
      const shopData = this.$route.query.shopData || '';
      const menuItems = this.$route.query.menuItems || '';
      const stats = this.$route.query.stats || '';  
      const recentOrders = this.$route.query.recentOrders || '';
      const quickActions = this.$route.query.quickActions || '';
      console.log('Données récupérées du routeur:', { shopData, menuItems, stats, recentOrders, quickActions,  });
*/
      // Charger dynamiquement les données de la boutique en fonction de l'utilisateur
    /*  this.shopData = {
        shopLogo: shopData.shopLogo || 'https://via.placeholder.com/100',
        shopName: shopData.shopName || 'Nom de la Boutique',
        sellerName: name || 'Vendeur inconnu'
      };*/

    /*  this.menuItems = menuItems;
      this.stats = stats;
      this.recentOrders = recentOrders;
      this.quickActions = quickActions;
    }*/
  }
};
</script>

<style scoped>
.sidebar-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.v-card {
  border-radius: 8px;
}
</style>
