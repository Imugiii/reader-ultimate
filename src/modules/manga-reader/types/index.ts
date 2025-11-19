/**
 * Types pour le module Lecteur de Mangas
 */

import Book from '../../../models/Book';
import { BookType } from '../../common/catalog';

/**
 * Props pour le composant MangaReader
 */
export interface MangaReaderProps {
  book: Book;
  onClose?: () => void;
  onProgressUpdate?: (progress: number) => void;
}

/**
 * État du lecteur de mangas
 */
export interface MangaReaderState {
  currentPage: number;
  totalPages: number;
  progress: number;
  images: ImageData[];
  layout: LayoutMode;
  zoomLevel: number;
  isZoomed: boolean;
  bookmarks: Bookmark[];
  settings: MangaSettings;
}

/**
 * Données d'une image
 */
export interface ImageData {
  index: number;
  url: string;
  width: number;
  height: number;
  loaded: boolean;
}

/**
 * Mode de layout
 */
export enum LayoutMode {
  SINGLE = 'single',           // Une page
  DOUBLE = 'double',           // Double page
  VERTICAL_SCROLL = 'vertical', // Défilement vertical
  HORIZONTAL_SCROLL = 'horizontal', // Défilement horizontal
  WEBTOON = 'webtoon'          // Mode webtoon
}

/**
 * Bookmark (marque-page)
 */
export interface Bookmark {
  id: string;
  bookKey: string;
  page: number;
  chapter?: string;
  note?: string;
  createdAt: Date;
}

/**
 * Paramètres de lecture manga
 */
export interface MangaSettings {
  layout: LayoutMode;
  zoomLevel: number;
  fitMode: 'width' | 'height' | 'both' | 'original';
  backgroundColor: string;
  showPageNumbers: boolean;
  showThumbnails: boolean;
  preloadPages: number; // Nombre de pages à précharger
  quality: 'low' | 'medium' | 'high' | 'original';
}

/**
 * Configuration du rendu images
 */
export interface ImageRenderConfig {
  layout: LayoutMode;
  zoom: number;
  fitMode: MangaSettings['fitMode'];
  quality: MangaSettings['quality'];
  enablePreload: boolean;
  preloadCount: number;
}

