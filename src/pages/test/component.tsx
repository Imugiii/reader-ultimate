import React, { useState } from "react";
import "./test.css";
import { BookTypeDetector } from "../../modules/common/catalog";
import { BookType } from "../../modules/common/catalog";
import Book from "../../models/Book";

const TestBookTypePage: React.FC = () => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookFormat, setBookFormat] = useState("EPUB");
  const [bookDescription, setBookDescription] = useState("");
  const [result, setResult] = useState<any>(null);

  const testCases = [
    { name: 'One Piece Tome 1', author: 'Eiichiro Oda', format: 'CBZ', expected: 'manga' },
    { name: 'Naruto Vol. 1', author: 'Masashi Kishimoto', format: 'CBR', expected: 'manga' },
    { name: 'Harry Potter', author: 'J.K. Rowling', format: 'EPUB', expected: 'novel' },
    { name: 'Le Seigneur des Anneaux', author: 'J.R.R. Tolkien', format: 'MOBI', expected: 'novel' },
    { name: 'Solo Leveling', author: 'Chugong', format: 'EPUB', expected: 'novel' },
    { name: 'Attack on Titan', author: 'Hajime Isayama', format: 'CBZ', expected: 'manga' },
    { name: 'The Witcher', author: 'Andrzej Sapkowski', format: 'PDF', expected: 'novel' },
    { name: 'Berserk Tome 1', author: 'Kentaro Miura', format: 'CBR', expected: 'manga' },
    { name: '1984', author: 'George Orwell', format: 'TXT', expected: 'novel' },
    { name: 'Death Note', author: 'Tsugumi Ohba', format: 'CBZ', expected: 'manga' },
    { name: 'Dune', author: 'Frank Herbert', format: 'EPUB', expected: 'novel' },
    { name: 'Demon Slayer', author: 'Koyoharu Gotouge', format: 'CBZ', expected: 'manga' }
  ];

  const handleTest = () => {
    if (!bookName.trim()) {
      alert("Veuillez entrer un nom de livre");
      return;
    }

    const book = new Book(
      "test-key-" + Date.now(),
      bookName,
      bookAuthor || "",
      bookDescription || "",
      "test-md5",
      "",
      bookFormat,
      "",
      0,
      0,
      "",
      "",
      undefined // bookType sera détecté
    );

    const detectedType = BookTypeDetector.detect(book);
    const formatType = BookTypeDetector.detectFromFormat(book);
    const metadataType = BookTypeDetector.detectFromMetadata(book);

    setResult({
      detectedType,
      formatType,
      metadataType,
      book: {
        name: book.name,
        author: book.author,
        format: book.format,
        description: book.description
      }
    });
  };

  const handleTestCase = (testCase: typeof testCases[0]) => {
    setBookName(testCase.name);
    setBookAuthor(testCase.author);
    setBookFormat(testCase.format);
    setBookDescription("");
    
    // Créer le livre et tester
    const book = new Book(
      "test-key-" + Date.now(),
      testCase.name,
      testCase.author,
      "",
      "test-md5",
      "",
      testCase.format,
      "",
      0,
      0,
      "",
      "",
      undefined
    );

    const detectedType = BookTypeDetector.detect(book);
    const formatType = BookTypeDetector.detectFromFormat(book);
    const metadataType = BookTypeDetector.detectFromMetadata(book);

    setResult({
      detectedType,
      formatType,
      metadataType,
      book: {
        name: book.name,
        author: book.author,
        format: book.format,
        description: book.description
      }
    });
  };

  const getBadgeClass = (type: BookType) => {
    switch (type) {
      case BookType.NOVEL:
        return "badge-novel";
      case BookType.MANGA:
        return "badge-manga";
      default:
        return "badge-unknown";
    }
  };

  return (
    <div className="test-booktype-container">
      <div className="test-booktype-content">
        <h1>🔍 Test BookTypeDetector</h1>
        <p className="subtitle">Détecteur automatique de type de livre (Novel / Manga)</p>

        <div className="info-box">
          <p>
            <strong>📚 Comment ça marche :</strong> Le BookTypeDetector analyse le format du fichier, 
            les métadonnées (nom, auteur, description) et détermine automatiquement si c'est un 
            roman/webnovel ou un manga/webtoon.
          </p>
        </div>

        <div className="test-section">
          <h2>Test Manuel</h2>
          <div className="book-input">
            <input
              type="text"
              placeholder="Nom du livre (ex: One Piece Tome 1)"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTest()}
            />
            <input
              type="text"
              placeholder="Auteur (ex: Eiichiro Oda)"
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTest()}
            />
            <select
              value={bookFormat}
              onChange={(e) => setBookFormat(e.target.value)}
            >
              <option value="EPUB">EPUB</option>
              <option value="MOBI">MOBI</option>
              <option value="PDF">PDF</option>
              <option value="CBZ">CBZ</option>
              <option value="CBR">CBR</option>
              <option value="TXT">TXT</option>
              <option value="FB2">FB2</option>
              <option value="HTML">HTML</option>
              <option value="AZW3">AZW3</option>
            </select>
            <button onClick={handleTest}>🔍 Détecter</button>
          </div>
          {result && (
            <div className="result">
              <h3>📖 Résultat de la détection</h3>
              <div className="result-item">
                <strong>Type détecté :</strong>
                <span className={`badge ${getBadgeClass(result.detectedType)}`}>
                  {result.detectedType.toUpperCase()}
                </span>
              </div>
              <div className="result-item">
                <strong>Détection par format :</strong>
                <span className={`badge ${getBadgeClass(result.formatType)}`}>
                  {result.formatType.toUpperCase()}
                </span>
              </div>
              <div className="result-item">
                <strong>Détection par métadonnées :</strong>
                <span className={`badge ${result.metadataType ? getBadgeClass(result.metadataType) : 'badge-unknown'}`}>
                  {result.metadataType ? result.metadataType.toUpperCase() : 'NON DÉTECTÉ'}
                </span>
              </div>
              <div className="result-item">
                <strong>Format :</strong> {result.book.format}
              </div>
              <div className="result-item">
                <strong>Nom :</strong> {result.book.name}
              </div>
              {result.book.author && (
                <div className="result-item">
                  <strong>Auteur :</strong> {result.book.author}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="test-section">
          <h2>Cas de Test Prédéfinis</h2>
          <div className="test-cases">
            {testCases.map((testCase, index) => (
              <div
                key={index}
                className="test-case"
                onClick={() => handleTestCase(testCase)}
              >
                <h4>{testCase.name}</h4>
                <p><strong>Auteur:</strong> {testCase.author}</p>
                <p><strong>Format:</strong> {testCase.format}</p>
                <p>
                  <strong>Type attendu:</strong>{" "}
                  <span className={`badge ${getBadgeClass(testCase.expected as BookType)}`}>
                    {testCase.expected.toUpperCase()}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBookTypePage;

