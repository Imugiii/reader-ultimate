/**
 * Composant principal du lecteur de mangas
 * 
 * Ce composant gère l'affichage et l'interaction avec les mangas/webtoons.
 * Il utilise l'ImageRenderer pour le rendu et le PageNavigator pour la navigation.
 */

import React, { Component } from 'react';
import { MangaReaderProps, MangaReaderState, LayoutMode } from '../types';
import Book from '../../../models/Book';
import { BookType } from '../../common/catalog';

/**
 * Composant MangaReader
 * 
 * Affiche un livre de type manga avec toutes les fonctionnalités associées.
 */
class MangaReader extends Component<MangaReaderProps, MangaReaderState> {
  constructor(props: MangaReaderProps) {
    super(props);
    
    // Vérifier que c'est bien un manga
    if (props.book.bookType !== BookType.MANGA) {
      console.warn('MangaReader: Le livre n\'est pas de type MANGA');
    }
    
    this.state = {
      currentPage: 0,
      totalPages: 0,
      progress: 0,
      images: [],
      layout: LayoutMode.SINGLE,
      zoomLevel: 1,
      isZoomed: false,
      bookmarks: [],
      settings: {
        layout: LayoutMode.SINGLE,
        zoomLevel: 1,
        fitMode: 'width',
        backgroundColor: '#000000',
        showPageNumbers: true,
        showThumbnails: false,
        preloadPages: 3,
        quality: 'high'
      }
    };
  }

  componentDidMount() {
    // TODO: Charger les images du livre
    // TODO: Charger les bookmarks existants
    // TODO: Restaurer la progression
    // TODO: Restaurer les paramètres utilisateur
    console.log('MangaReader mounted for book:', this.props.book.name);
  }

  componentWillUnmount() {
    // TODO: Sauvegarder la progression
    // TODO: Sauvegarder les bookmarks
    // TODO: Sauvegarder les paramètres
  }

  handleLayoutChange = (layout: LayoutMode) => {
    this.setState({
      layout,
      settings: {
        ...this.state.settings,
        layout
      }
    });
  }

  handleZoom = (level: number) => {
    this.setState({
      zoomLevel: level,
      isZoomed: level > 1,
      settings: {
        ...this.state.settings,
        zoomLevel: level
      }
    });
  }

  handlePageChange = (page: number) => {
    if (page >= 0 && page < this.state.totalPages) {
      this.setState({ currentPage: page });
      // TODO: Mettre à jour la progression
    }
  }

  render() {
    const { book } = this.props;
    const { settings, currentPage, totalPages, layout } = this.state;

    return (
      <div 
        className="manga-reader" 
        style={{
          backgroundColor: settings.backgroundColor,
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <div className="manga-reader-header">
          <h1>{book.name}</h1>
          <div className="manga-reader-controls">
            <button onClick={() => this.handlePageChange(currentPage - 1)}>
              Précédent
            </button>
            <span>{currentPage + 1} / {totalPages}</span>
            <button onClick={() => this.handlePageChange(currentPage + 1)}>
              Suivant
            </button>
          </div>
        </div>
        
        <div className="manga-reader-content">
          {/* TODO: Intégrer ImageRenderer ici */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <p>Contenu du manga à afficher ici...</p>
            <p>Layout: {layout}</p>
            <p>Le lecteur de mangas est en cours de développement.</p>
          </div>
        </div>
        
        <div className="manga-reader-footer">
          <p>Progression: {this.state.progress}%</p>
        </div>
      </div>
    );
  }
}

export default MangaReader;

