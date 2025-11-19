/**
 * Composant principal du lecteur de romans
 * 
 * Ce composant gère l'affichage et l'interaction avec les romans/webnovels.
 * Il utilise le TextRenderer pour le rendu et le NoteManager pour les annotations.
 */

import React, { Component } from 'react';
import { NovelReaderProps, NovelReaderState } from '../types';
import Book from '../../../models/Book';
import { BookType } from '../../common/catalog';

/**
 * Composant NovelReader
 * 
 * Affiche un livre de type roman avec toutes les fonctionnalités associées.
 */
class NovelReader extends Component<NovelReaderProps, NovelReaderState> {
  constructor(props: NovelReaderProps) {
    super(props);
    
    // Vérifier que c'est bien un roman
    if (props.book.bookType !== BookType.NOVEL) {
      console.warn('NovelReader: Le livre n\'est pas de type NOVEL');
    }
    
    this.state = {
      currentPage: 0,
      totalPages: 0,
      progress: 0,
      isNoteMode: false,
      selectedText: null,
      notes: [],
      settings: {
        fontSize: 16,
        fontFamily: 'serif',
        lineHeight: 1.6,
        paragraphSpacing: 1,
        margin: {
          top: 20,
          bottom: 20,
          left: 40,
          right: 40
        },
        theme: 'light',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        brightness: 100
      }
    };
  }

  componentDidMount() {
    // TODO: Charger le contenu du livre
    // TODO: Charger les notes existantes
    // TODO: Restaurer la progression
    console.log('NovelReader mounted for book:', this.props.book.name);
  }

  componentWillUnmount() {
    // TODO: Sauvegarder la progression
    // TODO: Sauvegarder les notes
  }

  render() {
    const { book } = this.props;
    const { settings } = this.state;

    return (
      <div className="novel-reader" style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
        fontFamily: settings.fontFamily,
        fontSize: `${settings.fontSize}px`,
        lineHeight: settings.lineHeight,
        padding: `${settings.margin.top}px ${settings.margin.right}px ${settings.margin.bottom}px ${settings.margin.left}px`
      }}>
        <div className="novel-reader-header">
          <h1>{book.name}</h1>
          <p>Par {book.author}</p>
        </div>
        
        <div className="novel-reader-content">
          {/* TODO: Intégrer TextRenderer ici */}
          <p>Contenu du livre à afficher ici...</p>
          <p>Le lecteur de romans est en cours de développement.</p>
        </div>
        
        <div className="novel-reader-footer">
          <p>Progression: {this.state.progress}%</p>
        </div>
      </div>
    );
  }
}

export default NovelReader;

