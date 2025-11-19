/**
 * Types de livres supportés par l'application
 */
export enum BookType {
  NOVEL = 'novel',    // Romans, webnovels, light novels
  MANGA = 'manga',    // Mangas, webtoons, comics
  UNKNOWN = 'unknown' // Type non déterminé
}

/**
 * Formats de fichiers supportés
 */
export enum BookFormat {
  // Formats texte (romans)
  EPUB = 'EPUB',
  MOBI = 'MOBI',
  AZW3 = 'AZW3',
  AZW = 'AZW',
  TXT = 'TXT',
  FB2 = 'FB2',
  HTML = 'HTML',
  XHTML = 'XHTML',
  MHTML = 'MHTML',
  XML = 'XML',
  MD = 'MD',
  DOCX = 'DOCX',
  
  // Formats images (mangas)
  CBZ = 'CBZ',
  CBR = 'CBR',
  CBT = 'CBT',
  CB7 = 'CB7',
  
  // Format mixte (peut être les deux)
  PDF = 'PDF'
}

/**
 * Mapping des formats vers les types de livres
 */
export const FORMAT_TO_TYPE_MAP: Record<string, BookType> = {
  // Formats texte → Romans
  [BookFormat.EPUB]: BookType.NOVEL,
  [BookFormat.MOBI]: BookType.NOVEL,
  [BookFormat.AZW3]: BookType.NOVEL,
  [BookFormat.AZW]: BookType.NOVEL,
  [BookFormat.TXT]: BookType.NOVEL,
  [BookFormat.FB2]: BookType.NOVEL,
  [BookFormat.HTML]: BookType.NOVEL,
  [BookFormat.XHTML]: BookType.NOVEL,
  [BookFormat.MHTML]: BookType.NOVEL,
  [BookFormat.XML]: BookType.NOVEL,
  [BookFormat.MD]: BookType.NOVEL,
  [BookFormat.DOCX]: BookType.NOVEL,
  
  // Formats images → Mangas
  [BookFormat.CBZ]: BookType.MANGA,
  [BookFormat.CBR]: BookType.MANGA,
  [BookFormat.CBT]: BookType.MANGA,
  [BookFormat.CB7]: BookType.MANGA,
  
  // PDF peut être les deux → nécessite analyse
  [BookFormat.PDF]: BookType.UNKNOWN
};

/**
 * Extensions de fichiers pour chaque format
 */
export const FORMAT_EXTENSIONS: Record<BookFormat, string[]> = {
  [BookFormat.EPUB]: ['epub'],
  [BookFormat.MOBI]: ['mobi'],
  [BookFormat.AZW3]: ['azw3'],
  [BookFormat.AZW]: ['azw'],
  [BookFormat.TXT]: ['txt'],
  [BookFormat.FB2]: ['fb2'],
  [BookFormat.HTML]: ['html', 'htm'],
  [BookFormat.XHTML]: ['xhtml'],
  [BookFormat.MHTML]: ['mhtml'],
  [BookFormat.XML]: ['xml'],
  [BookFormat.MD]: ['md'],
  [BookFormat.DOCX]: ['docx'],
  [BookFormat.CBZ]: ['cbz'],
  [BookFormat.CBR]: ['cbr'],
  [BookFormat.CBT]: ['cbt'],
  [BookFormat.CB7]: ['cb7'],
  [BookFormat.PDF]: ['pdf']
};

