/**
 * Types pour le module Lecteur de Romans
 */

import Book from '../../../models/Book';
import { BookType } from '../../common/catalog';

/**
 * Props pour le composant NovelReader
 */
export interface NovelReaderProps {
  book: Book;
  onClose?: () => void;
  onProgressUpdate?: (progress: number) => void;
}

/**
 * État du lecteur de romans
 */
export interface NovelReaderState {
  currentPage: number;
  totalPages: number;
  progress: number;
  isNoteMode: boolean;
  selectedText: string | null;
  notes: Note[];
  settings: ReaderSettings;
}

/**
 * Note/Annotation sur le texte
 */
export interface Note {
  id: string;
  bookKey: string;
  chapter: string;
  text: string;
  note: string;
  color?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Paramètres de lecture
 */
export interface ReaderSettings {
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  paragraphSpacing: number;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  theme: 'light' | 'dark' | 'sepia';
  textColor: string;
  backgroundColor: string;
  brightness: number;
}

/**
 * Mode d'affichage
 */
export enum DisplayMode {
  SINGLE = 'single',      // Une colonne
  DOUBLE = 'double',      // Deux colonnes
  SCROLL = 'scroll'       // Défilement continu
}

/**
 * Configuration du rendu texte
 */
export interface TextRenderConfig {
  mode: DisplayMode;
  settings: ReaderSettings;
  enableNotes: boolean;
  enableDictionary: boolean;
  enableAI: boolean;
}

