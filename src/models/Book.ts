import { BookType } from '../modules/common/catalog';

class Book {
  key: string;
  name: string;
  author: string;
  description: string;
  md5: string;
  cover: string;
  format: string;
  publisher: string;
  size: number;
  page: number;
  path: string;
  charset: string;
  bookType?: BookType; // Type de livre (novel ou manga) - détecté automatiquement
  
  constructor(
    key: string,
    name: string,
    author: string,
    description: string,
    md5: string,
    cover: string,
    format: string,
    publisher: string,
    size: number,
    page: number,
    path: string,
    charset: string,
    bookType?: BookType
  ) {
    this.key = key;
    this.name = name;
    this.author = author;
    this.description = description;
    this.md5 = md5;
    this.cover = cover;
    this.format = format;
    this.publisher = publisher;
    this.size = size;
    this.page = page;
    this.path = path;
    this.charset = charset;
    this.bookType = bookType;
  }
}

export default Book;
