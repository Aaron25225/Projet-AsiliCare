<template>
    <v-container fluid>
      <v-row>
        <!-- Sidebar -->
        <v-col cols="3">
          <v-card class="pa-4">
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
  
            <v-list dense>
              <v-list-item v-for="item in menuItems" :key="item.text" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
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
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    props: {
      shopData: {
        type: Object,
        required: true
      },
      menuItems: {
        type: Array,
        required: true
      },
      stats: {
        type: Array,
        required: true
      },
      recentOrders: {
        type: Array,
        required: true
      },
      quickActions: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        orderHeaders: [
          { text: 'N° Commande', value: 'orderNumber' },
          { text: 'Client', value: 'client' },
          { text: 'Statut', value: 'status' },
          { text: 'Total', value: 'total' }
        ]
      };
    }
  }

 

  </script>
  
  <style scoped>
  .v-card {
    border-radius: 8px;
  }
  </style>
  