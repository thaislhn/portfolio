# 💻 Guide Visual Studio Code

## 🎯 Extensions recommandées

Lorsque tu ouvriras le projet dans VS Code, tu verras une notification pour installer les extensions recommandées. Clique sur **"Installer tout"** pour :

- **Tailwind CSS IntelliSense** - Autocomplétion Tailwind
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique
- **TS Importer** - Import automatique des types TypeScript

---

## ⌨️ Raccourcis utiles

### Terminal intégré
- **Ouvrir** : `Ctrl + ù` (Mac: `Cmd + ù`)
- **Nouveau terminal** : `Ctrl + Shift + ù`

### Commandes fréquentes dans le terminal

```bash
# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

### Navigation
- **Ouvrir un fichier** : `Ctrl + P` puis taper le nom du fichier
- **Chercher dans les fichiers** : `Ctrl + Shift + F`
- **Aller à la définition** : `F12`
- **Renommer un symbole** : `F2`

### Édition
- **Formater le document** : `Shift + Alt + F`
- **Multi-curseur** : `Alt + Clic`
- **Dupliquer une ligne** : `Shift + Alt + ↓`
- **Commenter** : `Ctrl + /`

---

## 📁 Structure du projet dans VS Code

```
📂 portfolio-3d/
├── 📂 .vscode/              # Configuration VS Code
│   ├── extensions.json      # Extensions recommandées
│   └── settings.json        # Paramètres du projet
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 components/   # ← Composants réutilisables
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Header.tsx
│   │   │   └── SideNav.tsx
│   │   ├── 📂 pages/        # ← Pages principales
│   │   │   ├── Home.tsx     # Carrousel 3D
│   │   │   └── ProjectDetail.tsx
│   │   ├── App.tsx          # Composant racine
│   │   └── routes.tsx       # Configuration routing
│   ├── 📂 styles/           # ← Styles CSS
│   │   ├── fonts.css        # Police Bodoni Moda
│   │   ├── index.css        # Styles globaux
│   │   ├── tailwind.css     # Tailwind CSS
│   │   └── theme.css        # Thème custom
│   └── main.tsx             # Point d'entrée React
├── index.html               # HTML principal
├── package.json             # Dépendances npm
├── tsconfig.json            # Config TypeScript
├── vite.config.ts           # Config Vite
├── .gitignore               # Fichiers à ignorer
└── README.md                # Documentation

Fichiers importants pour modifier :
• Home.tsx - Carrousel 3D et projets
• ProjectDetail.tsx - Pages de détail
• theme.css - Couleurs et styles
```

---

## 🎨 Workflow de développement

### 1. Ouvrir le projet
```bash
cd /Users/siathais/Downloads/Recreate\ 3D\ Carousel\ Site
code .
```

### 2. Lancer le serveur (dans le terminal VS Code)
```bash
npm run dev
```

### 3. Modifier le code
- Fichier ouvert automatiquement sauvegardé (formaté avec Prettier)
- Le navigateur se recharge automatiquement (hot reload)
- Les erreurs TypeScript s'affichent en temps réel

### 4. Sauvegarder sur GitHub
```bash
git add .
git commit -m "Description des modifications"
git push
```

---

## 🐛 Débogage dans VS Code

### Erreurs TypeScript
- Les erreurs s'affichent directement dans l'éditeur (soulignées en rouge)
- Panneau **"Problèmes"** en bas : `Ctrl + Shift + M`

### Console navigateur
- Ouvrir DevTools dans le navigateur : `F12`
- Onglet **Console** pour les erreurs JavaScript

### Points d'arrêt (Breakpoints)
1. Ajouter un `debugger;` dans le code
2. Ouvrir DevTools dans le navigateur
3. Le code s'arrêtera à ce point

---

## 💡 Astuces VS Code

### Snippets React utiles

- `rfc` + Tab → Créer un composant fonctionnel
- `useS` + Tab → `useState`
- `useE` + Tab → `useEffect`

### Recherche intelligente

**Chercher un fichier spécifique** :
- `Ctrl + P` puis taper : `Home` → trouve `Home.tsx`

**Chercher dans tous les fichiers** :
- `Ctrl + Shift + F` puis taper : `projects`

**Aller à un symbole** :
- `Ctrl + Shift + O` → Liste des fonctions/variables du fichier actuel

---

## 🔥 Commandes Git dans VS Code

### Interface graphique (Source Control)
1. **Panneau Source Control** : `Ctrl + Shift + G`
2. Voir les fichiers modifiés
3. Cliquer sur `+` pour stage
4. Entrer un message de commit
5. Cliquer sur **"Commit"**
6. Cliquer sur **"Sync Changes"** pour push

### Terminal (ligne de commande)
```bash
git status
git add .
git commit -m "feat: Ajout nouvelle feature"
git push
```

---

## 📦 Ajouter un package npm

### Méthode 1 : Terminal
```bash
npm install nom-du-package
```

### Méthode 2 : package.json
1. Ouvrir `package.json`
2. Ajouter le package dans `dependencies`
3. Sauvegarder
4. Terminal : `npm install`

---

## 🎯 Checklist avant de coder

- [ ] Serveur lancé (`npm run dev`)
- [ ] Navigateur ouvert sur `http://localhost:5173/`
- [ ] DevTools ouvert (`F12`) pour voir les erreurs
- [ ] Terminal VS Code visible
- [ ] Extensions recommandées installées

---

## 🚀 Checklist avant de déployer

- [ ] `npm run build` fonctionne sans erreurs
- [ ] `npm run preview` affiche correctement le site
- [ ] Toutes les images se chargent
- [ ] Le carrousel 3D fonctionne
- [ ] Les animations sont fluides
- [ ] Test sur mobile/responsive
- [ ] Git commit & push
- [ ] Lancer `npm run deploy` (GitHub Pages) ou push (Vercel/Netlify)

---

Bon code ! 💻✨
