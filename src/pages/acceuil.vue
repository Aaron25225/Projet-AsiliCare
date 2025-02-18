
  
  <template>
    <asiliNavBar />
  <v-app>
    <!-- Home Section -->
    <v-container class="home">
      <v-row>
        <v-col cols="12" md="6" class="left">
          <h1>ASILI <span>care</span></h1>
          <h4>Le e-commerce qui favorise le naturel.</h4>
          <p>Votre boutique en ligne dédiée aux remèdes naturels et aux solutions bien-être.</p>
          <p>Nous vous proposons une sélection de produits issus de la nature, soigneusement choisis pour améliorer votre santé et votre qualité de vie.</p>
          <p>Que vous cherchiez des infusions, des huiles essentielles ou d'autres remèdes naturels, nous mettons à votre disposition une gamme variée de produits de qualité. <br>
             Découvrez nos solutions naturelles et adoptez un mode de vie plus sain dès aujourd'hui ! </p>
          <v-btn color="primary" class="button-link">
            <a href="#">En savoir plus</a>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="right">
          <v-img src="/src/assets/nunya1.jpeg"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container class="services">
      <v-row>
        <v-col cols="12">
          <h1 class="title">Nos services</h1>
          <p class="small_title">Chez ASILI care, nous mettons tout en œuvre pour vous offrir une expérience complète et intuitive. <br> En plus de notre large sélection de remèdes naturels, nous proposons divers services pour vous accompagner dans votre bien-être et vous garantir une satisfaction optimale. Découvrez ce que nous avons à vous offrir :</p>
        </v-col>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4" class="serv">
          <v-img :src="service.image" alt=""></v-img>
          <h4>{{ service.title }}</h4>
          <v-list>
            <v-list-item v-for="(item, index) in service.details" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn color="primary" class="button-link">
            <a href="#">En savoir plus</a>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Section -->
    <v-container class="about">
      <v-row>
        <v-col cols="12">
          <h1 class="title">À propos de nous</h1>
          <p>Sur NunyaShop, votre boutique en ligne spécialisée dans les remèdes naturels et le bien-être. Nous croyons en la puissance des plantes et des solutions naturelles pour améliorer la santé et la qualité de vie. <br>
             Notre mission est de rendre ces trésors accessibles à tous, en proposant des produits authentiques, efficaces et respectueux de l'environnement. <br>
             Nous nous engageons à offrir une expérience unique à nos clients grâce à des services personnalisés, une sélection rigoureuse de produits et un accompagnement de qualité.</p>
          <h2>Nos objectifs</h2>
        </v-col>
        <v-col v-for="(objectif, index) in objectifs" :key="index" cols="12" md="6">
          <v-card>
            <v-card-title>
              <h1>{{ index + 1 }}</h1>
              <v-spacer></v-spacer>
              <v-card-subtitle>{{ objectif.title }}</v-card-subtitle>
            </v-card-title>
            <v-card-text>{{ objectif.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container class="contact">
      <v-row>
        <v-col cols="12">
          <h1 class="title">Contactez nous</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-form>
            <v-text-field label="Nom" required></v-text-field>
            <v-text-field label="Adresse Mail" required></v-text-field>
            <v-text-field label="Objet du Message" required></v-text-field>
            <v-textarea label="Votre Message" required></v-textarea>
            <v-btn color="primary" class="button-link">
              <a href="#">Envoyer Votre message</a>
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/src/assets/moringa.jpeg"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Section -->
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p>© 2025 NunyaShop. Tous droits réservés.</p>
            <p>Ce site et son contenu (textes, images, logos, produits et éléments graphiques) sont la propriété exclusive de NunyaShop ou de ses partenaires. Pour toute reproduction, distribution, demande d'autorisation ou d'information, veuillez nous contacter à info@nunyashop.com</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  //import navBar from '../components/navBar.vue'
  import asiliNavBar from '@/components/asiliNavBar.vue';
export default {
  name: 'FullPage',
  data() {
    return {
      services: [
        {
          image: '/src/assets/plant.png',
          title: 'Vente de Remèdes Naturels',
          details: ['Vente de Remèdes Naturels', 'Produits à base de plantes médicinales et soins bien-être.', 'Sélection de produits bio et artisanaux.'],
        },
        {
          image: '/src/assets/camion-de-livraison.png',
          title: 'Services de Livraison et Paiement Sécurisé',
          details: ['Livraison rapide et suivie (locale et internationale).', 'Options de paiement sécurisées (carte bancaire, mobile money, PayPal).', 'Politique de retour flexible et support client dédié.'],
        },
        {
          image: '/src/assets/green.png',
          title: 'Forum et Communauté',
          details: ['Partage d\'expériences et conseils entre utilisateurs.', 'Discussions sur les bienfaits des remèdes et retours d\'expérience.', 'Webinaires et ateliers en ligne sur la médecine naturelle.'],
        },
        // Ajoutez les autres services ici...
      ],
      objectifs: [
        { title: 'Offrir des produits naturels de qualité', description: 'Nous sélectionnons soigneusement chaque produit pour garantir son efficacité, son authenticité et son respect des normes de qualité.' },
        { title: 'Promouvoir un mode de vie sain', description: 'À travers nos produits et nos conseils, nous encourageons nos clients à adopter des habitudes saines et naturelles pour leur bien-être.' },
        { title: 'Soutenir les producteurs locaux et éthiques', description: 'Nous collaborons avec des herboristes et des producteurs engagés dans une agriculture responsable et durable.' },
        { title: 'Faciliter l\'accès aux remèdes naturels', description: 'Grâce à notre plateforme intuitive et à nos services de livraison rapide, nous proposons les soins naturels accessibles à tous.' },
        { title: 'Éduquer et informer notre communauté', description: 'Nous partageons régulièrement des conseils, articles et guides sur les bienfaits des plantes et des remèdes naturels.' },
        { title: 'Offrir une expérience d\'achat fluide et sécurisé', description: 'Cette plateforme est conçue pour offrir une navigation agréable, avec des paiements sécurisés et un support client réactif.' },
        { title: 'Créer une communauté engagée', description: 'Nous encourageons l\'échange et le partage entre passionnés de bien-être naturel via notre forum et nos réseaux sociaux.' },
      ],
    };
  },
};
</script>

<style scoped>
.home, .services, .about, .contact {
  padding: 20px;
}
.left h1 span, .button-link a {
  color: #3f51b5;
}
.serv .button-link a, .contact .button-link a {
  color: white;
  text-decoration: none;
}
</style>



