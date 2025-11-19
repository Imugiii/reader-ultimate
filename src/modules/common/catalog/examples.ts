/**
 * Exemples d'utilisation du BookTypeDetector
 * 
 * Ce fichier montre comment utiliser le détecteur de type de livre
 */

import Book from '../../../models/Book';
import { BookTypeDetector, BookType } from './BookTypeDetector';

// Exemple 1 : Détecter le type d'un roman EPUB
export function exampleNovelDetection() {
  const novel = new Book(
    'novel-001',
    'Mon Super Roman',
    'Auteur Inconnu',
    'Une histoire passionnante',
    'md5-hash',
    'cover.jpg',
    'EPUB',
    'Éditeur',
    1000000,
    300,
    '/path/to/book.epub',
    'utf-8'
  );
  
  const type = BookTypeDetector.detect(novel);
  console.log(`Type détecté: ${type}`); // BookType.NOVEL
  
  if (BookTypeDetector.isNovel(novel)) {
    console.log('C\'est un roman !');
  }
}

// Exemple 2 : Détecter le type d'un manga CBZ
export function exampleMangaDetection() {
  const manga = new Book(
    'manga-001',
    'One Piece - Volume 1',
    'Eiichiro Oda',
    'Aventure de pirates',
    'md5-hash',
    'cover.jpg',
    'CBZ',
    'Shueisha',
    50000000,
    200,
    '/path/to/manga.cbz',
    'utf-8'
  );
  
  const type = BookTypeDetector.detect(manga);
  console.log(`Type détecté: ${type}`); // BookType.MANGA
  
  if (BookTypeDetector.isManga(manga)) {
    console.log('C\'est un manga !');
  }
}

// Exemple 3 : Détection par métadonnées
export function exampleMetadataDetection() {
  // Même avec un format ambigu, les métadonnées peuvent aider
  const book = new Book(
    'book-001',
    'Mon Webtoon Favori',
    'Auteur',
    'Un webtoon coréen',
    'md5-hash',
    'cover.jpg',
    'PDF', // Format ambigu
    'Publisher',
    2000000,
    150,
    '/path/to/book.pdf',
    'utf-8'
  );
  
  // La détection utilise les métadonnées (nom contient "webtoon")
  const type = BookTypeDetector.detect(book);
  console.log(`Type détecté: ${type}`); // BookType.MANGA
}

// Exemple 4 : Utilisation dans un composant React (exemple)
export function exampleInComponent() {
  // Simuler un livre depuis le store Redux
  const book: Book = {
    key: 'book-123',
    name: 'Mon Livre',
    author: 'Auteur',
    description: 'Description',
    md5: 'md5',
    cover: 'cover.jpg',
    format: 'EPUB',
    publisher: 'Publisher',
    size: 1000000,
    page: 300,
    path: '/path/to/book',
    charset: 'utf-8'
  } as Book;
  
  // Détecter le type
  const bookType = BookTypeDetector.detect(book);
  
  // Router vers le bon lecteur
  if (bookType === BookType.NOVEL) {
    // Rediriger vers /reader/novel/:bookKey
    console.log('Ouvrir avec le lecteur de romans');
  } else if (bookType === BookType.MANGA) {
    // Rediriger vers /reader/manga/:bookKey
    console.log('Ouvrir avec le lecteur de mangas');
  }
}

