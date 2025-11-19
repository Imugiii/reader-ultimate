/**
 * Module de gestion du catalogue de livres
 * 
 * Ce module contient :
 * - BookTypeDetector : Détection automatique du type de livre
 * - BookManager : Gestion centralisée des livres (à venir)
 * - Types et enums pour les livres
 */

export { BookType, BookFormat, FORMAT_TO_TYPE_MAP, FORMAT_EXTENSIONS } from './BookType';
export { BookTypeDetector } from './BookTypeDetector';
export { default as BookTypeDetectorDefault } from './BookTypeDetector';

