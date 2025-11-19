#!/bin/bash

# Script de gestion de versioning
# Usage: ./scripts/version.sh [patch|minor|major|prerelease] [devtest|beta|rc]

set -e

VERSION_TYPE=${1:-patch}
PREID=${2:-devtest}

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Gestion de Version ===${NC}"

# Vérifier qu'on est dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo -e "${RED}Erreur: package.json non trouvé. Exécutez ce script depuis la racine du projet.${NC}"
    exit 1
fi

# Obtenir la version actuelle
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${YELLOW}Version actuelle: ${CURRENT_VERSION}${NC}"

# Vérifier qu'on est sur la bonne branche
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "${YELLOW}Branche actuelle: ${CURRENT_BRANCH}${NC}"

if [ "$VERSION_TYPE" == "prerelease" ]; then
    if [ "$CURRENT_BRANCH" != "devtest" ] && [ "$CURRENT_BRANCH" != "develop" ]; then
        echo -e "${YELLOW}Attention: Vous n'êtes pas sur devtest ou develop${NC}"
        read -p "Continuer quand même? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    echo -e "${GREEN}Création d'une pré-version: ${PREID}${NC}"
    npm version prerelease --preid=$PREID --no-git-tag-version
    
    NEW_VERSION=$(node -p "require('./package.json').version")
    echo -e "${GREEN}Nouvelle version: ${NEW_VERSION}${NC}"
    
elif [ "$VERSION_TYPE" == "patch" ] || [ "$VERSION_TYPE" == "minor" ] || [ "$VERSION_TYPE" == "major" ]; then
    if [ "$CURRENT_BRANCH" != "master" ]; then
        echo -e "${RED}Erreur: Les versions stables doivent être créées sur master${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Création d'une version stable: ${VERSION_TYPE}${NC}"
    npm version $VERSION_TYPE --no-git-tag-version
    
    NEW_VERSION=$(node -p "require('./package.json').version")
    echo -e "${GREEN}Nouvelle version: ${NEW_VERSION}${NC}"
    
    # Créer le tag
    echo -e "${GREEN}Création du tag v${NEW_VERSION}${NC}"
    git tag -a "v${NEW_VERSION}" -m "Release version ${NEW_VERSION}"
else
    echo -e "${RED}Erreur: Type de version invalide: ${VERSION_TYPE}${NC}"
    echo "Usage: ./scripts/version.sh [patch|minor|major|prerelease] [devtest|beta|rc]"
    exit 1
fi

# Mettre à jour CHANGELOG.md (manuellement pour l'instant)
echo -e "${YELLOW}N'oubliez pas de mettre à jour CHANGELOG.md${NC}"

# Afficher les prochaines étapes
echo -e "${GREEN}=== Prochaines étapes ===${NC}"
echo "1. Vérifier les changements: git diff"
echo "2. Commit: git add . && git commit -m 'chore: bump version to ${NEW_VERSION}'"
if [ "$VERSION_TYPE" != "prerelease" ]; then
    echo "3. Push: git push origin master && git push origin v${NEW_VERSION}"
else
    echo "3. Push: git push origin ${CURRENT_BRANCH}"
fi
echo "4. Mettre à jour CHANGELOG.md"
echo "5. Créer les builds et tester"

