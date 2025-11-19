# Roadmap - Fork Koodo Reader

## Vue d'ensemble

Cette roadmap détaille les étapes pour transformer Koodo Reader en une application avec deux lecteurs spécialisés : un pour les romans/webnovels et un pour les mangas/webtoons.

## Phase 0 : Préparation et Analyse (✅ En cours)

### Jalons
- [x] Cloner le fork du projet
- [x] Analyser l'architecture existante
- [x] Documenter l'architecture actuelle
- [ ] Créer les diagrammes UML
- [ ] Préparer l'environnement de développement

### Livrables
- Documentation d'architecture
- Diagrammes UML (classes, composants, séquences)
- Plan de migration

## Phase 1 : Restructuration Modulaire (Durée estimée : 2-3 semaines)

### Jalon 1.1 : Module Commun
**Objectif** : Extraire et organiser le code commun

#### Tâches
- [ ] Créer la structure de dossiers `src/modules/common/`
- [ ] Extraire `BookManager` depuis les utilitaires existants
- [ ] Créer `BookTypeDetector` pour identifier romans vs mangas
- [ ] Extraire `AuthService` et `CloudAccountManager`
- [ ] Créer `PluginManager` et `PluginAPI` de base
- [ ] Extraire `SettingsManager` et services associés
- [ ] Migrer les composants UI communs

#### Critères de succès
- Tous les services communs sont dans `modules/common/`
- Aucune régression fonctionnelle
- Tests unitaires pour les services critiques

### Jalon 1.2 : Refactoring du Store Redux
**Objectif** : Adapter le store pour supporter deux types de lecteurs

#### Tâches
- [ ] Créer `readerType` dans le store (novel | manga)
- [ ] Séparer les états de lecture (novelState, mangaState)
- [ ] Créer des actions spécifiques par type de lecteur
- [ ] Adapter les reducers existants
- [ ] Migrer les sélecteurs

#### Critères de succès
- Le store supporte les deux types de lecteurs
- Les actions sont typées correctement
- Pas de breaking changes pour l'UI existante

## Phase 2 : Lecteur de Romans (Durée estimée : 3-4 semaines)

### Jalon 2.1 : Structure de Base
**Objectif** : Créer la structure du module novel-reader

#### Tâches
- [ ] Créer `src/modules/novel-reader/`
- [ ] Créer `NovelReader` component (basé sur Reader existant)
- [ ] Créer `TextRenderer` pour le rendu texte optimisé
- [ ] Adapter les composants de settings pour romans
- [ ] Créer les routes pour le lecteur de romans

#### Critères de succès
- Le lecteur de romans s'ouvre correctement
- Affichage texte fonctionnel
- Navigation basique opérationnelle

### Jalon 2.2 : Fonctionnalités Avancées
**Objectif** : Implémenter les fonctionnalités spécifiques aux romans

#### Tâches
- [ ] Système de notes avancé (annotations, surlignage)
- [ ] Intégration dictionnaire contextuel
- [ ] Service AI (traduction, résumé)
- [ ] Synchronisation des annotations
- [ ] Support formats texte (EPUB, MOBI, TXT, FB2, HTML, DOCX)

#### Critères de succès
- Prise de notes fonctionnelle
- Dictionnaire accessible depuis le texte
- Traduction AI opérationnelle
- Synchronisation des annotations testée

### Jalon 2.3 : Optimisations
**Objectif** : Optimiser l'expérience de lecture texte

#### Tâches
- [ ] Optimisation du rendu texte (performance)
- [ ] Amélioration de la mise en page
- [ ] Support des polices personnalisées
- [ ] Mode sombre optimisé pour texte
- [ ] Accessibilité (lecture vocale, navigation clavier)

#### Critères de succès
- Performance fluide même avec de gros fichiers
- Mise en page agréable et lisible
- Accessibilité conforme aux standards

## Phase 3 : Lecteur de Mangas (Durée estimée : 3-4 semaines)

### Jalon 3.1 : Structure de Base
**Objectif** : Créer la structure du module manga-reader

#### Tâches
- [ ] Créer `src/modules/manga-reader/`
- [ ] Créer `MangaReader` component
- [ ] Créer `ImageRenderer` pour le rendu images
- [ ] Adapter les composants de settings pour mangas
- [ ] Créer les routes pour le lecteur de mangas

