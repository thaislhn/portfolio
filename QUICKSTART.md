# 🌐 Guide de Déploiement

Ce guide explique comment déployer ton portfolio 3D sur différentes plateformes d'hébergement gratuites.

---

## 🚀 Option 1 : GitHub Pages (Recommandé - Gratuit)

### Configuration

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier `package.json`**
   
   Ajouter ces lignes dans `package.json` :
   
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
   - Aller sur ton repository GitHub
   - **Settings** → **Pages**
   - **Source** : choisir la branche `gh-pages`
   - **Save**

✅ **Ton site sera en ligne sur** : `https://votre-username.github.io/portfolio-3d`

**Mise à jour** : À chaque fois que tu veux publier des modifications :
```bash
npm run deploy
```

---

## ⚡ Option 2 : Vercel (Recommandé - Gratuit)

### Déploiement automatique

1. **Créer un compte sur [vercel.com](https://vercel.com)**
   - Se connecter avec GitHub

2. **Importer le projet**
   - Cliquer sur **"New Project"**
   - Importer depuis GitHub
   - Sélectionner ton repository `portfolio-3d`

3. **Configuration**
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - Cliquer sur **"Deploy"**

✅ **Vercel déploie automatiquement !**

**URL personnalisée** : 
- Par défaut : `portfolio-3d.vercel.app`
- Tu peux ajouter ton domaine personnel dans les settings

**Mise à jour automatique** :
- Chaque `git push` sur GitHub déclenche un nouveau déploiement
- Aucune commande supplémentaire nécessaire !

---

## 🌊 Option 3 : Netlify (Gratuit)

### Méthode 1 : Drag & Drop (Simple)

1. **Créer un compte sur [netlify.com](https://netlify.com)**

2. **Build le projet**
   ```bash
   npm run build
   ```

3. **Déployer**
   - Aller sur Netlify Dashboard
   - Drag & drop le dossier `dist` sur la zone de dépôt

✅ **Site en ligne instantanément !**

### Méthode 2 : Git intégration (Automatique)

1. **Connecter avec GitHub**
   - Cliquer sur **"Add new site"** → **"Import from Git"**
   - Sélectionner ton repository

2. **Configuration**
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
   - Cliquer sur **"Deploy"**

✅ **Déploiement automatique à chaque push !**

---

## 🔧 Configuration Vercel (Fichier optionnel)

Créer un fichier `vercel.json` à la racine :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔧 Configuration Netlify (Fichier optionnel)

Créer un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🌍 Domaine personnalisé

### Vercel
1. **Settings** → **Domains**
2. Ajouter ton domaine (ex: `thaislhocine.com`)
3. Configurer les DNS chez ton registrar :
   - Type `A` → `76.76.21.21`
   - Type `CNAME` → `cname.vercel-dns.com`

### Netlify
1. **Domain settings** → **Add custom domain**
2. Suivre les instructions pour configurer les DNS

### GitHub Pages
1. **Settings** → **Pages** → **Custom domain**
2. Ajouter ton domaine
3. Configurer un enregistrement `CNAME` chez ton registrar :
   - `votre-username.github.io`

---

## 📊 Comparaison des plateformes

| Fonctionnalité | GitHub Pages | Vercel | Netlify |
|----------------|-------------|--------|---------|
| **Gratuit** | ✅ Oui | ✅ Oui | ✅ Oui |
| **Déploiement auto** | ❌ Non | ✅ Oui | ✅ Oui |
| **Domaine custom** | ✅ Oui | ✅ Oui | ✅ Oui |
| **SSL/HTTPS** | ✅ Oui | ✅ Oui | ✅ Oui |
| **Build time** | Moyen | Rapide | Rapide |
| **Simplicité** | Moyen | ⭐ Excellent | ⭐ Excellent |

**Recommandation** : **Vercel** pour le meilleur DX (Developer Experience) et déploiement automatique.

---

## 🔍 Vérifier le déploiement

Après le déploiement, teste ces fonctionnalités :

- [ ] Le carrousel 3D s'affiche correctement
- [ ] Le dégradé turquoise est visible
- [ ] Le curseur personnalisé fonctionne
- [ ] Les animations sont fluides
- [ ] La navigation entre projets fonctionne
- [ ] Les pages de détail s'affichent correctement
- [ ] Le site est responsive sur mobile

---

## 🆘 Problèmes de déploiement

### Erreur de build

```bash
# Tester le build localement
npm run build

# Prévisualiser le build
npm run preview
```

### Three.js ne charge pas
- Vérifier que `three` est dans `dependencies` (pas `devDependencies`)
- Vérifier que les images sont accessibles via URL publique

### Routes ne fonctionnent pas
- Vérifier la configuration des redirects (`vercel.json` ou `netlify.toml`)
- Toutes les routes doivent rediriger vers `/index.html`

---

## 💡 Conseils

- **GitHub Pages** : Parfait pour commencer, manuel mais simple
- **Vercel** : Idéal pour déploiement automatique et performances
- **Netlify** : Alternative excellente avec fonctionnalités similaires à Vercel

Choisis la plateforme qui correspond le mieux à tes besoins ! 🚀
