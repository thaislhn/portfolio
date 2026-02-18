# Portfolio 3D - Thaïs L'Hocine

Portfolio immersif avec carrousel 3D vertical utilisant Three.js, inspiré du design minimaliste d'Andreas Antonsson.

## 🎨 Caractéristiques

- **Carrousel 3D vertical** avec effet de courbure cylindrique utilisant Three.js
- **Dégradé turquoise sophistiqué** avec effets de texture et de grain
- **Curseur personnalisé** avec détection intelligente des éléments cliquables
- **Animations fluides** avec Motion (Framer Motion)
- **Design responsive** optimisé pour desktop et mobile
- **Navigation multi-pages** avec React Router
- **5 projets** avec pages de détail enrichies

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### ⚠️ Si vous avez des erreurs après l'installation

Si vous voyez des erreurs de type "Failed to fetch dynamically imported module", suivez ces étapes :

1. **Supprimer les caches et node_modules**
   ```bash
   rm -rf node_modules
   rm -rf dist
   npm install
   ```

2. **Relancer le serveur**
   ```bash
   npm run dev
   ```

3. **Vider le cache du navigateur**
   - Ouvrir les DevTools (F12)
   - Cliquer droit sur le bouton de rafraîchissement
   - Sélectionner "Vider le cache et actualiser"

## 📦 Technologies utilisées

- **React** - Framework UI
- **TypeScript** - Typage statique
- **Three.js** - Rendu 3D WebGL
- **Motion** (Framer Motion) - Animations
- **React Router** - Navigation
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool

## 🎯 Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx    # Curseur personnalisé
│   │   ├── Header.tsx           # En-tête du site
│   │   ├── SideNav.tsx          # Navigation latérale
│   │   └── figma/
│   │       └── ImageWithFallback.tsx  # Composant image avec fallback
│   ├── pages/
│   │   ├── Home.tsx             # Page d'accueil avec carrousel 3D
│   │   └── ProjectDetail.tsx    # Pages de détail des projets
│   ├── App.tsx                  # Composant racine
│   └── routes.tsx               # Configuration du routing
├── styles/
│   ├── fonts.css                # Police Bodoni Moda (Dahlia)
│   ├── index.css                # Styles globaux
│   ├── tailwind.css             # Configuration Tailwind
│   └── theme.css                # Thème et tokens CSS
└── vite.config.ts               # Configuration Vite
```

## 🎨 Design System

### Couleurs

- **Fond principal** : Dégradé turquoise (#0a3f3f → #c2d9d9)
- **Accent** : Vert lime (#0f1)
- **Texte** : Blanc (#ffffff)

### Typographie

- **Titres** : Bodoni Moda (police Google Fonts "Dahlia")
- **Corps de texte** : Système par défaut

### Effets visuels

- Grain et texture multicouches
- Effet diagonal lumineux
- Bruit statique pour profondeur
- Blend modes : overlay, soft-light

## 📝 Projets inclus

1. **BNF** - Borne interactive pour la Bibliothèque Nationale de France
2. **Date Mark** - Design d'application moderne
3. **Pochette CD** - Design graphique et 3D
4. **Underdog** - Stage et web design
5. **Court Métrage Pop Culture** - Film et web design

## 🔧 Développement

### Scripts disponibles

```bash
npm run dev       # Démarrer le serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build de production
```

### Notes techniques

- Le carrousel 3D utilise des shaders personnalisés pour l'effet de courbure
- Le renderer WebGL est configuré avec `alpha: true` pour transparence
- Les images sont chargées depuis Unsplash et Cloudinary
- Le z-index est géré avec précision : dégradé (z-0), canvas (z-5), overlay (z-20)

## 📤 Déploiement avec GitHub

### Première fois : Créer un nouveau repository

1. **Créer un repository sur GitHub**
   - Aller sur [github.com](https://github.com) et se connecter
   - Cliquer sur le bouton **"New repository"** (ou "+")
   - Donner un nom (ex: `portfolio-3d`)
   - Choisir **Public** ou **Private**
   - **NE PAS** cocher "Initialize with README" (on a déjà un README)
   - Cliquer sur **"Create repository"**

2. **Initialiser Git dans votre projet local**
   ```bash
   # Se placer dans le dossier du projet
   cd /Users/siathais/Downloads/Recreate\ 3D\ Carousel\ Site
   
   # Initialiser Git
   git init
   
   # Ajouter tous les fichiers
   git add .
   
   # Créer le premier commit
   git commit -m "Initial commit: Portfolio 3D avec carrousel Three.js"
   ```

3. **Connecter le projet local avec GitHub**
   ```bash
   # Remplacer "votre-username" et "portfolio-3d" par vos infos
   git remote add origin https://github.com/thaislhn/portfolio.git
   
   # Vérifier la connexion
   git remote -v
   
   # Pousser le code sur GitHub
   git branch -M main
   git push -u origin main
   ```

### Si vous avez déjà un repository existant

**Option 1 : Cloner un repository existant**
```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio-3d.git

