# Setup et Vérification du Projet

## 📦 Installation

### Prérequis
- Node.js >= 20.0.0
- npm >= 6.0.0 (ou yarn)
- Git

### Installation des Dépendances

```bash
# Depuis la racine du projet
yarn install
# ou
npm install
```

### Vérification de l'Installation

```bash
# Vérifier que les dépendances sont installées
ls node_modules | head -10

# Vérifier la version de Node
node --version  # Doit être >= 20.0.0
```

## ✅ Structure des Modules

### Modules Créés

#### Module Commun (`src/modules/common/`)
- ✅ `catalog/BookType.ts` - Types et enums
- ✅ `catalog/BookTypeDetector.ts` - Détecteur de type
- ✅ `catalog/index.ts` - Exports corrects
- ✅ `index.ts` - Point d'entrée du module commun

#### Module Novel Reader (`src/modules/novel-reader/`)
- ✅ `components/NovelReader.tsx` - Composant de base
- ✅ `components/index.ts` - Exports corrects
- ✅ `types/index.ts` - Types TypeScript
- ✅ `index.ts` - Point d'entrée avec exports

#### Module Manga Reader (`src/modules/manga-reader/`)
- ✅ `components/MangaReader.tsx` - Composant de base
- ✅ `components/index.ts` - Exports corrects
- ✅ `types/index.ts` - Types TypeScript
- ✅ `index.ts` - Point d'entrée avec exports

## 🔍 Vérification des Imports

### Imports Disponibles

```typescript
// Depuis n'importe où dans src/
import { BookTypeDetector, BookType } from '../modules/common/catalog';
import { NovelReader } from '../modules/novel-reader';
import { MangaReader } from '../modules/manga-reader';

// Ou depuis le point d'entrée principal
import { BookTypeDetector, NovelReader, MangaReader } from '../modules';
```

### Types

```typescript
// Types pour NovelReader
import { NovelReaderProps, NovelReaderState, ReaderSettings } from '../modules/novel-reader/types';

// Types pour MangaReader
import { MangaReaderProps, MangaReaderState, LayoutMode } from '../modules/manga-reader/types';
```

## 🧪 Tests de Base

### Test BookTypeDetector

```typescript
import Book from './models/Book';
import { BookTypeDetector, BookType } from './modules/common/catalog';

// Test avec un EPUB
const novel = new Book(/* ... */, 'EPUB', /* ... */);
const type = BookTypeDetector.detect(novel);
console.log('Type détecté:', type); // BookType.NOVEL

// Test avec un CBZ
const manga = new Book(/* ... */, 'CBZ', /* ... */);
const mangaType = BookTypeDetector.detect(manga);
console.log('Type détecté:', mangaType); // BookType.MANGA
```

## ⚠️ Problèmes Courants

### "Cannot find module 'react'"
**Solution** : Installer les dépendances
```bash
yarn install
```

### Erreurs TypeScript dans les nouveaux modules
**Solution** : Vérifier que `tsconfig.json` inclut bien `src/`

### Imports relatifs trop longs
**Solution** : Utiliser le point d'entrée `src/modules/index.ts`

### Erreurs de linting
**Solution** : Les erreurs pour react/react-dom sont normales si node_modules n'est pas installé

## 📝 Checklist de Vérification

Avant de commencer à développer :

- [ ] `yarn install` exécuté avec succès
- [ ] `node_modules/` existe
- [ ] Pas d'erreurs TypeScript dans `src/modules/`
- [ ] Les imports fonctionnent dans un fichier de test
- [ ] Le projet compile : `yarn build`
- [ ] Le projet démarre : `yarn dev`

## 🚀 Prochaines Étapes

Une fois les vérifications passées, voir `docs/ROADMAP.md` pour les prochaines étapes de développement.

