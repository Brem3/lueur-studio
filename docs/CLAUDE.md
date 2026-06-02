# LUEUR STUDIO — Brief Complet Shopify
> Ce fichier est le document de référence unique pour la construction du store Shopify **Lueur Studio**. Toute décision de développement, de design ou de contenu doit être alignée avec ce brief.

---

## TABLE DES MATIÈRES
1. [Vision & Positionnement de marque](#1-vision--positionnement-de-marque)
2. [Identité Visuelle & Design System](#2-identité-visuelle--design-system)
3. [Architecture du site](#3-architecture-du-site)
4. [Structure des pages produits](#4-structure-des-pages-produits)
5. [Catalogue produits](#5-catalogue-produits)
6. [Stratégie SEO](#6-stratégie-seo)
7. [Copywriting & Tone of Voice](#7-copywriting--tone-of-voice)
8. [Spécifications techniques Shopify](#8-spécifications-techniques-shopify)
9. [Applications recommandées](#9-applications-recommandées)

---

## 1. VISION & POSITIONNEMENT DE MARQUE

### Nom de la marque
**LUEUR STUDIO**
Tagline : *« L'éclairage qui transforme vos extérieurs en œuvres d'art. »*

### Qui sommes-nous ?
Lueur Studio est une maison française de luminaires d'extérieur haut de gamme. Nous concevons des lampes qui ne sont pas de simples sources de lumière — ce sont des sculptures vivantes qui métamorphosent un jardin, une terrasse ou une allée en un espace habité, poétique et premium.

### Mission
Permettre à chaque propriétaire de créer une atmosphère extérieure aussi soignée et mémorable que son intérieur.

### Cible client (Persona)
- **Âge** : 35–60 ans
- **Profil** : Propriétaire d'une maison ou d'un appartement avec extérieur (terrasse, jardin, balcon)
- **Revenu** : CSP+ à CSP++
- **Intérêts** : Architecture intérieure, décoration, jardinage design, hôtellerie de luxe, lifestyle
- **Comportement d'achat** : Recherche sur Google, compare les avis, sensible à l'esthétique et à la qualité des matériaux, prêt à investir si la valeur perçue est élevée
- **Craintes** : Acheter un produit qui ne rende pas bien "en vrai", problèmes d'installation, produit non résistant aux intempéries

### Pain Points identifiés
| Problème rencontré | Notre réponse |
|---|---|
| Les luminaires extérieurs sont laids ou trop "utilitaires" | Design d'auteur, esthétique premium, finitions artisanales |
| Peur que ça ne résiste pas aux intempéries | Certification IP65+ mentionnée partout, garantie 2 ans |
| Difficile de savoir si ça rendra bien dans mon espace | Photos "in situ" en conditions réelles, guide de mise en scène |
| Prix élevé difficile à justifier | Storytelling sur les matériaux, la durabilité, le "coût par année" |
| Pas sûr de savoir quelle lampe choisir pour quel usage | Guide d'achat intégré par espace (terrasse, allée, jardin) |
| Problèmes d'installation | Notice détaillée, FAQ, support chat inclus |

### Positionnement concurrentiel
- **En dessous de nous** : Amazon, Leroy Merlin, IKEA → produits génériques, sans caractère
- **À notre niveau** : Roche Bobois outdoor, Fermob luminaires, Bover → design mais peu digitaux
- **Au-dessus de nous** : Louis Poulsen, Vibia → architectes, B2B, hors budget résidentiel

**Notre zone de valeur** : Premium accessible. Design d'exception, 150–400€ par pièce, livraison France en 3 jours.

### Valeurs de marque
1. **L'art du détail** — chaque finition est pensée
2. **L'extérieur mérite l'intérieur** — pas de compromis sur l'esthétique
3. **La lumière comme émotion** — nous vendons une ambiance, pas un produit
4. **Durabilité réelle** — matériaux qui vieillissent bien, pas de fast design
5. **Service à la française** — conseil, accompagnement, réassurance

---

## 2. IDENTITÉ VISUELLE & DESIGN SYSTEM

### Philosophie générale
Le site doit évoquer **la tombée du soir dans un jardin français soigné** : atmosphère chaude, sophistiquée, presque cinématographique. On pense à l'esthétique des grands hôtels de charme, des pages de magazines de maison de luxe (Côté Maison, AD France), des lookbooks de marques comme Aesop ou Diptyque.

**INTERDIT** : Fond blanc, police Inter ou Roboto, cartes produits génériques, design "e-commerce basique", tons froids.

---

### Palette de couleurs
```css
:root {
  /* Backgrounds */
  --color-bg-primary:      #0D1B2A;  /* Bleu nuit profond — fond principal */
  --color-bg-secondary:    #132236;  /* Bleu-gris sombre — sections alternées */
  --color-bg-card:         #1A2B3C;  /* Cartes produits, modules */
  --color-bg-overlay:      rgba(13, 27, 42, 0.85); /* Overlays */

  /* Accents & Brand */
  --color-gold:            #C8A96E;  /* Or chaud — titres, bordures, icônes */
  --color-gold-light:      #E8C98A;  /* Or clair — hover states */
  --color-amber:           #E07B39;  /* Ambre — CTA boutons, badges, urgence */
  --color-amber-glow:      rgba(224, 123, 57, 0.15); /* Halo lampe — effets lumineux */

  /* Textes */
  --color-text-primary:    #F0E8D8;  /* Blanc chaud — corps de texte */
  --color-text-secondary:  #9B8E7E;  /* Gris beige — textes secondaires */
  --color-text-muted:      #5C5448;  /* Très discret — labels, placeholders */

  /* Bordures & Séparateurs */
  --color-border:          #1F3147;  /* Subtil sur fond sombre */
  --color-border-gold:     rgba(200, 169, 110, 0.3); /* Filets or */

  /* États */
  --color-success:         #4A9B6F;
  --color-error:           #C0392B;
}
```

### Typographie
```css
/* Importer depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

:root {
  /* Display / Titres principaux — élégance, luxe, éditorial */
  --font-display:    'Cormorant Garamond', Georgia, serif;
  
  /* Corps / Interface — lisibilité moderne */
  --font-body:       'Jost', sans-serif;

  /* Tailles */
  --text-hero:       clamp(3.5rem, 8vw, 7rem);   /* Titre hero */
  --text-h1:         clamp(2.5rem, 5vw, 4.5rem);
  --text-h2:         clamp(2rem, 3.5vw, 3rem);
  --text-h3:         clamp(1.5rem, 2.5vw, 2rem);
  --text-body-lg:    1.125rem;
  --text-body:       1rem;
  --text-sm:         0.875rem;
  --text-xs:         0.75rem;

  /* Weights */
  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;

  /* Letter-spacing */
  --tracking-wide:   0.08em;   /* Labels, badges, navigation */
  --tracking-hero:   0.04em;   /* Grands titres */
  --tracking-tight:  -0.02em;  /* Corps de texte serré */
}
```

### Effets visuels & Ambiance
```css
/* Effet halo de lampe — à appliquer autour des produits et sections clés */
.lamp-glow {
  background: radial-gradient(
    ellipse at center,
    rgba(224, 123, 57, 0.12) 0%,
    rgba(200, 169, 110, 0.05) 40%,
    transparent 70%
  );
}

/* Grain texture — overlay subtil sur tout le site */
.grain-overlay::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise filter */
  opacity: 0.035;
  pointer-events: none;
  z-index: 9999;
}

/* Bordure or fine — séparateur de section */
.gold-rule {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  margin: 3rem auto;
  max-width: 200px;
}

/* Card produit — effet de profondeur */
.product-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  border-color: var(--color-border-gold);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(224, 123, 57, 0.08);
}
```

### Espacements & Layout
```css
:root {
  --section-padding-y:    clamp(4rem, 8vw, 8rem);
  --container-max:        1400px;
  --container-padding-x: clamp(1.5rem, 5vw, 5rem);
  --grid-gap:             2rem;
  --border-radius-sm:     4px;
  --border-radius-md:     8px;
  --border-radius-lg:     16px;
}
```

### Éléments de design signature
- **Fond texturé** : Utiliser un bruit SVG subtil (opacity 3%) sur tout le site, par-dessus le fond sombre
- **Halos ambrés** : Des cercles de lumière douce (radial-gradient) derrière les images produits et dans le hero
- **Filets or fins** : Lignes horizontales en dégradé or pour séparer les sections
- **Typographie mixte** : Les `<h1>` et `<h2>` en italique Cormorant pour l'élégance, les labels et boutons en Jost majuscule espacé
- **Numérotation décorative** : `01. 02. 03.` en or discret pour les listes features/USPs
- **Badges discrets** : Petits rectangles or/ambre avec texte en majuscules, letterspacing fort
- **Animations** : Fade-in au scroll (Intersection Observer), parallax léger sur le hero, curseur personnalisé (cercle or discret)

---

### Buttons

```css
/* CTA Principal — Acheter */
.btn-primary {
  background: var(--color-amber);
  color: #fff;
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: var(--border-radius-sm);
  min-height: 52px; /* mobile thumb friendly */
  transition: background 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  background: #C56A2D;
  box-shadow: 0 8px 30px rgba(224, 123, 57, 0.35);
}

/* CTA Secondaire — En savoir plus */
.btn-secondary {
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  font-family: var(--font-body);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  min-height: 52px;
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: var(--color-gold);
  color: var(--color-bg-primary);
}
```

---

## 3. ARCHITECTURE DU SITE

### Pages à créer (Liquid / Shopify)
```
/                       → Page d'accueil
/collections/all        → Catalogue complet
/collections/terrasse   → Luminaires de terrasse
/collections/jardin     → Luminaires de jardin
/collections/allees     → Bornes & allées
/products/[handle]      → Pages produits individuelles
/pages/guide-achat      → Guide de l'éclairage extérieur
/pages/materiaux        → Nos matériaux (storytelling)
/pages/a-propos         → Histoire de la marque
/pages/livraison        → Livraison & délais
/pages/retours          → Politique de retours
/pages/garantie         → Garantie 2 ans
/pages/faq              → FAQ complète
/blogs/inspirations     → Blog / inspirations d'aménagement
/pages/contact          → Contact & support
```

### Navigation principale
```
LUEUR STUDIO [logo centré ou gauche]

Nav gauche :     Collections ↓  |  Guide d'achat  |  Inspirations
Nav droite :     Recherche 🔍  |  Compte 👤  |  Panier 🛒 (0)

Mega-menu "Collections" :
  ┌─────────────────────────────────────────┐
  │  TERRASSE          JARDIN      ALLÉES   │
  │  [image]           [image]    [image]   │
  │                                         │
  │  → Toute la collection                  │
  │  → Nouveautés                           │
  │  → Best-sellers                         │
  └─────────────────────────────────────────┘
```

### Homepage — Sections dans l'ordre
```
1. HERO — Full-screen vidéo ou image cinématographique (jardin la nuit, lampe allumée)
   - Titre en grand : "Révélez vos extérieurs après le coucher du soleil."
   - Sous-titre + CTA "Découvrir la collection"
   - Scroll indicator (chevron animé)

2. BANDE USP — 4 icônes or en ligne
   "Livraison offerte +150€" | "IP65 Certifié" | "Garantie 2 ans" | "Retours 30 jours"

3. BESTSELLERS — 3 produits phares en carousel/grid
   Titre : "Nos pièces signature"

4. STORYTELLING BRAND — Section full-width image + texte
   "La lumière comme architecture d'ambiance"

5. SHOP BY SPACE — 3 tuiles cliquables
   Terrasse | Jardin | Allée & Entrée

6. SOCIAL PROOF — Chiffres clés + citation client
   "1 200+ foyers éclairés" | "4.9 ⭐ de moyenne" | "Note Trustpilot"

7. GUIDE D'ACHAT TEASER — Bloc éditorial avec CTA vers /pages/guide-achat

8. BLOG / INSPIRATIONS — 3 derniers articles
   (photos atmosphériques, titres éditoriaux)

9. NEWSLETTER — Inscription simple
   "Recevez nos idées d'aménagement & nos offres en avant-première"

10. FOOTER
```

### Footer
```
LUEUR STUDIO          Boutique            Aide                  Légal
[Logo]                Collections         FAQ                   CGV
"L'éclairage qui      Nouveautés          Contact               Politique de confidentialité
transforme vos        Best-sellers        Livraison             Mentions légales
extérieurs."          Guide d'achat       Retours & Garantie    

[Instagram] [Pinterest] [Facebook]        © 2025 Lueur Studio. Tous droits réservés.
```

---

## 4. STRUCTURE DES PAGES PRODUITS

> Structure issue du "Perfect Product Page Builder™" — adaptée à Lueur Studio.

### 4.1 ZONE AU-DESSUS DU FOLD (Sticky sur mobile)

#### Images produit (obligatoire : minimum 5 visuels)
| N° | Angle requis | Description |
|---|---|---|
| 1 | Face | Produit seul sur fond sombre avec halo de lumière |
| 2 | Détail | Finition, matière, texture en gros plan |
| 3 | Arrière / 3/4 | Vue de dos ou angle |
| 4 | Allumé | Produit allumé, effet lumineux visible |
| 5 | En situation | Installé dans un vrai extérieur (jardin, terrasse, allée) |

> Images sur fond `#0D1B2A` avec halo ambre subtil — cohérence totale avec le site.

#### Badge produit (au-dessus du titre)
Options : `NOUVEAUTÉ` | `BEST-SELLER` | `ÉDITION LIMITÉE` | `POPULAIRE` | `STOCK LIMITÉ`
Style : Petite pastille texte en majuscule, Jost, letterspacing 0.1em, couleur or ou ambre.

#### Étoiles & avis (sous le badge)
```liquid
{{ product.metafields.reviews.rating }}/5 ⭐ — {{ product.metafields.reviews.count }} avis
```
Affichage : étoiles pleines en or, compteur en texte muted, lien ancre vers section avis.

#### Titre produit
Font : Cormorant Garamond, 2.2rem, italic, couleur `var(--color-text-primary)`

#### Prix
```
Prix barré :  ~~239,00 €~~      (var(--color-text-muted), taille 0.9rem)
Prix actuel : 189,00 €          (var(--color-gold), taille 1.8rem, bold)
Paiement 3x : À partir de 63,00 €/mois sans frais avec Klarna  (taille sm, muted)
```

#### Options produit
- **Finition** : Boutons swatch — `Noir Mat` | `Laiton Brossé` | `Anthracite`
  - Style : Carré 36px, couleur réelle + tooltip au hover
- **Taille / Hauteur** (si applicable) : Boutons texte avec guide des tailles (lien ancre)
- Image change automatiquement selon la variante sélectionnée.

#### Quantité
- Dropdown `<select>` (pas de spinner), hauteur minimum 48px, largeur 80px.

#### Bouton CTA principal
```html
<button class="btn-primary btn-full">
  AJOUTER AU PANIER — 189,00 €
</button>
```
- Full width sur mobile
- Hauteur min 52px (friendly pour les pouces)
- Couleur `var(--color-amber)` qui contraste avec le fond sombre

#### USP Produit (2 lignes max, sous le CTA)
```
✓  Livraison offerte en France métropolitaine
✓  Retours gratuits sous 30 jours
```

#### Message de livraison
```
🚚  Expédié sous 24–48h — Livraison estimée : Jeudi 5 juin
```
Style : Texte muted, icône or, fond légèrement plus clair.

#### Garantie / Risk Remover
```
🛡️  Satisfait ou remboursé 30 jours · Garantie fabricant 2 ans
```
Style : Bandeau subtil avec icône bouclier or.

---

### 4.2 ZONE EN DESSOUS DU FOLD

#### Section USP Marque (4 colonnes)
```
01. Service client        02. Design français        03. Livraison rapide      04. Garantie
    Chat 7j/7                 Conçu à Paris               En France en 3j           2 ans
```

#### Description produit — Cadre "Product Description Framework™"

Structurée ainsi dans le Liquid :

```html
<h2 class="product-description__headline">
  <!-- Promesse principale — ce que le produit FAIT pour vous -->
  Transformez votre terrasse en salon de plein air, même après le coucher du soleil.
</h2>

<p class="product-description__intro">
  <!-- Le besoin / le problème résolu en 2-3 phrases, émotionnel -->
  La terrasse, c'est souvent le plus bel espace de la maison — et pourtant, 
  dès la tombée de la nuit, on la délaisse. La Sanctum Sol change cela.
</p>

<h5>Pourquoi vous allez l'adorer</h5>
<ul class="benefits-list">
  <!-- BÉNÉFICES — ce que l'utilisateur ressent / gagne -->
  <li>Une ambiance chaleureuse qui invite à rester dehors jusqu'au bout</li>
  <li>Aucun câble, aucune installation — fonctionne dès le déballage</li>
  <li>Résiste à la pluie, au gel et aux UV sans se décolorer</li>
</ul>

<h5>Ce qui la rend unique</h5>
<ul class="features-list">
  <!-- CARACTÉRISTIQUES — les faits techniques qui justifient le prix -->
  <li>Certification IP67 — immergeable jusqu'à 1 mètre</li>
  <li>Panneau solaire monocristallin haute efficacité</li>
  <li>Autonomie 12h après 6h de charge complète</li>
  <li>Finition laiton brossé traité anti-oxydation</li>
</ul>

<p class="product-description__feeling">
  <!-- Émotion finale — comment ça fait SENTIR -->
  C'est l'objet qui transforme un jardin ordinaire en un espace dont vous 
  serez fier d'ouvrir les portes à vos invités.
</p>
```

#### Avis clients (Reviews)
- Plugin : **Judge.me** (gratuit, supporte le français)
- Affichage : étoiles + extrait de l'avis + prénom + date + photo si disponible
- Tri : les plus récents par défaut, filtre par note
- Mise en avant d'UN avis phare en format "citation" (Cormorant italic, grande taille)

#### Spécifications techniques (Tableau)
```html
<h5>Fiche technique</h5>
<table class="product-specs">
  <tr><td>Dimensions</td><td>H 45 cm × Ø 12 cm</td></tr>
  <tr><td>Matériaux</td><td>Aluminium moulé, verre trempé</td></tr>
  <tr><td>Indice de protection</td><td>IP67</td></tr>
  <tr><td>Source lumineuse</td><td>LED 4W, 3000K (blanc chaud)</td></tr>
  <tr><td>Autonomie</td><td>8 à 12h selon luminosité</td></tr>
  <tr><td>Couleur disponibles</td><td>Noir Mat, Laiton Brossé</td></tr>
  <tr><td>Garantie</td><td>2 ans fabricant</td></tr>
  <tr><td>Poids</td><td>0,9 kg</td></tr>
</table>
```

#### Livraison (snippet inséré via une page dédiée)
```
📦  Livraison standard : 3–5 jours ouvrés — Offerte dès 150€
⚡  Livraison express : 24–48h — 9,90€
🌍  Livraison Europe : 5–8 jours — à partir de 14,90€
→ Voir les détails de livraison complets
```

#### Retours & Garantie (snippet)
```
↩️  Retours acceptés sous 30 jours, dans l'emballage d'origine
🛡️  Garantie fabricant 2 ans — prise en charge totale des défauts
→ Politique de retours complète
```

#### FAQ Produit (3–5 questions)
Questions génériques à toujours inclure :
1. Ce luminaire est-il vraiment adapté à une utilisation extérieure ?
2. Dois-je faire appel à un électricien pour l'installation ?
3. Quelle ampoule utilise-t-il ? Est-elle remplaçable ?
4. Comment entretenir la finition laiton brossé ?
5. Puis-je utiliser ce luminaire en bord de piscine ?
→ Lien vers `/pages/faq` pour les autres questions.

#### Produits associés ("Vous aimerez aussi")
```liquid
{% assign related = collections[product.type].products | where: "id", "!=", product.id | limit: 4 %}
```
- 4 produits max, même catégorie ou tags similaires
- Titre : *"À associer avec votre choix"*
- Cards en format compact (image + nom + prix)

#### Preuve sociale complémentaire
- Compteur de ventes : *"142 clients ont choisi ce luminaire ce mois-ci"*
- Badge Trustpilot (via widget officiel)
- Éventuellement : flux Instagram filtré par tag du produit (#lueurstudio)

---

## 5. CATALOGUE PRODUITS

### PRODUIT 1 — Sanctum Sol
**Handle Shopify** : `sanctum-sol`
**Type** : Borne de jardin solaire
**Collection** : Jardin, Allées

#### SEO (balises meta)
```
Title :       Borne de Jardin Solaire Design | Sanctum Sol — Lueur Studio
Description : Illuminez vos allées et massifs avec la Sanctum Sol, borne solaire design 
              IP67 en laiton brossé. Autonomie 12h, zéro câblage. Livraison offerte.
URL :         /products/sanctum-sol
H1 :          Sanctum Sol — Borne de jardin solaire design
```

#### Données produit
```yaml
Nom:          Sanctum Sol
Prix normal:  229,00 €
Prix soldé:   189,00 €
Badge:        BEST-SELLER
Variantes:
  Finition:
    - Noir Mat (#1A1A1A)
    - Laiton Brossé (#C8A96E)
Spécifications:
  Hauteur:         45 cm
  Diamètre:        12 cm
  Matériau:        Aluminium moulé + verre trempé satiné
  IP:              IP67
  Source:          LED intégrée 4W, 3000K blanc chaud
  Énergie:         Panneau solaire monocristallin
  Autonomie:       8–12h
  Temps de charge: 6h en plein soleil
  Poids:           0,9 kg
  Garantie:        2 ans
```

#### Promesse principale (headline description)
> *Vos allées méritent autant d'attention que votre salon — à partir du coucher du soleil.*

#### Description courte (pour les cards)
Borne solaire au design sculptural, la Sanctum Sol capte la lumière du jour pour révéler votre jardin la nuit venue. Aucun câblage. Aucune contrainte.

#### Bénéfices
- Transforme une allée banale en chemin lumineux digne des plus belles propriétés
- Installation en 5 minutes, sans outil, sans électricien
- Résiste aux pluies hivernales, au gel et aux UV de l'été

#### Features techniques
- Certification IP67 : protégé contre l'immersion jusqu'à 1m
- Panneau solaire monocristallin haute efficacité (rendement +30% vs panneaux classiques)
- LED 3000K : lumière chaude proche de la bougie, sans éblouissement
- Finition laiton brossé traitée anti-oxydation — vieillit avec grâce

#### Texte émotionnel final
> Offrir à votre jardin une lumière douce, digne et autonome — c'est ça, la promesse de Sanctum Sol.

#### Visuels requis (1 placeholder en attendant les vrais)
```
Visuel 1 (principal) : Rendu 3D ou moodboard
  → Borne élancée, finition laiton, fond bleu nuit #0D1B2A
  → Halo ambre au sol autour de la borne (effet réel)
  → Aucun texte sur l'image
  → Format : 1200×1500px (portrait)
  → Placeholder : fond sombre + texte centré "Sanctum Sol — Visuel à venir"
```

#### FAQ spécifique
1. La borne reste-t-elle allumée toute la nuit ? → *Oui, avec une charge complète (6h de soleil), elle tient 8 à 12h.*
2. Peut-on l'utiliser en hiver avec peu de soleil ? → *Elle s'adapte à la lumière disponible ; en hiver, l'autonomie peut descendre à 4–6h.*
3. Comment la planter dans le sol ? → *Une tige de fixation incluse s'insère sans outil dans la terre ou le gravier.*

---

### PRODUIT 2 — Aura Mural
**Handle Shopify** : `aura-mural`
**Type** : Applique murale extérieure
**Collection** : Terrasse, Façade

#### SEO (balises meta)
```
Title :       Applique Murale Extérieure Design | Aura Mural — Lueur Studio
Description : Applique murale extérieure haut de gamme, style Art Déco, finition noire 
              ou laiton. IP65, lumière chaude 3000K. Idéale pour terrasse et façade.
URL :         /products/aura-mural
H1 :          Aura Mural — Applique murale extérieure design
```

#### Données produit
```yaml
Nom:          Aura Mural
Prix normal:  199,00 €
Prix soldé:   (pas de solde — prix plein)
Badge:        NOUVEAUTÉ
Variantes:
  Finition:
    - Noir Mat (#1C1C1C)
    - Anthracite (#3A3A3A)
    - Laiton Doré (#C8A96E)
Spécifications:
  Dimensions:      H 22 cm × L 14 cm × Profondeur 12 cm
  Matériau:        Fonte d'aluminium + diffuseur verre opalin
  IP:              IP65
  Source:          GU10 LED fournie (6W, 3000K blanc chaud)
  Ampoule:         Remplaçable (GU10 standard)
  Câblage:         Filaire standard (câble électrique 2×0.75mm² inclus)
  Flux lumineux:   520 lm
  Poids:           1,2 kg
  Garantie:        2 ans
```

#### Promesse principale
> *Une applique qui affirme votre façade — de jour comme de nuit.*

#### Description courte
Née de l'Art Déco et pensée pour l'extérieur contemporain, l'Aura Mural projette une lumière chaude et sculptée qui met en valeur chaque détail de votre façade ou terrasse.

#### Bénéfices
- Valorise instantanément l'aspect de votre maison, même vue de la rue
- Lumière chaude et directionnelle qui crée de vraies zones d'ambiance
- Fixation standard : remplace n'importe quelle applique existante

#### Features techniques
- IP65 : protégée contre les jets d'eau et la poussière
- Fonte d'aluminium : anti-corrosion, résistant au gel
- Compatible ampoule GU10 de remplacement — aucune obsolescence programmée
- Câblage identique aux appliques standard, installation en moins de 30 min

#### Texte émotionnel final
> La lumière que vous projetez sur votre façade dit beaucoup de la maison derrière elle. Faites qu'elle soit belle.

#### Visuels requis
```
Visuel 1 (principal) :
  → Applique montée sur mur en pierre ou enduit blanc cassé
  → Finition Laiton, allumée, halo de lumière chaude
  → Fond flou de verdure ou terrasse de nuit
  → Format : 1200×1500px (portrait)
  → Placeholder : fond sombre + texte centré "Aura Mural — Visuel à venir"
```

#### FAQ spécifique
1. Dois-je faire appel à un électricien ? → *Oui, une installation filaire nécessite une intervention électrique. Une boîte de dérivation est recommandée.*
2. L'ampoule GU10 est-elle fournie ? → *Oui, une ampoule LED GU10 6W 3000K est incluse dans la boîte.*
3. Peut-on installer l'Aura Mural dans une zone couverte mais exposée à la pluie ? → *Oui, sa certification IP65 la protège même sous une pluie directe légère.*

---

### PRODUIT 3 — Nomade Terrasse
**Handle Shopify** : `nomade-terrasse`
**Type** : Lanterne portable rechargeable
**Collection** : Terrasse, Nomade

#### SEO (balises meta)
```
Title :       Lanterne Extérieure Rechargeable Sans Fil | Nomade Terrasse — Lueur Studio
Description : Lanterne sans fil design, rechargeable USB-C, intensité réglable. Parfaite 
              pour terrasse, table, camping ou piscine. IP54, autonomie 20h. Livraison offerte.
URL :         /products/nomade-terrasse
H1 :          Nomade Terrasse — Lanterne extérieure rechargeable sans fil
```

#### Données produit
```yaml
Nom:          Nomade Terrasse
Prix normal:  269,00 €
Prix soldé:   (pas de solde)
Badge:        POPULAIRE
Variantes:
  Couleur:
    - Sable (#C4AA87)
    - Noir Minuit (#1C1C2E)
    - Terracotta (#B85C3A)
Spécifications:
  Dimensions:      H 28 cm × Ø 14 cm
  Matériau:        Corps en céramique peinte + diffuseur PE givré
  IP:              IP54
  Source:          LED dimmable intégrée (3W, 2200K–3000K réglable)
  Charge:          USB-C inclus
  Autonomie:       15h (100%) — 20h (50%)
  Temps de charge: 4h (charge complète)
  Intensité:       Réglable par toucher (3 niveaux)
  Poids:           0,7 kg
  Garantie:        2 ans
```

#### Promesse principale
> *La liberté d'une belle lumière, partout où vous êtes — sur votre terrasse, au bord de la piscine, ou sous les étoiles.*

#### Description courte
Aucun câble. Aucune contrainte de placement. La Nomade Terrasse est une lanterne rechargeable au design céramique qui pose une lumière douce et intime là où vous en avez envie — sans demander la permission à personne.

#### Bénéfices
- Se pose sur une table, accroche à une branche, illumine un buffet extérieur — en une seconde
- Lumière dimmable (3 niveaux) adaptée de l'apéro à la soirée tardive
- Rechargeable par USB-C, comme votre téléphone — zéro pile jetable

#### Features techniques
- LED 2200K à 3000K : spectre ultra-chaud, effet flamme sans le danger
- Céramique peinte à la main : chaque pièce est unique
- IP54 : résistante aux éclaboussures et à la pluie légère
- Port USB-C universel avec câble inclus (1m)

#### Texte émotionnel final
> Il y a une magie particulière dans une lumière que l'on choisit de poser, là, exactement là. La Nomade vous redonne ce plaisir simple.

#### Visuels requis
```
Visuel 1 (principal) :
  → Lanterne céramique Terracotta posée sur table de jardin en bois brut
  → Fond flou : soirée extérieure, verdure, ambiance crépuscule
  → Allumée, lumière chaude visible à travers le diffuseur givré
  → Format : 1200×1500px (portrait)
  → Placeholder : fond sombre + texte centré "Nomade Terrasse — Visuel à venir"
```

#### FAQ spécifique
1. Puis-je la laisser dehors en cas de pluie ? → *L'IP54 la protège des projections et de la pluie légère, mais évitez l'exposition prolongée à forte pluie ou l'immersion.*
2. Peut-on recharger pendant qu'elle est allumée ? → *Oui, la charge et l'utilisation simultanées sont possibles.*
3. La lumière clignote-t-elle au niveau bas ? → *Non, la LED est driverée pour éviter tout scintillement, même au niveau le plus faible.*

---

## 6. STRATÉGIE SEO

### Mots-clés cibles (volume de recherche estimé France)

#### Mots-clés principaux (homepage & collections)
| Mot-clé | Intention | Page cible |
|---|---|---|
| luminaire extérieur design | Achat | /collections/all |
| lampe extérieur jardin | Achat | /collections/jardin |
| lampe extérieur terrasse | Achat | /collections/terrasse |
| éclairage extérieur haut de gamme | Achat | /collections/all |
| luminaire extérieur led | Achat | /collections/all |
| applique murale extérieure design | Achat | /collections/terrasse |
| borne de jardin solaire | Achat | /collections/allees |
| lanterne extérieure sans fil | Achat | /collections/terrasse |

#### Mots-clés longue traîne (pages produits & blog)
| Mot-clé | Page cible |
|---|---|
| borne solaire jardin design laiton | /products/sanctum-sol |
| applique murale extérieure ip65 | /products/aura-mural |
| lanterne extérieure rechargeable usb | /products/nomade-terrasse |
| comment éclairer sa terrasse la nuit | /blogs/inspirations |
| quel éclairage pour jardin zen | /blogs/inspirations |
| ip65 ip67 différence éclairage extérieur | /pages/faq |
| quel luminaire extérieur sans electricien | /pages/guide-achat |

### Balises meta — Règles générales
```
Title tag :        [Nom produit] | [Catégorie] — Lueur Studio (max 60 car.)
Meta description : Verbe d'action + bénéfice clé + feature différenciante + call-to-action (max 155 car.)
```

### Balises H (hiérarchie stricte)
```
H1 : Nom exact du produit (une seule fois par page)
H2 : Sections principales (Bénéfices, Caractéristiques, Avis)
H3 : Sous-sections (Spécifications, FAQ questions)
H5 : Labels dans la description produit (conformément au Perfect Product Page Builder)
```

### Données structurées (JSON-LD obligatoires)
Toutes les pages produits doivent inclure :
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sanctum Sol",
  "description": "...",
  "sku": "LS-001",
  "brand": { "@type": "Brand", "name": "Lueur Studio" },
  "offers": {
    "@type": "Offer",
    "price": "189.00",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  }
}
```

### Blog SEO — Sujets prioritaires
Articles à créer pour capturer le trafic informatif :
1. **"Comment éclairer sa terrasse la nuit : 7 idées pour une ambiance parfaite"**  
   → Mots-clés : éclairage terrasse nuit, idée lumière terrasse
2. **"IP65, IP67, IP68 : quelle protection choisir pour vos luminaires extérieurs ?"**  
   → Mots-clés : ip65 extérieur, indice protection luminaire
3. **"Jardin zen ou méditerranéen : quel éclairage pour chaque style ?"**  
   → Mots-clés : éclairage jardin zen, lampe jardin méditerranéen
4. **"Lampe solaire vs. lampe filaire extérieure : laquelle choisir ?"**  
   → Mots-clés : lampe solaire vs filaire, avantage lampe solaire jardin
5. **"Les 5 erreurs à éviter dans l'éclairage de son extérieur"**  
   → Mots-clés : erreur éclairage extérieur, conseil luminaire jardin

### Vitesse & Core Web Vitals
- Images : WebP uniquement, lazy loading, width/height explicites
- Polices : `font-display: swap`, preconnect Google Fonts
- CSS critique inline, le reste en async
- Objectif Lighthouse : Score > 90 sur mobile

---

## 7. COPYWRITING & TONE OF VOICE

### Voix de la marque
| Attribut | Description |
|---|---|
| **Ton** | Confident mais jamais arrogant. Chaleureux, poétique, expert. |
| **Niveau de langue** | Soutenu sans être précieux — accessible à un lecteur cultivé |
| **Perspective** | "Vous" (vouvoyement) — rapport de qualité, pas de familiarité |
| **Émotions ciblées** | Désir, confiance, appartenance, fierté (de son intérieur/extérieur) |
| **Ce qu'on évite** | Superlatifs vides ("le meilleur"), jargon technique brut, promesses floues |

### Formules à utiliser souvent
- *"Dès la tombée du soir..."* — évoque la transformation
- *"Sans câble, sans contrainte..."* — lève les objections
- *"Comme un hôtel particulier..."* — aspiration lifestyle
- *"Pensé pour durer, conçu pour plaire..."* — rassure sur la qualité
- *"Votre extérieur mérite..."* — empowerment client

### Formules à bannir
- ❌ "Produit de qualité supérieure"
- ❌ "Livraison rapide"  ✅ → "Livré en 3 jours ouvrés"
- ❌ "Nous sommes les meilleurs"
- ❌ "Parfait pour" (trop générique)  ✅ → être spécifique sur l'usage

---

## 8. SPÉCIFICATIONS TECHNIQUES SHOPIFY

### Thème de base recommandé
**Dawn** (gratuit, officiel Shopify) ou **Impulse** (Archetype Themes) — personnalisation complète via le thème editor + CSS/Liquid custom.

### Structure des fichiers à créer / modifier
```
theme/
├── layout/
│   └── theme.liquid            # Header, footer, balises meta, JSON-LD
├── templates/
│   ├── index.json              # Homepage sections
│   ├── product.json            # Product page sections
│   └── collection.json         # Collection pages
├── sections/
│   ├── hero-cinematic.liquid   # Hero plein écran vidéo/image
│   ├── usp-band.liquid         # Bande 4 USPs
│   ├── product-form.liquid     # Formulaire produit custom (CTA, qty, variants)
│   ├── product-description.liquid # Description structurée
│   ├── reviews-widget.liquid   # Intégration Judge.me
│   ├── product-specs.liquid    # Tableau spécifications
│   ├── shipping-snippet.liquid # Snippet livraison
│   ├── returns-snippet.liquid  # Snippet retours
│   ├── faq-product.liquid      # FAQ accordéon par produit
│   └── related-products.liquid # Produits associés
├── snippets/
│   ├── product-badge.liquid    # Badge (Best-seller, Nouveau…)
│   ├── star-rating.liquid      # Étoiles réutilisables
│   └── gold-rule.liquid        # Séparateur or
├── assets/
│   ├── lueur-studio.css        # Toutes les CSS custom (design system complet)
│   └── lueur-studio.js         # JS custom (scroll animations, etc.)
└── locales/
    └── fr.default.json         # Traductions françaises (toutes les chaînes)
```

### Paramètres Shopify (admin)
```yaml
Langue principale:         Français
Devise:                    Euro (EUR)
Fuseau horaire:            Europe/Paris
Unités de poids:           Kilogrammes
Format d'adresse:          France
URL boutique:              lueurstudio.fr (domaine personnalisé)
Checkout:                  Shopify Payments activé + Klarna/PayPal
Taxes:                     TVA française 20% incluse dans les prix affichés
Politique d'expédition:    Créer dans Admin > Paramètres > Livraison
```

### Métachamps (Metafields) à créer
```
Namespace: product
  - reviews.rating        (Number, décimal)
  - reviews.count         (Number, entier)
  - seo.focus_keyword     (Texte)
  - product.usage         (Texte — terrasse / jardin / allée)
  - product.faq           (JSON — liste de {question, answer})

Namespace: global
  - usp.shipping          (Texte — message livraison)
  - usp.guarantee         (Texte — message garantie)
```
## 9. Skills à utiliser

- https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