# Entrer dans le dossier
cd portfolio-3d

# Installer les dépendances
npm install

# Lancer le projet
npm run dev
```

**Option 2 : Connecter ce projet à un repository existant**
```bash
# Ajouter le remote (remplacer par votre URL)
git remote add origin https://github.com/votre-username/portfolio-3d.git

# Récupérer les données du repository distant
git fetch origin

# Fusionner avec le repository distant (si nécessaire)
git pull origin main --allow-unrelated-histories

# Pousser vos modifications
git push -u origin main
```

### Workflow quotidien Git

```bash
# 1. Vérifier l'état des fichiers modifiés
git status

# 2. Ajouter les fichiers modifiés
git add .                    # Ajouter tous les fichiers
# OU
git add src/app/pages/Home.tsx  # Ajouter un fichier spécifique

# 3. Créer un commit avec un message descriptif
git commit -m "feat: Ajout du dégradé turquoise au carrousel"

# 4. Pousser sur GitHub
git push

# 5. Récupérer les modifications distantes (si collaboration)
git pull
```

### Messages de commit recommandés

```bash
git commit -m "feat: Nouvelle fonctionnalité"
git commit -m "fix: Correction du bug du carrousel"
git commit -m "style: Amélioration du dégradé de fond"
git commit -m "docs: Mise à jour du README"
git commit -m "refactor: Réorganisation du code Three.js"
git commit -m "perf: Optimisation du rendu WebGL"
```

### Fichier .gitignore

Créer un fichier `.gitignore` à la racine pour ignorer les fichiers inutiles :

```gitignore
# Dépendances
node_modules/
.pnp
.pnp.js

# Production
dist/
build/

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environnement
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Cache
.cache/
.parcel-cache/
```

### Déploiement automatique avec GitHub Pages

Pour déployer automatiquement sur GitHub Pages :

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier package.json**
   ```json
   {
     "homepage": "https://votre-username.github.io/portfolio-3d",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

4. **Activer GitHub Pages**
   - Aller sur votre repository GitHub
   - Settings → Pages
   - Source : choisir `gh-pages` branch
   - Save

Votre site sera accessible sur `https://votre-username.github.io/portfolio-3d`

### Commandes Git utiles

```bash
# Voir l'historique des commits
git log --oneline

# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Changer de branche
git checkout main

# Fusionner une branche
git merge feature/nouvelle-fonctionnalite

# Annuler les modifications locales
git restore .

# Voir les différences
git diff
```

## 🌟 Optimisations

- Rendu Three.js optimisé avec `setPixelRatio` limité
- Cleanup automatique du renderer pour éviter les fuites mémoire
- Images optimisées avec lazy loading
- Animations GPU-accélérées avec Motion

## 📄 Licence

© 2026 Thaïs L'Hocine - Tous droits réservés

## 🔗 Contact

En recherche d'alternance - Février 2026# portfolio