#### Critères de succès
- Le lecteur de mangas s'ouvre correctement
- Affichage images fonctionnel
- Navigation basique opérationnelle

### Jalon 3.2 : Fonctionnalités d'Affichage
**Objectif** : Implémenter les modes d'affichage pour mangas

#### Tâches
- [ ] Mode single page
- [ ] Mode double page
- [ ] Scroll vertical
- [ ] Scroll horizontal
- [ ] Mode webtoon (scroll continu)
- [ ] Système de zoom (pinch-to-zoom, boutons)
- [ ] Support formats comics (CBZ, CBR, CBT, CB7)

#### Critères de succès
- Tous les modes d'affichage fonctionnent
- Zoom fluide et performant
- Support complet des formats comics

### Jalon 3.3 : Optimisations
**Objectif** : Optimiser l'expérience de lecture images

#### Tâches
- [ ] Préchargement intelligent des images
- [ ] Cache d'images optimisé
- [ ] Lazy loading des pages
- [ ] Compression adaptative selon connexion
- [ ] Support du plein écran

#### Critères de succès
- Chargement rapide même avec beaucoup d'images
- Navigation fluide entre pages
- Expérience optimale sur mobile et desktop

## Phase 4 : Synchronisation (Durée estimée : 2-3 semaines)

### Jalon 4.1 : Adaptateurs de Synchronisation
**Objectif** : Créer les adaptateurs pour chaque type de lecteur

#### Tâches
- [ ] Créer `NovelSyncAdapter` (annotations, progression texte)
- [ ] Créer `MangaSyncAdapter` (bookmarks, progression images)
- [ ] Adapter les services cloud existants
- [ ] Créer le système de détection automatique du type

#### Critères de succès
- Synchronisation différenciée fonctionnelle
- Pas de perte de données lors de la sync
- Support de tous les services cloud existants

### Jalon 4.2 : Gestion des Conflits
**Objectif** : Implémenter la résolution de conflits

#### Tâches
- [ ] Créer `ConflictResolver`
- [ ] Implémenter stratégies de fusion
- [ ] Interface utilisateur pour résolution manuelle
- [ ] Système de sauvegarde avant sync

#### Critères de succès
- Détection correcte des conflits
- Résolution automatique quand possible
- Interface claire pour résolution manuelle

## Phase 5 : Système de Plugins (Durée estimée : 2-3 semaines)

### Jalon 5.1 : Infrastructure
**Objectif** : Créer l'infrastructure de base pour les plugins

#### Tâches
- [ ] Finaliser `PluginAPI` et interfaces
- [ ] Créer `PluginRegistry`
- [ ] Implémenter `PluginLoader` dynamique
- [ ] Système d'événements pour plugins
- [ ] Documentation API pour développeurs

#### Critères de succès
- Chargement dynamique de plugins fonctionnel
- API claire et documentée
- Exemples de plugins fournis

### Jalon 5.2 : Plugins de Base
**Objectif** : Créer quelques plugins d'exemple

#### Tâches
- [ ] Plugin dictionnaire exemple
- [ ] Plugin TTS exemple
- [ ] Plugin source manga exemple
- [ ] Interface de gestion des plugins (installer/désinstaller)

#### Critères de succès
- Plugins d'exemple fonctionnels
- Interface de gestion intuitive
- Documentation complète

## Phase 6 : Intégration et Tests (Durée estimée : 2 semaines)

### Jalon 6.1 : Intégration Complète
**Objectif** : Intégrer tous les modules

#### Tâches
- [ ] Intégrer les deux lecteurs dans l'application principale
- [ ] Détection automatique du type de livre
- [ ] Routing adaptatif selon le type
- [ ] Tests d'intégration end-to-end

#### Critères de succès
- Application complète fonctionnelle
- Détection automatique fiable
- Pas de régressions majeures

### Jalon 6.2 : Tests et Optimisations
**Objectif** : Tester et optimiser l'ensemble

#### Tâches
- [ ] Tests unitaires pour tous les modules
- [ ] Tests d'intégration
- [ ] Tests de performance
- [ ] Optimisations globales
- [ ] Correction des bugs

#### Critères de succès
- Couverture de tests > 70%
- Performance acceptable sur tous les formats
- Bugs critiques résolus

