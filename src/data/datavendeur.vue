<template>

</template>

<script>

    const vue_app_vendeurData = {
    id: 1,
    nom: 'Pharmacie Naturelle',
    email: 'contact@pharmanature.com',
    telephone: '+229 90 00 00 00',
    adresse: 'Cotonou, Bénin',
    produits: [
      {
        id: 101,
        nom: 'Huile essentielle de menthe poivrée',
        categorie: 'Huiles essentielles',
        prix: 5000,
        stock: 150,
        description: 'Huile pure pour le soulagement des douleurs musculaires.',
        image: 'https://example.com/images/menthe_poivree.jpg'
      },
      {
        id: 102,
        nom: 'Thé de moringa',
        categorie: 'Tisanes',
        prix: 3000,
        stock: 200,
        description: 'Riche en antioxydants et vitamines.',
        image: 'https://example.com/images/the_moringa.jpg'
      },
      {
        id: 103,
        nom: 'Savon noir détoxifiant',
        categorie: 'Soins corporels',
        prix: 2500,
        stock: 100,
        description: 'Nettoie et hydrate la peau en profondeur.',
        image: 'https://example.com/images/savon_noir.jpg'
      }
    ],
    commandes: [
      {
        id: 201,
        client: 'Jean Koffi',
        date: '2024-02-15',
        statut: 'En cours',
        total: 10500,
      },
      {
        id: 202,
        client: 'Amina Soule',
        date: '2024-02-14',
        statut: 'Livré',
        total: 7500,
      }
    ],
    statistiques: {
      ventesMensuelles: 125000,
      ventesQuotidiennes: 20000,
      avisMoyen: 4.7,
      nombreAvis: 35
    }
  };


  const shopData = {
  shopLogo: '/src/assets/logo.png',
  shopName: 'Ma Boutique',
  sellerName: 'Jean Dupont'
};

const menuItems = [
  { icon: 'mdi-home', text: 'Accueil' },
  { icon: 'mdi-cart', text: 'Produits' },
  { icon: 'mdi-chart-line', text: 'Rapports' },
  { icon: 'mdi-account', text: 'Profil' }
];

const stats = [
  { title: 'Ventes Totales', value: '1200 €' },
  { title: 'Clients', value: '150' },
  { title: 'Produits', value: '75' },
  { title: 'Commandes', value: '250' }
];

const recentOrders = [
  { orderNumber: '001', client: 'Alice', status: 'Livré', total: '50 €' },
  { orderNumber: '002', client: 'Bob', status: 'En cours', total: '30 €' },
  { orderNumber: '003', client: 'Claire', status: 'Annulé', total: '0 €' },
  { orderNumber: '004', client: 'David', status: 'Livré', total: '20 €' }
];

const quickActions = [
  { text: 'Ajouter un Produit', onClick: () => console.log('Ajout de produit') },
  { text: 'Gérer les Commandes', onClick: () => console.log('Gestion des commandes') },
  { text: 'Voir les Rapports', onClick: () => console.log('Voir les rapports') }
];

export { shopData, menuItems, stats, recentOrders, quickActions, vue_app_vendeurData };

  

  
</script>
