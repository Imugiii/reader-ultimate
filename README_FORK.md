# Koodo Reader - Fork Personnalisé

## Description

Ce projet est un fork personnalisé de [Koodo Reader](https://github.com/koodo-reader/koodo-reader), un lecteur d'ebooks multi-plateforme. L'objectif de ce fork est de créer deux lecteurs spécialisés dans la même application :

- **Lecteur de romans/webnovels/light novels** : Optimisé pour le texte avec fonctionnalités avancées de prise de notes, dictionnaires et synchronisation
- **Lecteur de mangas/webtoons** : Optimisé pour les images avec zoom, double page, scroll vertical/horizontal

## 🚀 Démarrage Rapide

### Prérequis

- Node.js >= 20.0.0
- npm >= 6.0.0 (ou yarn)
- Git

### Installation

```bash
# Cloner le projet
git clone https://github.com/Imugiii/reader-ultimate.git
cd reader-ultimate

# Installer les dépendances
yarn install

# Rebuild des modules natifs
yarn rebuild
```

### Développement

```bash
# Mode desktop (Electron + React)
yarn dev

# Mode web uniquement
yarn start
```

## 📁 Structure du Projet

```
Koodo/
├── docs/                  # Documentation complète
│   ├── ARCHITECTURE.md   # Architecture détaillée
│   ├── ROADMAP.md        # Roadmap du projet
│   ├── UML_DIAGRAMS.md   # Diagrammes UML
│   ├── DEVELOPMENT.md    # Guide de développement
│   ├── VERSIONING.md     # Guide de versioning
│   ├── RELEASE_PROCESS.md # Processus de release
│   └── BRANCHES.md       # Gestion des branches
├── scripts/              # Scripts utilitaires
│   └── version.sh        # Script de versioning
├── src/                  # Code source
│   ├── modules/          # Modules spécialisés (à créer)
│   ├── components/      # Composants React
│   ├── containers/      # Containers Redux
│   └── ...
├── CHANGELOG.md         # Historique des changements
└── package.json         # Configuration npm
```

## 🌿 Branches

### Branches Principales

- **`master`** : Versions stables uniquement
- **`devtest`** : Développement et tests

### Workflow

1. Créer une branche depuis `devtest` : `feature/nom-fonctionnalite`
2. Développer et tester
3. Créer une Pull Request vers `devtest`
4. Après validation, merger dans `master` pour release

Voir [docs/BRANCHES.md](docs/BRANCHES.md) pour plus de détails.

## 📦 Versioning

Le projet utilise [Semantic Versioning](https://semver.org/) :

- **MAJOR.MINOR.PATCH** : Versions stables (`2.2.3`)
- **MAJOR.MINOR.PATCH-devtest.N** : Versions de test (`2.2.3-devtest.1`)
- **MAJOR.MINOR.PATCH-beta.N** : Versions bêta (`2.2.3-beta.1`)
- **MAJOR.MINOR.PATCH-rc.N** : Release candidates (`2.2.3-rc.1`)

### Créer une Version

```bash
# Version de test
./scripts/version.sh prerelease devtest

# Version stable (sur master uniquement)
./scripts/version.sh patch  # ou minor, major
```

Voir [docs/VERSIONING.md](docs/VERSIONING.md) pour plus de détails.

## 🏗️ Architecture

Le projet est organisé en modules :

- **Module Commun** : Catalogue, authentification, plugins, paramètres
- **Module Novel Reader** : Lecteur de romans/webnovels
- **Module Manga Reader** : Lecteur de mangas/webtoons
- **Module Sync** : Synchronisation multi-cloud
- **Module Plugins** : Système d'extensions

Voir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) pour l'architecture complète.

## 📋 Roadmap

### Phase 1 : Restructuration Modulaire (En cours)
- [x] Documentation d'architecture
- [x] Système de versioning
- [ ] Module commun
- [ ] Refactoring du store Redux

### Phase 2 : Lecteur de Romans
- [ ] Structure de base
- [ ] Fonctionnalités avancées
- [ ] Optimisations

### Phase 3 : Lecteur de Mangas
- [ ] Structure de base
- [ ] Fonctionnalités d'affichage
- [ ] Optimisations

### Phase 4 : Synchronisation
- [ ] Adaptateurs de synchronisation
- [ ] Gestion des conflits

### Phase 5 : Système de Plugins
- [ ] Infrastructure
- [ ] Plugins de base

Voir [docs/ROADMAP.md](docs/ROADMAP.md) pour la roadmap complète.

## 🧪 Tests

```bash
# Lancer les tests
yarn test

# Tests en mode watch
yarn test:watch
```

## 📝 Contribution

### Workflow de Contribution

1. Fork le projet
2. Créer une branche depuis `devtest` : `git checkout -b feature/ma-fonctionnalite`
3. Développer et tester
4. Commiter : `git commit -m "feat: ma fonctionnalité"`
5. Pousser : `git push origin feature/ma-fonctionnalite`
6. Créer une Pull Request vers `devtest`

### Conventions

- **Commits** : Suivre [Conventional Commits](https://www.conventionalcommits.org/)
- **Code** : Suivre les conventions dans [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- **Tests** : Ajouter des tests pour les nouvelles fonctionnalités

## 📚 Documentation

- [Architecture](docs/ARCHITECTURE.md) : Architecture détaillée du projet
- [Roadmap](docs/ROADMAP.md) : Plan de développement
- [UML Diagrams](docs/UML_DIAGRAMS.md) : Diagrammes UML
- [Development Guide](docs/DEVELOPMENT.md) : Guide de développement
- [Versioning](docs/VERSIONING.md) : Guide de versioning
- [Release Process](docs/RELEASE_PROCESS.md) : Processus de release
- [Branches](docs/BRANCHES.md) : Gestion des branches

## 🔄 Releases

### Processus de Release

1. Développement sur `devtest`
2. Tests et validation
3. Release Candidate (optionnel)
4. Merge dans `master`
5. Création du tag et release GitHub
6. Builds et publication

Voir [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) pour le processus complet.

### Historique des Versions

Voir [CHANGELOG.md](CHANGELOG.md) pour l'historique complet des changements.

## 🐛 Signaler un Bug

Créer une issue sur GitHub avec :
- Description du bug
- Étapes pour reproduire
- Comportement attendu vs actuel
- Environnement (OS, version, etc.)

## 💡 Suggestions

Les suggestions sont les bienvenues ! Créer une issue avec le label `enhancement`.

## 📄 Licence

Ce projet est sous licence AGPL-3.0 (comme le projet original).

## 🙏 Remerciements

- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) : Projet original
- Tous les contributeurs

## 📞 Contact

- GitHub Issues : Pour les bugs et suggestions
- Documentation : Voir le dossier `docs/`

---

**Note** : Ce projet est en développement actif. Les fonctionnalités peuvent changer.

