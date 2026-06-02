# Lueur Studio — Thème Shopify

Thème Shopify sur-mesure pour **Lueur Studio**, maison française de luminaires d'extérieur haut de gamme.
Construit selon le brief `docs/CLAUDE.md` (charte bleu nuit + or + ambre, typographies Cormorant Garamond / Jost).

> Le thème est à la **racine du repo** (requis par l'intégration GitHub de Shopify).

## 📁 Structure

```
.
├── assets/         lueur-studio.css (design system), lueur-studio.js (interactions)
├── config/         settings_schema.json, settings_data.json
├── layout/         theme.liquid (head, meta, JSON-LD, skip-link)
├── locales/        fr.default.json (défaut), en.json
├── sections/       header, footer, hero, usp, produits, description, specs, faq, etc.
├── snippets/       product-card, media (placeholder), star-rating, badge, icon, gold-rule, swatch-color
├── templates/      index, product, collection, page, blog, article, cart, search, 404 (JSON)
├── docs/           CLAUDE.md (brief de marque)
└── products-import.csv
```

Tous les fichiers passent **Shopify Theme Check** (0 erreur).

---

## 🚀 Voir le site en local (aperçu live)

### Prérequis
- **Shopify CLI** (déjà installé : `shopify version` → 4.x)
- Un **development store** gratuit créé sur [partners.shopify.com](https://partners.shopify.com)
  (Stores → Add store → Create development store)

### Lancer l'aperçu
```bash
shopify theme dev --store VOTRE-BOUTIQUE.myshopify.com
```
- La 1ʳᵉ fois : connexion via le navigateur.
- Aperçu live sur **http://127.0.0.1:9292** avec rechargement auto.
- Ouvre aussi un lien d'aperçu de l'éditeur de thème.

---

## 📦 Importer les produits

1. Admin Shopify → **Produits** → **Importer**.
2. Choisir le fichier `products-import.csv` (à la racine du repo).
3. Importer → les 3 luminaires (Sanctum Sol, Aura Mural, Nomade Terrasse) sont créés avec variantes, prix, SEO.

> Les visuels affichent un placeholder « Visuel à venir » tant qu'aucune image n'est ajoutée.
> Ajoutez vos photos par produit dans l'admin (format portrait 1200×1500px conseillé, fond `#0D1B2A`).

### Collections à créer (manuellement ou auto par tag)
| Collection | Handle | Condition (tag) |
|---|---|---|
| Toute la collection | `all` | (automatique) |
| Terrasse | `terrasse` | tag = `terrasse` |
| Jardin | `jardin` | tag = `jardin` |
| Bornes & allées | `allees` | tag = `allees` |

### Pages à créer (Admin → Pages)
`guide-achat`, `materiaux`, `a-propos`, `livraison`, `retours`, `garantie`, `faq`, `contact`
→ utilisent toutes le template `page` (déjà prêt).

### Blog
Admin → Boutique en ligne → Blogs → créer un blog de handle **`inspirations`**
(la home et le menu y pointent déjà).

---

## 🔧 Déployer / synchroniser

```bash
# Pousser le thème vers le store (crée un thème non publié)
shopify theme push --store VOTRE-BOUTIQUE.myshopify.com

# Récupérer les modifs faites dans l'éditeur en ligne
shopify theme pull --store VOTRE-BOUTIQUE.myshopify.com

# Lister les thèmes du store
shopify theme list --store VOTRE-BOUTIQUE.myshopify.com
```

---

## 🐙 Déploiement via GitHub (auto-sync)

L'intégration GitHub de Shopify synchronise un repo ↔ un thème : chaque `git push`
met à jour le thème dans le store (et les modifs faites dans l'éditeur sont commitées vers GitHub).

> Prérequis : le thème doit être à la **racine du repo** (c'est le cas ici).

1. **Pousser ce repo sur GitHub**
   ```bash
   git remote add origin git@github.com:VOTRE-USER/lueur-studio.git
   git push -u origin main
   ```
2. **Connecter dans Shopify** : Admin → Boutique en ligne → Thèmes →
   *Ajouter un thème* → **Connecter depuis GitHub** → autoriser → choisir le repo + branche `main`.
3. Shopify importe le thème en **non publié**. Vérifiez-le via *Personnaliser* / *Aperçu*.
4. **Publier** : Thèmes → (le thème) → **Publier**, puis désactivez la protection par
   mot de passe (Préférences) pour ouvrir la boutique.

> Vente réelle = forfait Shopify payant + domaine. Le dev store permet de voir/déployer le thème mais pas de vendre.

---

## ⚙️ Paramètres recommandés (Admin → Paramètres)
- **Langue** : Français · **Devise** : EUR · **Fuseau** : Europe/Paris
- **Taxes** : TVA 20% incluse dans les prix affichés
- **Paiements** : Shopify Payments + Klarna (3x) + PayPal
- **Livraison** : offerte dès 150€ (cohérent avec les messages du thème)

## 🧩 Applications conseillées (du brief)
- **Judge.me** (avis clients FR) — la section « Avis clients » est prête à recevoir le widget.
- Widget **Trustpilot** (preuve sociale).

## 🎨 Personnalisation rapide
Couleurs & messages globaux : **Éditeur de thème → Paramètres du thème** (Couleurs, Réassurance, Réseaux sociaux),
ou directement dans `config/settings_data.json`.
Chaque section a ses réglages dans l'éditeur (titres, images, CTA, blocs).
