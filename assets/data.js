/* ════════════════════════════════════════════════════════════════════════════════════
   DIGIHIVE.COM — DONNÉES DU CATALOGUE

   Ce fichier simule la collection Firestore "categories" et "products"
   discutées pour l'architecture. Structure volontairement identique au
   futur schéma Firestore : le jour où on branche Firestore, seule la
   fonction de chargement (voir app.js → loadData) change, pas les pages.

   À FAIRE AVANT LANCEMENT :
   - Remplacer les 2 logiciels "exemple" par les vrais logiciels dispo
   - Vérifier les prix Options (Community/Personality/Proteus) : pricing
     encore en discussion, ceux-ci sont les prix actuellement en prod Stripe
   - Brancher Firestore à la place de ce fichier statique
════════════════════════════════════════════════════════════════════════════════════ */

// Libellés d'affichage pour chaque type de produit (utilisé par les filtres)
const FILTER_LABELS = {
  template: 'Templates Discord',
  logiciel: 'Logiciels',
  formation: 'Formations',
  service: 'Services',
  agent: 'Agents IA'
};

// ── CATÉGORIES ───────────────────────────────────────────────
// Chaque entrée alimente la page categorie.html?type=xxx
// statut: 'valide' = contenu confirmé — 'brouillon' = provisoire, à revoir
const CATEGORIES = [
  {
    type: 'logiciel',
    nom: 'Logiciels',
    accroche: "Ton logiciel, sans les prix d'un logiciel.",
    constat: "Même avec l'IA, coder reste un mur pour qui n'a aucune notion. Le no-code générique est souvent limité ou cher.",
    solution: "Une bibliothèque de logiciels prêts à l'emploi (budget, chantier, courses, voyage...), modifiables à la demande, et une création 100% sur-mesure possible sur devis.",
    etapes: [
      'Choix : un logiciel de la bibliothèque, ou une idée à créer sur-mesure',
      'Devis & cahier des charges (pour le sur-mesure)',
      'Développement & tests, ajustables à la demande',
      "Export si besoin : version .exe, application Android ou iOS"
    ],
    avantages: [
      'Coût maîtrisé : à partir de 3€, chaque modification à 1€',
      'Évolutif dans le temps, sans repartir de zéro',
      'Autonomie : pas besoin d\'un développeur pour chaque petite modification'
    ],
    cta: 'Voir les logiciels disponibles',
    statut: 'valide'
  },
  {
    type: 'template',
    nom: 'Templates Discord',
    accroche: 'Ton serveur Discord, prêt en une commande.',
    constat: "Monter un serveur pro (permissions, structure, sécurité, animation) prend des dizaines d'heures et demande une expertise que peu de gens ont.",
    solution: "Une architecture complète clé en main, déployée via un lien template Discord officiel, accompagnée d'un agent IA architecte et d'un tableau de bord d'installation.",
    etapes: [
      'Choix du pack (Initial / Pro / Elite)',
      'Génération du serveur via le lien template',
      'Configuration guidée par le Manuel Pro',
      'Agent IA disponible en continu pour les questions'
    ],
    avantages: [
      'Gain de temps massif',
      'Structure pensée par un expert Discord',
      'Évolutif via agents et modules en option'
    ],
    cta: 'Voir les packs disponibles',
    statut: 'brouillon'
  },
  {
    type: 'formation',
    nom: 'Formations',
    accroche: "Apprends à faire toi-même ce que d'autres facturent.",
    constat: "La plupart des tutos sont épars, dépassés ou trop techniques. Peu de formations vont du concept à la pratique sur Discord.",
    solution: "Des formations interactives, structurées par modules, avec un agent IA dédié inclus pour répondre en temps réel.",
    etapes: [
      'Achat → accès immédiat à la formation',
      'Progression par modules',
      "Agent IA disponible pour les questions"
    ],
    avantages: [
      'Autonomie durable',
      'Contenu pratique et actionnable',
      'Agent IA inclus à vie'
    ],
    cta: 'Découvrir les formations',
    statut: 'brouillon'
  },
  {
    type: 'service',
    nom: 'Services Sur-Mesure',
    accroche: "Ton projet, pensé et livré par quelqu'un qui s'y connaît.",
    constat: "Les besoins uniques ne rentrent pas toujours dans une case standard, et le freelance classique coûte cher et manque de suivi.",
    solution: "Serveurs sur-mesure, sites web personnalisés, audits de sécurité et consulting, avec un cahier des charges signé en amont.",
    etapes: [
      'Formulaire de besoin',
      'Échange et devis',
      'Cahier des charges signé',
      'Développement puis livraison accompagnée'
    ],
    avantages: [
      'Sécurité contractuelle',
      'Expertise transversale (Discord, web, sécurité)',
      'Suivi personnalisé'
    ],
    cta: 'Demander un devis',
    statut: 'brouillon'
  }
];