## Phase 7 : Documentation et Release (Durée estimée : 1 semaine)

### Jalon 7.1 : Documentation
**Objectif** : Documenter le projet

#### Tâches
- [ ] Documentation utilisateur (README, guides)
- [ ] Documentation développeur (API, architecture)
- [ ] Guide de migration depuis Koodo Reader original
- [ ] Changelog détaillé

#### Critères de succès
- Documentation complète et à jour
- Guides clairs pour utilisateurs et développeurs

### Jalon 7.2 : Release
**Objectif** : Préparer la première release

#### Tâches
- [ ] Versioning (semver)
- [ ] Build pour toutes les plateformes
- [ ] Tests sur toutes les plateformes
- [ ] Release notes
- [ ] Distribution (GitHub Releases)

#### Critères de succès
- Builds fonctionnels sur toutes les plateformes
- Release notes complètes
- Distribution réussie

## Métriques de Succès

### Techniques
- ✅ Pas de régression par rapport à Koodo Reader original
- ✅ Performance équivalente ou meilleure
- ✅ Couverture de tests > 70%
- ✅ Code maintenable et bien documenté

### Fonctionnelles
- ✅ Détection automatique fiable du type de livre
- ✅ Les deux lecteurs fonctionnent indépendamment
- ✅ Synchronisation différenciée opérationnelle
- ✅ Système de plugins extensible

### Utilisateur
- ✅ Interface intuitive
- ✅ Expérience de lecture optimale pour chaque type
- ✅ Migration transparente depuis l'original

## Risques et Mitigation

### Risque 1 : Complexité de la migration
**Mitigation** : Migration progressive, tests à chaque étape

### Risque 2 : Performance avec beaucoup d'images
**Mitigation** : Lazy loading, cache optimisé, compression

### Risque 3 : Conflits de synchronisation
**Mitigation** : Stratégies de fusion robustes, sauvegardes automatiques

### Risque 4 : Compatibilité avec plugins existants
**Mitigation** : API rétrocompatible, migration guide pour plugins

## Timeline Global

- **Phase 0** : 1 semaine (✅ En cours)
- **Phase 1** : 2-3 semaines
- **Phase 2** : 3-4 semaines
- **Phase 3** : 3-4 semaines
- **Phase 4** : 2-3 semaines
- **Phase 5** : 2-3 semaines
- **Phase 6** : 2 semaines
- **Phase 7** : 1 semaine

**Total estimé** : 16-22 semaines (4-5.5 mois)

## Prochaines Étapes Immédiates

### Ce qui est en place ✅
- Structure des modules créée
- BookTypeDetector fonctionnel
- Composants de base NovelReader et MangaReader
- Documentation complète

### Ce qu'il reste à faire 🎯

#### 1. Intégrer BookTypeDetector dans le flux existant
**Fichiers à modifier** :
- `src/utils/file/bookUtil.ts` - Ajouter la détection lors de l'import
- `src/pages/reader/component.tsx` - Utiliser le type détecté pour router

**Exemple** :
```typescript
import { BookTypeDetector, BookType } from '../modules/common/catalog';
const bookType = BookTypeDetector.detect(book);
book.bookType = bookType;
```

#### 2. Adapter le Router pour les deux lecteurs
- Créer `/reader/novel/:bookKey` pour les romans
- Créer `/reader/manga/:bookKey` pour les mangas
- Adapter la route existante `/reader` pour rediriger selon le type

#### 3. Adapter le Store Redux
- Ajouter `readerType` dans le store
- Séparer les états (novelState, mangaState)
- Créer des actions spécifiques par type

#### 4. Implémenter les Services de Base
- **NovelReader** : TextRenderer, NoteManager, DictionaryService
- **MangaReader** : ImageRenderer, PageNavigator, ZoomController

### Première Tâche Recommandée

**Intégrer BookTypeDetector dans l'import de livres**

1. Ouvrir `src/utils/file/bookUtil.ts`
2. Trouver où les livres sont créés après import
3. Ajouter la détection de type
4. Sauvegarder `bookType` dans le modèle Book
5. Tester avec un EPUB et un CBZ

Voir `docs/DEVELOPMENT.md` pour plus de détails sur le développement.

