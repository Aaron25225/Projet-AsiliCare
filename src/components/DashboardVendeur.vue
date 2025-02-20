<template>
    <div class="dashboard">
      <div class="container">
        <div class="sidebar">
          <!-- Contenu de la sidebar -->
          <div class="menu-btn">
          <i class="ph-bold ph-caret-left"></i>
        </div>
        <div class="head">
          <div class="user-img">
            <img src="4.png" alt="" />
          </div>
          <div class="user-details">
            <p class="title">Nom de la boutique</p>
            <p class="name">Nom du vendeur</p>
          </div>
        </div>
        <div class="nav">
          <div class="menu">
            <p class="title">Menu</p>
            <ul>
              <li>
                <a href="#">
                  <i class="icon ph-bold ph-house-simple"></i>
                  <span class="text">Tableau de bord </span>
                </a>
              </li>
              <!--Espace utilisateur--> 
              <li>
                <a href="#">
                  <i class="icon ph-bold ph-user"></i>
                  <span class="text">Utilisateur</span>
                  <i class="arrow ph-bold ph-caret-down"></i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="#">
                      <span class="text">Profil</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Boutique</span>
                    </a>
                  </li>
                </ul>
              </li>
               <!--Gestion Boutique-->
               <li>
                <a href="#">
                  <i class="icon ph-bold ph-calendar-blank"></i>
                  <span class="text">Gestion Boutique</span>
                  <i class="arrow ph-bold ph-caret-down"></i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="#">
                      <span class="text">Gestion des produits</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Gestion Commandes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Gestion Payements</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Gestion Clientèle</span>
                    </a>
                  </li>
                </ul>
              </li>
              <!--Promotion et Publicité-->
              <li class="active">
                <a href="#">
                  <i class="icon ph-bold ph-file-text"></i>
                  <span class="text">Promotion et Publicité</span>
                  
                </a>
              </li>
             
              <!--Avis et Réputation-->
              <li>
                <a href="#">
                  <i class="icon ph-bold ph-chart-bar"></i>
                  <span class="text">Avis et Réputation</span>
                </a>
              </li>
            </ul>
          </div>
          <!--Settings-->
          <div class="menu">
            <p class="title">Settings</p>
            <ul>
              <li>
                <a href="#">
                  <i class="icon ph-bold ph-gear"></i>
                  <span class="text">Paramètres</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--Account-->
        <div class="menu">
          <p class="title">Account</p>
          <ul>
            <li>
              <a href="#">
                <i class="icon ph-bold ph-info"></i>
                <span class="text">Centre d'aide</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon ph-bold ph-sign-out"></i>
                <span class="text">Deconnexion</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div class="dash">
          <!-- Contenu principal du dashboard -->

            <main class="main-content">
                <header>
                    <h1>Bienvenue, Vendeur !</h1>
                    <p>Gérez votre boutique et suivez vos performances.</p>
                </header>

                <!-- Statistiques clés -->
                <section class="stats">
                    <div class="stat-card">
                        <i class="fas fa-dollar-sign"></i>
                        <h3>Ventes du mois</h3>
                        <p>150,000 CFA</p>
                        <a href="#" class="voir-plus-btn">Voir plus</a>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-shopping-basket"></i>
                        <h3>Commandes en attente</h3>
                        <p>8</p>
                        <a href="#" class="voir-plus-btn">Voir plus</a>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-users"></i>
                        <h3>Statistiques produits vendus</h3>
                        <p>200</p>
                        <a href="#" class="voir-plus-btn">Voir plus</a>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star"></i>
                        <h3>Avis Moyens</h3>
                        <p>4.8/5</p>
                        <a href="#" class="voir-plus-btn">Voir plus</a>
                    </div>
                </section>

                <!-- Tableau des commandes récentes -->
                <section class="orders">
                    <h2>Commandes Récentes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>N° Commande</th>
                                <th>Client</th>
                                <th>Statut</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1023</td>
                                <td>Jean Doe</td>
                                <td>Expédiée</td>
                                <td>25,000 CFA</td>
                            </tr>
                            <tr>
                                <td>#1024</td>
                                <td>Alice Smith</td>
                                <td>En attente</td>
                                <td>15,000 CFA</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <!-- Actions rapides -->
                <section class="quick-actions">
                    <h2>Actions Rapides</h2>
                    <button>Ajouter un Produit</button>
                    <button>Gérer les Stocks</button>
                    <button>Créer une Promotion</button>
                </section>
            </main>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  }
  </script>
  
  <style scoped>
  /* Styles CSS de votre tableau de bord */
  </style>
  