// ── PRODUITS ────────────────────────────────────────────────────────
// cta_type: 'stripe' (lien de paiement direct) | 'mailto' (devis) | 'none'
// statut:   'disponible' | 'exemple' (placeholder à remplacer) | 'inclus_avec'
const PRODUCTS = [

  // — Templates Discord (Cycle 1 Gaming) — prix/liens réels en prod Stripe
  {
    id: 'pack-initial-gaming',
    type: 'template',
    cycle: 'cycle1',
    titre: 'Pack Initial Gaming',
    description_courte: 'Architecture Discord complète : 16 catégories, 75 salons, rôles et permissions pré-calibrés.',
    prix: 9,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/8x2eVfgqL2L2cqm1ARbjW07',
    statut: 'disponible',
    featured: true
  },
  {
    id: 'pack-pro-gaming',
    type: 'template',
    cycle: 'cycle1',
    titre: 'Pack Pro Gaming',
    description_courte: "Le pack Initial, augmenté d'options supplémentaires pour aller plus loin dans la gestion du serveur.",
    prix: 15,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/7sYfZjdez85m9ea3IZbjW05',
    statut: 'disponible'
  },
  {
    id: 'pack-elite-gaming',
    type: 'template',
    cycle: 'cycle1',
    titre: 'Pack Elite Gaming',
    description_courte: "L'écosystème complet Cycle 1 Gaming, agents IA inclus.",
    prix: 89,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/bJe5kF6Qb2L2bmigvLbjW04',
    statut: 'disponible'
  },

  // — Agents IA (options à l'unité)
  {
    id: 'option-community',
    type: 'agent',
    cycle: 'cycle1',
    titre: 'Agent IA Community',
    description_courte: 'Animateur communautaire : posts, événements, onboarding, dynamique de groupe.',
    prix: 9.99,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/aFa9AV4I3adu4XU7ZfbjW02',
    statut: 'disponible'
  },
  {
    id: 'option-personality',
    type: 'agent',
    cycle: 'cycle1',
    titre: 'Agent IA Personality',
    description_courte: "Agent 100% personnalisé : ton, humour et univers du serveur, construit sur brief.",
    prix: 79,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/7sY7sN6Qb3P6duqbbrbjW01',
    statut: 'disponible'
  },
  {
    id: 'option-proteus',
    type: 'agent',
    cycle: 'cycle1',
    titre: 'Agent IA Proteus',
    description_courte: 'Sécurité Discord : audits, diagnostics, conseils en temps réel contre nukers et raids.',
    prix: 15,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/cNi4gBfmH4Ta7626VbbjW00',
    statut: 'disponible'
  },

  // — Formations
  {
    id: 'formation-bots-discord',
    type: 'formation',
    titre: 'Formation Bots Discord',
    description_courte: 'Formation complète pour créer et configurer tes propres bots Discord, agent Scriptbe inclus.',
    prix: 15,
    devise: 'EUR',
    cta_type: 'stripe',
    stripe_payment_link: 'https://buy.stripe.com/aFa28t6Qb99q61Ya7nbjW03',
    statut: 'disponible',
    featured: true
  },
  {
    id: 'formation-securite-discord',
    type: 'formation',
    titre: 'Formation Sécurité Discord',
    description_courte: 'Formation interactive : audits, diagnostics, protection contre nukers, raids et phishing.',
    prix: null,
    devise: 'EUR',
    cta_type: 'none',
    stripe_payment_link: null,
    statut: 'inclus_avec',
    note: "Incluse avec l'agent IA Proteus"
  },

  // — Logiciels (App'Low) — EXEMPLES, à remplacer par le vrai catalogue
  {
    id: 'exemple-suivi-budget',
    type: 'logiciel',
    titre: 'Suivi de Budget',
    description_courte: 'Exemple — logiciel de suivi de budget personnel, personnalisable à la demande.',
    prix: 5,
    devise: 'EUR',
    cta_type: 'none',
    stripe_payment_link: null,
    statut: 'exemple',
    featured: true
  },
  {
    id: 'exemple-suivi-chantier',
    type: 'logiciel',
    titre: 'Suivi de Chantier',
    description_courte: 'Exemple — logiciel de suivi de chantier pour artisans et auto-entrepreneurs.',
    prix: 5,
    devise: 'EUR',
    cta_type: 'none',
    stripe_payment_link: null,
    statut: 'exemple'
  },

  // — Services sur-mesure (contenu réel, issu du Manuel Pro)
  {
    id: 'service-site-vitrine-simple',
    type: 'service',
    titre: 'Site Vitrine Simple',
    description_courte: "Site one-page : présentation du serveur, lien d'invitation, réseaux sociaux.",
    prix: 99,
    devise: 'EUR',
    cta_type: 'mailto',
    statut: 'disponible'
  },
  {
    id: 'service-site-vitrine-complet',
    type: 'service',
    titre: 'Site Vitrine Complet',
    description_courte: "Site multi-pages 100% personnalisable selon vos besoins et l'univers de votre serveur.",
    prix: 399,
    devise: 'EUR',
    cta_type: 'mailto',
    statut: 'disponible'
  },
  {
    id: 'service-serveur-sur-mesure',
    type: 'service',
    titre: 'Serveur Discord Sur-Mesure',
    description_courte: 'Architecture Discord conçue de A à Z selon ton cahier des charges.',
    prix: '80–150',
    devise: 'EUR',
    cta_type: 'mailto',
    statut: 'disponible'
  }
];
