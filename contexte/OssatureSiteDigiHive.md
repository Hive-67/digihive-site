# OSSATURE SITE DIGIHIVE.COM — BRIEF DE REPRISE

https://hive-67.github.io/digihive-site/

## 1. CONTEXTE

DigiHive n'a jamais été pensé comme une boutique 100% Discord. C'est une
boutique de produits numériques au sens large (formations, prompts,
templates serveurs, logiciels sur-mesure, signatures visuelles, sites web,
etc.). Discord (templates, formations, agents IA) en est un axe fort parce
que Hive s'y connaît bien, mais c'est un axe parmi d'autres, pas le socle.

Élément déclencheur de cette session : le concept "App'Low" (logiciels
utiles vendus 3-5€, modifiables à 1€/demande, ou développement sur-mesure
avec export .exe / Android / iOS). Question de départ : faut-il une marque
séparée pour ça, ou l'intégrer à DigiHive ? Réponse actée : ça s'intègre à
DigiHive, parce que DigiHive est justement censé accueillir ce type de
produit depuis le début.

Conséquence directe : il faut une **ossature de site générique**, capable
d'accueillir n'importe quel type de produit (template, logiciel, formation,
service) sans reconstruire le site à chaque nouvelle catégorie. C'est ce qui
a été construit dans cette session.

## 2. DÉCISIONS PRISES

- DigiHive.com = une seule plateforme, structurée en un **backbone commun**
  (auth, panier, accès, dashboard client) + des **slots produits** génériques
  (chaque type de produit a son propre gabarit d'affichage, mais partage le
  même shell visuel).
- Structure du site : **multi-pages classiques** (accueil / catalogue /
  fiche produit / compte séparés), pas une single-page app.
- Espace client (compte, achats, téléchargements) : **structure prête,
  désactivée pour l'instant**. Sera branché plus tard sur Firebase Auth +
  la Cloud Function `verifySession` déjà en prod.
- Modèle de données générique validé : deux collections, `categories` et
  `products` (détail schéma en section 4). Le jour où on branche Firestore,
  seule la fonction de chargement des données change, pas les pages.
- Chaque catégorie (Templates Discord / Logiciels / Formations / Services)
  a sa propre page de présentation (accroche, constat, solution, étapes,
  avantages) avant la liste de produits — parce que "Logiciels" en
  particulier a besoin d'expliquer le concept (accessibilité pour les gens
  sans notion de code), pas juste lister des prix.
- Contenu détaillé et validé **uniquement pour la catégorie Logiciels**
  (App'Low) pour l'instant. Templates / Formations / Services ont un texte
  brouillon (déjà rédigé, non retravaillé) en attendant leur propre session.
- Prochaine étape actée : passe **design + fonctionnel complète** sur la
  page Logiciels, qui sera la première vraie vitrine montrée aux clients.

## 3. ÉTAT ACTUEL — CE QUI EST LIVRÉ

Fichier livré : `digihive-site.zip` (dossier `digihive-site/`)

```
digihive-site/
├── index.html        accueil : hero, 4 cards catégories, produits phares
├── catalogue.html     tous les produits, filtres par catégorie
├── categorie.html      page générique (?type=xxx), sert les 4 catégories
├── produit.html         page générique (?id=xxx), fiche produit + CTA
├── compte.html            placeholder "bientôt disponible"
└── assets/
    ├── styles.css   tokens de marque + layout (header, footer, cards, grilles)
    ├── data.js      catalogue local (catégories + produits) — remplace Firestore pour l'instant
    └── app.js       rendu dynamique de toutes les pages à partir de data.js
```

Fonctionne en local, aucune dépendance : ouvrir `index.html` dans le
navigateur avec le dossier `assets/` à côté. Ne jamais déplacer un fichier
HTML seul hors du dossier.

Design système repris à l'identique du Manuel Pro (`theme-hiveos`) pour
rester cohérent avec le reste de l'écosystème :
- Couleurs : `--bg:#111 --bg2:#1c1c1c --bg3:#262626 --bg4:#303030
  --brd:#7d206f33 --tx:#f5f5f5 --tx2:#b8a7b5 --ac:#b01678`
- Dégradé marque : `linear-gradient(90deg,#7d206f,#b01678,#c21758,#da1d33,#eb1925)`
- Polices : Syne 800 (titres), Space Mono (corps)

Données produits actuellement dans `data.js` :
- 3 packs Cycle 1 Gaming (Initial 9€ / Pro 15€ / Elite 89€) — vrais liens
  Stripe en prod
- 3 agents IA à l'unité (Community 9,99€ / Personality 79€ / Proteus 15€)
  — vrais liens Stripe en prod (prix à reconfirmer, pricing encore en
  discussion selon les dernières notes de projet)
- Formation Bots Discord (15€, vrai lien) et Formation Sécurité Discord
  (incluse avec Proteus, pas de vente à l'unité)
- 2 logiciels marqués **EXEMPLE** (Suivi de Budget, Suivi de Chantier) —
  à remplacer par le vrai catalogue App'Low
- 3 services sur-mesure (Site vitrine simple 99€, complet 399€, serveur
  sur-mesure 80-150€) — CTA en mailto (devis), pas de paiement direct

## 4. SPECS CLÉS — MODÈLE DE DONNÉES

### Collection `categories` (une entrée par type de produit)
```
type          (identifiant : template / logiciel / formation / service)
nom
accroche
constat
solution
etapes[]
avantages[]
cta
statut        (valide / brouillon)
```

### Collection `products`
```
id, type, cycle (optionnel), titre,
description_courte, prix, devise,
cta_type       (stripe / mailto / none)
stripe_payment_link (si cta_type = stripe)
statut         (disponible / exemple / inclus_avec)
note           (optionnel, ex: "Inclus avec l'option Proteus")
featured       (optionnel, bool — affiché en avant sur l'accueil)
```

Ajouter un produit ou une catégorie = ajouter une entrée dans ce modèle,
aucune page à retoucher. C'est le principe central de l'ossature.

## 5. RESTE À FAIRE

- [ ] Design + copy complet de la page Logiciels (catégorie + fiches
      produits) — **prochaine étape immédiate**
- [ ] Même travail plus tard pour Templates / Formations / Services
      (contenu brouillon actuel à remplacer)
- [ ] Construire le vrai catalogue de logiciels App'Low (remplacer les
      2 entrées "exemple")
- [ ] Brancher Firestore à la place de `data.js` pour un catalogue
      dynamique et modifiable sans redéployer le site
- [ ] Activer l'espace client (Firebase Auth + `verifySession`)
- [ ] Héberger sur Firebase Hosting (projet `digihiveos`)

## 6. LIENS AVEC LE RESTE DU PROJET

Ce site est le futur DigiHive.com mentionné dans la Bible du projet
(section 2A — backend central). Il ne remplace pas les ManuelPro par
produit (ManuelProServerGaming.html, etc.), qui restent les tableaux de
bord livrés à chaque client après achat. Le site DigiHive.com est la
vitrine et le tunnel de vente ; le ManuelPro est l'outil d'exploitation
livré une fois l'achat fait.
