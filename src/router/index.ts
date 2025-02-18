import { createRouter, createWebHistory } from 'vue-router';

// Importation statique des composants pour chaque route
import HomePage from '@/pages/acceuil.vue';
import VendeursPage from '@/pages/vendeur.vue';
import AcheteursPage from '@/pages/acheteur.vue';
import InscriptionPage from '@/pages/inscription.vue';

// Définition des routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
 
  
  {
    path: '/vendeur',
    name: 'Vendeurs',
    component: VendeursPage
  },
  {
    path: '/acheteur',
    name: 'Acheteurs',
    component: AcheteursPage
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: InscriptionPage
  },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
