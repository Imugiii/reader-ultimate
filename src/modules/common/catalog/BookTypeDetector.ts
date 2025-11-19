import Book from '../../../models/Book';
import { BookType, BookFormat, FORMAT_TO_TYPE_MAP } from './BookType';

/**
 * Détecteur de type de livre
 * 
 * Identifie automatiquement si un livre est un roman/webnovel ou un manga/webtoon
 * basé sur le format, les métadonnées et l'analyse du contenu.
 */
export class BookTypeDetector {
  /**
   * Détecte le type de livre basé sur le format
   * 
   * @param book - Le livre à analyser
   * @returns Le type détecté (NOVEL, MANGA, ou UNKNOWN)
   */
  static detectFromFormat(book: Book): BookType {
    const format = book.format.toUpperCase() as BookFormat;
    
    // Vérifier le mapping direct
    const mappedType = FORMAT_TO_TYPE_MAP[format];
    if (mappedType && mappedType !== BookType.UNKNOWN) {
      return mappedType;
    }
    
    // Formats comics commencent par "CB"
    if (format.startsWith('CB')) {
      return BookType.MANGA;
    }
    
    // Formats texte connus
    const textFormats = [
      BookFormat.EPUB, BookFormat.MOBI, BookFormat.AZW3, BookFormat.AZW,
      BookFormat.TXT, BookFormat.FB2, BookFormat.HTML, BookFormat.XHTML,
      BookFormat.MHTML, BookFormat.XML, BookFormat.MD, BookFormat.DOCX
    ];
    if (textFormats.includes(format)) {
      return BookType.NOVEL;
    }
    
    // PDF nécessite une analyse plus poussée
    if (format === BookFormat.PDF) {
      return BookType.UNKNOWN;
    }
    
    return BookType.UNKNOWN;
  }
  
  /**
   * Détecte le type de livre basé sur les métadonnées
   * 
   * @param book - Le livre à analyser
   * @returns Le type détecté ou null si indéterminé
   */
  static detectFromMetadata(book: Book): BookType | null {
    const name = book.name.toLowerCase();
    const author = book.author.toLowerCase();
    const description = book.description?.toLowerCase() || '';
    const publisher = book.publisher?.toLowerCase() || '';
    
    // Mots-clés pour mangas
    const mangaKeywords = [
      'manga', 'webtoon', 'manhwa', 'manhua', 'comic', 'bande dessinée',
      'bd', 'graphic novel', 'scan', 'scanlation'
    ];
    
    // Mots-clés pour romans
    const novelKeywords = [
      'novel', 'roman', 'light novel', 'webnovel', 'fiction', 'littérature',
      'book', 'livre', 'story', 'histoire'
    ];
    
    // Vérifier dans le nom
    for (const keyword of mangaKeywords) {
      if (name.includes(keyword)) {
        return BookType.MANGA;
      }
    }
    
    for (const keyword of novelKeywords) {
      if (name.includes(keyword)) {
        return BookType.NOVEL;
      }
    }
    
    // Vérifier dans la description
    for (const keyword of mangaKeywords) {
      if (description.includes(keyword)) {
        return BookType.MANGA;
      }
    }
    
    for (const keyword of novelKeywords) {
      if (description.includes(keyword)) {
        return BookType.NOVEL;
      }
    }
    
    // Vérifier le publisher (certains éditeurs sont spécialisés)
    const mangaPublishers = ['shueisha', 'shogakukan', 'kodansha', 'viz media'];
    if (mangaPublishers.some(p => publisher.includes(p))) {
      return BookType.MANGA;
    }
    
    return null;
  }
  
  /**
   * Détecte le type de livre de manière complète
   * 
   * Combine l'analyse du format, des métadonnées et du contenu si nécessaire.
   * 
   * @param book - Le livre à analyser
   * @returns Le type détecté (NOVEL ou MANGA, jamais UNKNOWN pour l'utilisateur)
   */
  static detect(book: Book): BookType {
    // 1. Détection basée sur le format (le plus fiable)
    const formatType = this.detectFromFormat(book);
    if (formatType !== BookType.UNKNOWN) {
      return formatType;
    }
    
    // 2. Détection basée sur les métadonnées
    const metadataType = this.detectFromMetadata(book);
    if (metadataType) {
      return metadataType;
    }
    
    // 3. Pour PDF et cas indéterminés, on peut analyser le contenu
    // Pour l'instant, on retourne NOVEL par défaut (à améliorer plus tard)
    if (book.format.toUpperCase() === BookFormat.PDF) {
      // TODO: Analyser le contenu PDF pour déterminer le type
      // Pour l'instant, on suppose que c'est un roman par défaut
      return BookType.NOVEL;
    }
    
    // Par défaut, on considère que c'est un roman
    return BookType.NOVEL;
  }
  
  /**
   * Vérifie si un livre est un roman
   * 
   * @param book - Le livre à vérifier
   * @returns true si c'est un roman
   */
  static isNovel(book: Book): boolean {
    return this.detect(book) === BookType.NOVEL;
  }
  
  /**
   * Vérifie si un livre est un manga
   * 
   * @param book - Le livre à vérifier
   * @returns true si c'est un manga
   */
  static isManga(book: Book): boolean {
    return this.detect(book) === BookType.MANGA;
  }
  
  /**
   * Obtient le type de livre de manière synchrone (sans analyse de contenu)
   * 
   * @param book - Le livre à analyser
   * @returns Le type détecté
   */
  static getTypeSync(book: Book): BookType {
    const formatType = this.detectFromFormat(book);
    if (formatType !== BookType.UNKNOWN) {
      return formatType;
    }
    
    const metadataType = this.detectFromMetadata(book);
    if (metadataType) {
      return metadataType;
    }
    
    // Par défaut
    return BookType.NOVEL;
  }
}

export default BookTypeDetector;

