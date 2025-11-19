# Workflow Git - Branches, Versioning et Releases

## Branches

### Branches Principales

**`master`** : Versions stables uniquement
- Protection : Ne doit pas être modifiée directement
- Merges : Uniquement depuis `devtest` après validation
- Tags : Versions stables (`v2.2.3`, `v2.3.0`, etc.)

**`devtest`** : Développement et tests
- Branche de travail principale
- Merges : Depuis les branches de fonctionnalités
- Tags : Versions de test (`v2.2.3-devtest.1`, `v2.2.3-beta.1`, etc.)

### Types de Branches

- **`feature/*`** : Nouvelles fonctionnalités
- **`bugfix/*`** : Corrections de bugs
- **`hotfix/*`** : Corrections urgentes
- **`release/vX.Y.Z`** : Préparation de release

### Workflow de Développement

```bash
# 1. Créer une branche depuis devtest
git checkout devtest
git pull origin devtest
git checkout -b feature/ma-fonctionnalite

# 2. Développer et commiter
git add .
git commit -m "feat: ma fonctionnalité"
git push origin feature/ma-fonctionnalite

# 3. Créer PR vers devtest (sur GitHub)
# 4. Après merge, nettoyer
git checkout devtest
git pull origin devtest
git branch -d feature/ma-fonctionnalite
```

## Versioning

### Semantic Versioning (SemVer)

Format : `MAJOR.MINOR.PATCH[-PRERELEASE]`

- **MAJOR** : Changements incompatibles
- **MINOR** : Nouvelles fonctionnalités rétrocompatibles
- **PATCH** : Corrections de bugs

### Pré-versions

- **`-devtest.X`** : Versions de test
- **`-beta.X`** : Versions bêta
- **`-rc.X`** : Release candidates

### Créer une Version

```bash
# Version de test
./scripts/version.sh prerelease devtest

# Version stable (sur master uniquement)
./scripts/version.sh patch  # ou minor, major
```

## Processus de Release

### 1. Développement sur devtest

```bash
git checkout devtest
git pull origin devtest

# Créer une version de test
./scripts/version.sh prerelease devtest

# Développer et tester
# ...
```

### 2. Validation

- [ ] Tests unitaires passent
- [ ] Tests d'intégration passent
- [ ] Tests manuels sur toutes les plateformes
- [ ] Vérification des fonctionnalités critiques

### 3. Release Candidate (optionnel)

```bash
./scripts/version.sh prerelease rc
```

### 4. Release Stable

```bash
# Merger dans master
git checkout master
git merge devtest

# Créer la version stable
./scripts/version.sh patch

# Créer le tag et push
git tag -a v2.2.3 -m "Release version 2.2.3"
git push origin master
git push origin v2.2.3
```

### 5. Builds et Publication

```bash
# Build pour toutes les plateformes
yarn prerelease && yarn release

# Créer la release GitHub avec les builds
```

## Gestion des Tags

```bash
# Créer un tag
git tag -a v2.2.3 -m "Release version 2.2.3"
git push origin v2.2.3

# Lister les tags
git tag -l "v2.2.*"

# Supprimer un tag
git tag -d v2.2.3
git push origin :refs/tags/v2.2.3
```

## Checklist de Release

### Avant la Release
- [ ] Tous les tests passent
- [ ] Documentation à jour
- [ ] CHANGELOG.md mis à jour
- [ ] Version dans package.json correcte

### Pendant la Release
- [ ] Tag créé
- [ ] Release GitHub créée
- [ ] Builds créés et testés
- [ ] Builds uploadés

### Après la Release
- [ ] Vérifier que les builds sont disponibles
- [ ] Surveiller les issues

## Commandes Utiles

```bash
# Voir les branches
git branch -vv

# Voir les remotes
git remote -v

# Vérifier le remote origin
git remote get-url origin

# Voir l'historique
git log --oneline --all --graph -10
```

